const values = [
  {
    title: "Clear by default",
    copy: "Every screen is built to feel calm, intentional, and easy to navigate.",
  },
  {
    title: "Built for momentum",
    copy: "Move from first idea to polished delivery without context switching.",
  },
  {
    title: "Made for modern teams",
    copy: "Whether you are shipping a launch or aligning a concept, MergeLab keeps people connected.",
  },
];

export function About() {
  return (
    <section className="bg-[#f7f4ff] py-20 text-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-600">Why teams choose MergeLab</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            A polished home for collaboration that feels genuinely human.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            The experience is designed to put clarity first, so your team can focus on the work that matters.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {values.map((item) => (
            <article key={item.title} className="rounded-[24px] border border-slate-200 bg-white p-7 shadow-sm shadow-slate-200/70">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-lg font-semibold text-purple-700">
                {item.title.charAt(0)}
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
