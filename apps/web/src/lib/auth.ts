export type StoredUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  onboardingComplete: boolean;
  avatar: string;
  profilePicture?: string;
  skills: string[];
  qualification: string;
};

const USERS_KEY = "mergelab-users";
const CURRENT_USER_KEY = "mergelab-current-user";

export const skillOptions = [
  "Design",
  "Engineering",
  "Product",
  "Research",
  "Marketing",
];

export const qualificationOptions = [
  "High school",
  "Bachelor's degree",
  "Master's degree",
  "PhD",
];

function isBrowser() {
  return typeof window !== "undefined";
}

function loadUsers(): StoredUser[] {
  if (!isBrowser()) {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(USERS_KEY) ?? "[]";
    return JSON.parse(raw) as StoredUser[];
  } catch {
    return [];
  }
}

function saveUsers(users: StoredUser[]) {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function setCurrentEmail(email: string) {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.setItem(CURRENT_USER_KEY, email);
}

export function getCurrentUser(): StoredUser | null {
  if (!isBrowser()) {
    return null;
  }

  const currentEmail = window.localStorage.getItem(CURRENT_USER_KEY);
  if (!currentEmail) {
    return null;
  }

  return loadUsers().find((user) => user.email === currentEmail) ?? null;
}

export function signOut() {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.removeItem(CURRENT_USER_KEY);
}

export function loginUser(email: string, password: string): { user?: StoredUser; error?: string } {
  const users = loadUsers();
  const user = users.find((item) => item.email.toLowerCase() === email.toLowerCase());

  if (!user) {
    return { error: "No account found for that email." };
  }

  if (user.password !== password) {
    return { error: "Invalid password. Please try again." };
  }

  setCurrentEmail(user.email);
  return { user };
}

export function signUpUser(
  name: string,
  email: string,
  password: string,
): { user?: StoredUser; error?: string } {
  const users = loadUsers();
  const normalizedEmail = email.toLowerCase();
  const existing = users.find((item) => item.email.toLowerCase() === normalizedEmail);

  if (existing) {
    return { error: "An account already exists with that email." };
  }

  const newUser: StoredUser = {
    id: typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random()}`,
    name,
    email: normalizedEmail,
    password,
    onboardingComplete: false,
    avatar: "🧠",
    profilePicture: "",
    skills: [],
    qualification: "",
  };

  saveUsers([...users, newUser]);
  setCurrentEmail(newUser.email);

  return { user: newUser };
}

export function updateCurrentUser(
  update: Partial<Omit<StoredUser, "id" | "email" | "password">>,
): StoredUser | null {
  const current = getCurrentUser();
  if (!current) {
    return null;
  }

  const users = loadUsers();
  const nextUser = { ...current, ...update };
  const updatedUsers = users.map((user) =>
    user.email === current.email ? nextUser : user,
  );

  saveUsers(updatedUsers);
  setCurrentEmail(nextUser.email);

  return nextUser;
}
