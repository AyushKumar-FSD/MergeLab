import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0f0718]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8b5cf6] to-[#c084fc] text-lg font-semibold text-white shadow-lg shadow-purple-500/20">
            M
          </div>
          <div>
            <p className="text-base font-semibold tracking-tight text-white">MergeLab</p>
            <p className="text-xs text-slate-400">Design, collaborate, launch</p>
          </div>
        </Link>

        <nav className="flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-purple-400/60 hover:text-white"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition hover:brightness-110"
          >
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
}
