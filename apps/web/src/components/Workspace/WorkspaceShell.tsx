"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCurrentUser, signOut, isGuestUser, clearGuestSession } from "@/lib/auth";
import { GuestSessionBanner } from "@/components/GuestSessionBanner/GuestSessionBanner";
import type { StoredUser } from "@/lib/auth";

export function WorkspaceShell() {
  const [user, setUser] = useState<StoredUser | null>(null);
  const [isGuest, setIsGuest] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const current = getCurrentUser();
    const guestMode = isGuestUser();
    setIsGuest(guestMode);

    if (!current && !guestMode) {
      router.replace("/login");
      return;
    }

    if (current && !guestMode && !current.onboardingComplete) {
      router.replace("/onboarding");
      return;
    }

    setUser(current);
  }, [router]);

  if (!user && !isGuest) {
    return (
      <main className="min-h-screen bg-[#16121e] text-[#e6e1f2] flex items-center justify-center px-6 py-16">
        <div className="rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] p-8 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-[#c5b3e6]">Loading workspace</p>
        </div>
      </main>
    );
  }

  if (isGuest && !user) {
    return (
      <main className="min-h-screen bg-[#16121e] px-6 py-16 text-[#e6e1f2] sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl space-y-6">
          <GuestSessionBanner />

          <div className="rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] p-8">
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[#c5b3e6]">Guest workspace</p>
                <h1 className="mt-3 text-3xl font-semibold text-[#e6e1f2]">Welcome to MergeLab</h1>
                <p className="mt-3 text-sm leading-6 text-[#9d93b3]">
                  Continue coding in a temporary session until you choose to create an account.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-[1.4fr_0.6fr]">
                <button className="w-full rounded-full bg-gradient-to-r from-[#c5b3e6] to-[#a3e2cf] px-4 py-3 text-sm font-semibold text-[#16121e] transition hover:brightness-110">
                  Open Terminal
                </button>
                <button
                  type="button"
                  onClick={() => {
                    clearGuestSession();
                    router.push("/");
                  }}
                  className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-[#e6e1f2] transition hover:bg-white/10"
                >
                  Exit guest mode
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#16121e] px-6 py-16 text-[#e6e1f2] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#c5b3e6]">Workspace</p>
              <h1 className="mt-2 text-3xl font-semibold text-[#e6e1f2]">Welcome back, {user?.name}.</h1>
            </div>
            <button
              type="button"
              onClick={() => {
                signOut();
                router.push("/");
              }}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-[#e6e1f2] transition hover:bg-white/10"
            >
              Sign out
            </button>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[#1e1a2b] p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(255,255,255,0.05)] text-3xl">
                  {user?.avatar}
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-[#e6e1f2]">{user?.name}</h2>
                  <p className="text-sm text-[#9d93b3]">{user?.email}</p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] p-5">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[#c5b3e6]">Qualification</p>
                  <p className="mt-2 text-lg font-semibold text-[#e6e1f2]">{user?.qualification || "Not selected"}</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[#c5b3e6]">Skills</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {user?.skills && user.skills.length > 0 ? (
                      user.skills.map((skill) => (
                        <span key={skill} className="rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] px-3 py-1 text-sm text-[#e6e1f2]">
                          {skill}
                        </span>
                      ))
                    ) : (
                      <span className="rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] px-3 py-1 text-sm text-[#9d93b3]">
                        No skills selected
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[#1e1a2b] p-6">
              <p className="text-sm font-medium text-[#c5b3e6]">Ready to begin</p>
              <p className="mt-2 text-2xl font-semibold text-[#e6e1f2]">Everything you need in one place.</p>
              <p className="mt-4 text-sm leading-7 text-[#9d93b3]">
                Keep notes, collaborate in context, and move from concept to execution without losing momentum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
