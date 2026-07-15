"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getCurrentUser, signOut } from "@/lib/auth";
import type { StoredUser } from "@/lib/auth";

export function WorkspaceShell() {
  const [user, setUser] = useState<StoredUser | null>(null);
  const router = useRouter();

  useEffect(() => {
    const current = getCurrentUser();
    if (!current) {
      router.replace("/login");
      return;
    }

    if (!current.onboardingComplete) {
      router.replace("/onboarding");
      return;
    }

    setUser(current);
  }, [router]);

  if (!user) {
    return (
      <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-8 text-center shadow-2xl shadow-purple-950/20">
          <p className="text-sm uppercase tracking-[0.25em] text-purple-300">Loading workspace</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,_#090611_0%,_#130d1f_45%,_#221236_100%)] px-6 py-16 text-white sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 rounded-[32px] border border-white/10 bg-white/8 p-8 shadow-2xl shadow-purple-950/20 backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">Workspace</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Welcome back, {user.name}.
            </h1>
            <p className="mt-2 text-sm text-slate-300">
              Your profile is ready. Continue your collaboration from the workspace.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                signOut();
                router.push("/");
              }}
              className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20"
            >
              Sign out
            </button>
            <Link
              href="/"
              className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20"
            >
              Home
            </Link>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[24px] border border-white/10 bg-slate-950/70 p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-purple-500/15 text-4xl">
                {user.avatar}
              </div>
              <div>
                <p className="text-sm text-slate-400">Profile</p>
                <h2 className="mt-1 text-2xl font-semibold text-white">{user.name}</h2>
                <p className="text-sm text-slate-300">{user.email}</p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 rounded-3xl border border-white/10 bg-slate-900/80 p-5">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-purple-300">Qualification</p>
                <p className="mt-2 text-lg font-semibold text-white">{user.qualification || "Not selected"}</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-purple-300">Skills</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {user.skills.length > 0 ? (
                    user.skills.map((skill) => (
                      <span key={skill} className="rounded-full bg-purple-500/10 px-3 py-1 text-sm text-purple-100">
                        {skill}
                      </span>
                    ))
                  ) : (
                    <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-400">No skills selected</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-gradient-to-br from-[#2b1540] to-[#140a1e] p-6">
            <p className="text-sm font-medium text-purple-200">Ready to begin</p>
            <p className="mt-2 text-2xl font-semibold">Everything you need in one place.</p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Keep notes, collaborate in context, and move from concept to execution without losing momentum.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
