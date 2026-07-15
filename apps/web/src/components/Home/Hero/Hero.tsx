import Link from "next/link";

const highlights = [
  "Public first impression",
  "Focused onboarding",
  "Thoughtful team workflows",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.35),_transparent_40%),linear-gradient(120deg,_#0f0718_0%,_#1d1030_45%,_#2b1540_100%)] text-white">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center rounded-full border border-purple-400/30 bg-white/10 px-3 py-1 text-sm text-purple-100 backdrop-blur">
            A calm space for ambitious ideas
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Bring bold work together without the friction.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
            MergeLab helps teams shape, review, and launch polished work from a single elegant workspace.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/login"
              className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              Get Started
            </Link>
            <Link
              href="/login"
              className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Learn More
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-sm text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-purple-950/30 backdrop-blur-xl">
          <div className="rounded-[24px] border border-white/10 bg-gradient-to-br from-[#26123c] to-[#120b1d] p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-200">Today’s focus</p>
                <p className="mt-1 text-xl font-semibold text-white">Launch the new product story</p>
              </div>
              <div className="rounded-full border border-purple-400/30 bg-purple-500/20 px-3 py-1 text-sm text-purple-100">
                Live
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {[
                { title: "Research notes", detail: "8 updates synced" },
                { title: "Design review", detail: "2 approvals pending" },
                { title: "Launch checklist", detail: "Ready to share" },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-white">{item.title}</p>
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <p className="mt-1 text-sm text-slate-400">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
