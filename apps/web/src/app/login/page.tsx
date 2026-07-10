"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getCurrentUser, loginUser } from "@/lib/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-xl rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-purple-950/20 backdrop-blur-xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-purple-300">Log in</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight">Access your workspace.</h1>
          <p className="mt-2 text-sm text-slate-400">
            Sign in with your email and password to continue where you left off.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              minLength={6}
              className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
            />
          </div>

          {error ? <p className="rounded-3xl bg-rose-500/10 px-4 py-3 text-sm text-rose-200">{error}</p> : null}

          <button
            type="submit"
            className="w-full rounded-3xl bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:brightness-110"
          >
            Sign in
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          Don’t have an account?{' '}
          <Link href="/signup" className="font-semibold text-purple-200 transition hover:text-white">
            Create one
          </Link>
        </p>
      </div>
    </main>
  );
}
