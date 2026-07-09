import Link from "next/link";

export default function Workspace() {
  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,_#090611_0%,_#130d1f_45%,_#221236_100%)] px-6 py-16 text-white sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 rounded-[32px] border border-white/10 bg-white/8 p-8 shadow-2xl shadow-purple-950/20 backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">Workspace</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Your next great collaboration starts here.</h1>
          </div>
          <Link
            href="/"
            className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20"
          >
            Back home
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[24px] border border-white/10 bg-slate-950/70 p-6">
            <p className="text-lg leading-8 text-slate-300">
              This is the workspace entry point for the public flow. It is intentionally calm and minimal so the experience feels premium while remaining lightweight.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "Shared insights",
                "Focused review",
                "Fast decisions",
              ].map((item) => (
                <span key={item} className="rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1.5 text-sm text-purple-100">
                  {item}
                </span>
              ))}
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
