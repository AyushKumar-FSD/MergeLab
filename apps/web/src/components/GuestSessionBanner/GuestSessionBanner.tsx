"use client";

import { isGuestUser, clearGuestSession } from "@/lib/auth";
import { useRouter } from "next/navigation";

export function GuestSessionBanner() {
  const isGuest = isGuestUser();
  const router = useRouter();

  if (!isGuest) {
    return null;
  }

  const handleSignUp = () => {
    clearGuestSession();
    router.push("/signup");
  };

  const handleSignIn = () => {
    clearGuestSession();
    router.push("/login");
  };

  return (
    <div className="rounded-2xl border border-[#e5c07b] bg-[rgba(255,255,255,0.05)] px-4 py-4 sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[#e5c07b]">Guest session</p>
          <p className="mt-2 text-sm leading-6 text-[#e6e1f2]">
            Your work is temporary and will be deleted after you leave unless you create an account.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={handleSignUp}
            className="rounded-full bg-gradient-to-r from-[#c5b3e6] to-[#a3e2cf] px-4 py-2 text-sm font-semibold text-[#16121e] transition hover:brightness-110"
          >
            Create Account
          </button>
          <button
            onClick={handleSignIn}
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-[#e6e1f2] transition hover:bg-white/10"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
