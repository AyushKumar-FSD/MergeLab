"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { createGuestSession } from "@/lib/auth";

export function GuestWorkspaceOptions() {
  const router = useRouter();

  const handleContinueAsGuest = () => {
    createGuestSession();
    router.push("/workspace");
  };

  return (
    <div className="min-h-screen bg-[#16121e] px-6 py-16 text-[#e6e1f2] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c5b3e6]">Get started</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#e6e1f2] sm:text-5xl">
            Start coding instantly or save your work.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-[#9d93b3] sm:text-lg">
            Choose guest mode for quick experiments or create a free account for persistent workspaces.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-[#c5b3e6]">Guest mode</p>
            <h2 className="mt-4 text-2xl font-semibold text-[#e6e1f2]">Continue as Guest</h2>
            <p className="mt-4 flex-1 text-sm leading-6 text-[#9d93b3]">
              Launch a temporary workspace immediately with no login required.
            </p>
            <button
              onClick={handleContinueAsGuest}
              className="mt-8 w-full rounded-full bg-gradient-to-r from-[#c5b3e6] to-[#a3e2cf] px-5 py-3 text-sm font-semibold text-[#16121e] transition hover:brightness-110"
            >
              Open Terminal
            </button>
          </div>

          <div className="flex flex-col rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-[#c5b3e6]">Account</p>
            <h2 className="mt-4 text-2xl font-semibold text-[#e6e1f2]">Create Free Account</h2>
            <p className="mt-4 flex-1 text-sm leading-6 text-[#9d93b3]">
              Save projects, collaborate with teammates, and continue work across sessions.
            </p>
            <Link
              href="/signup"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-[rgba(255,255,255,0.1)] bg-[#1e1a2b] px-5 py-3 text-sm font-semibold text-[#e6e1f2] transition hover:bg-white/5"
            >
              Create Account
            </Link>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-[#9d93b3]">
          Already have an account?{' '}
          <Link href="/login" className="font-semibold text-[#c5b3e6] transition hover:text-[#e6e1f2]">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
