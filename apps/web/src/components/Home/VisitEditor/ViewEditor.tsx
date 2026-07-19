import Link from "next/link";

const ViewEditor = () => {
  return (
    <section className="bg-slate-900/80 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-900 shadow-2xl shadow-purple-950/20">
          <div className="grid gap-10 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-sm text-purple-100">
                Try your code here
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Start building in a calm, focused coding space.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                Jump into the editor, draft your ideas, and move from concept to execution without leaving the workspace.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/online-compiler"
                  className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                >
                  Open Code Editor
                </Link>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
                  Fast, simple, and ready to use
                </span>
              </div>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-slate-950/70 p-5 backdrop-blur">
              <div className="rounded-[20px] border border-white/10 bg-gradient-to-br from-[#1f1235] to-[#0b0f1c] p-5">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-slate-900/80 p-4 font-mono text-sm">
                  <p className="text-slate-500">// Start coding</p>
                  <p className="mt-2 text-cyan-300">const project = createWorkspace();</p>
                  <p className="mt-1 text-slate-200">project.launch();</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewEditor;
