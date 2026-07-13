"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getCurrentUser, loginUser } from "@/lib/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      router.replace(currentUser.onboardingComplete ? "/workspace" : "/onboarding");
    }
  }, [router]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const result = loginUser(email.trim(), password);
    if (result.error) {
      setError(result.error);
      return;
    }

    const target = result.user?.onboardingComplete ? "/workspace" : "/onboarding";
    router.push(target);
  };

  return (
    <main className="relative min-h-screen bg-[#16121e] px-6 py-16 text-[#e6e1f2] sm:px-8 lg:px-10">
      <div className="absolute left-6 top-6 sm:left-10 sm:top-10">
        <Link href="/" className="flex items-center gap-2 text-sm text-[#9d93b3] transition hover:text-[#e6e1f2]">
          <span>←</span> Back to home
        </Link>
      </div>
      <div className="mx-auto max-w-xl rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] p-8">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-[#c5b3e6]">Log in</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[#e6e1f2]">Access your workspace.</h1>
          <p className="mt-2 text-sm text-[#9d93b3]">
            Sign in with your email and password to continue where you left off.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-[#e6e1f2]" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="w-full rounded-lg border border-[rgba(255,255,255,0.1)] bg-[#1e1a2b] px-4 py-3 text-sm text-[#e6e1f2] outline-none transition focus:border-[#c5b3e6] focus:ring-2 focus:ring-[#c5b3e6]/20"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#e6e1f2]" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                minLength={6}
                className="w-full rounded-lg border border-[rgba(255,255,255,0.1)] bg-[#1e1a2b] px-4 py-3 pr-12 text-sm text-[#e6e1f2] outline-none transition focus:border-[#c5b3e6] focus:ring-2 focus:ring-[#c5b3e6]/20"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-[#c5b3e6] transition hover:text-[#e6e1f2]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            </div>
          </div>

          {error ? <p className="rounded-lg bg-[#ff6b6b]/10 px-4 py-3 text-sm text-[#ff6b6b]">{error}</p> : null}

          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-[#c5b3e6] to-[#a3e2cf] px-5 py-3 text-sm font-semibold text-[#16121e] transition hover:brightness-110"
          >
            Sign in
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-[#9d93b3]">
          Don’t have an account?{' '}
          <Link href="/signup" className="font-semibold text-[#c5b3e6] transition hover:text-[#e6e1f2]">
            Create one
          </Link>
        </p>
      </div>
    </main>
  );
}
