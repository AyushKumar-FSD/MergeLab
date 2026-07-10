"use client";

import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  getCurrentUser,
  qualificationOptions,
  skillOptions,
  StoredUser,
  updateCurrentUser,
} from "@/lib/auth";

export default function OnboardingPage() {
  const [user, setUser] = useState<StoredUser | null>(null);
  const [avatar, setAvatar] = useState("🧠");
  const [profilePicture, setProfilePicture] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
  const [qualification, setQualification] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const current = getCurrentUser();
    if (!current) {
      router.replace("/login");
      return;
    }

    if (current.onboardingComplete) {
      router.replace("/workspace");
      return;
    }

    setUser(current);
    setAvatar(current.avatar || "🧠");
    setProfilePicture(current.profilePicture ?? "");
    setSkills(current.skills);
    setQualification(current.qualification);
  }, [router]);

  const toggleSkill = (skill: string) => {
    setSkills((currentSkills) =>
      currentSkills.includes(skill)
        ? currentSkills.filter((item) => item !== skill)
        : [...currentSkills, skill],
    );
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setProfilePicture(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (!qualification) {
      setError("Please select your qualification.");
      return;
    }

    const updated = updateCurrentUser({
      avatar,
      profilePicture,
      skills,
      qualification,
      onboardingComplete: true,
    });

    if (!updated) {
      setError("Unable to save onboarding. Please try again.");
      return;
    }

    router.push("/workspace");
  };

  if (!user) {
    return (
      <main className="min-h-screen bg-slate-950 px-6 py-16 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-xl rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-purple-950/20 backdrop-blur-xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-purple-300">Onboarding</p>
          <p className="mt-4 text-lg text-slate-300">Loading your profile...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-purple-950/20 backdrop-blur-xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-purple-300">Complete your profile</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight">One last step before your workspace.</h1>
          <p className="mt-2 text-sm text-slate-400">
            Add an avatar, upload a profile picture, choose your skills, and select your qualification.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-purple-300">Avatar</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {["🧠", "🚀", "🛠️", "🎨", "✨"].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setAvatar(option)}
                    className={`rounded-3xl border px-4 py-3 text-3xl transition ${
                      avatar === option
                        ? "border-purple-400 bg-purple-500/10"
                        : "border-white/10 bg-slate-950/80"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <div className="mt-8">
                <p className="text-sm uppercase tracking-[0.2em] text-purple-300">Profile picture</p>
                <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <label className="inline-flex items-center gap-2 rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm font-medium text-white transition hover:border-purple-400/60" htmlFor="profilePicture">
                    Upload photo
                    <input
                      id="profilePicture"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="sr-only"
                    />
                  </label>

                  {profilePicture ? (
                    <img
                      src={profilePicture}
                      alt="Profile preview"
                      className="h-20 w-20 rounded-3xl object-cover"
                    />
                  ) : (
                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-slate-950/80 text-slate-400">Preview</div>
                  )}
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-purple-300">Qualification</p>
              <div className="mt-4 space-y-3">
                {qualificationOptions.map((option) => (
                  <label key={option} className="flex items-center gap-3 rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm transition hover:border-purple-400/50">
                    <input
                      type="radio"
                      name="qualification"
                      value={option}
                      checked={qualification === option}
                      onChange={() => setQualification(option)}
                      className="h-4 w-4 text-purple-400 accent-purple-400"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-purple-300">Skills</p>
                <p className="mt-2 text-sm text-slate-400">Choose the skills that best describe your experience.</p>
              </div>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">{skills.length} selected</span>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {skillOptions.map((skill) => (
                <button
                  key={skill}
                  type="button"
                  onClick={() => toggleSkill(skill)}
                  className={`rounded-3xl border px-4 py-3 text-left text-sm transition ${
                    skills.includes(skill)
                      ? "border-purple-400 bg-purple-500/10 text-white"
                      : "border-white/10 bg-slate-950/80 text-slate-300 hover:border-purple-400/40"
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>

          {error ? <p className="rounded-3xl bg-rose-500/10 px-4 py-3 text-sm text-rose-200">{error}</p> : null}

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/login" className="text-sm text-slate-400 transition hover:text-white">
              Return to login
            </Link>
            <button
              type="submit"
              className="rounded-3xl bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:brightness-110"
            >
              Save and continue
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
