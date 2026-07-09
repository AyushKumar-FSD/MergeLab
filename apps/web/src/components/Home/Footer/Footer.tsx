export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0f0718] py-10 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-sm sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>© 2026 MergeLab. Built for thoughtful teams.</p>
        <div className="flex items-center gap-5">
          <a href="/" className="transition hover:text-white">
            Home
          </a>
          <a href="/workspace" className="transition hover:text-white">
            Workspace
          </a>
        </div>
      </div>
    </footer>
  );
}
