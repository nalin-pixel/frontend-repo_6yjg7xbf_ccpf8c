export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            I’m a front-end developer who loves building delightful user interfaces.
            My work blends clean design systems, motion, and a touch of playfulness.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
            <li className="bg-slate-50 p-3 rounded-xl border border-black/5">JavaScript / TypeScript</li>
            <li className="bg-slate-50 p-3 rounded-xl border border-black/5">React / Vite</li>
            <li className="bg-slate-50 p-3 rounded-xl border border-black/5">Tailwind / Design Systems</li>
            <li className="bg-slate-50 p-3 rounded-xl border border-black/5">3D / Spline Basics</li>
          </ul>
        </div>
        <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-black/5" />
      </div>
    </section>
  )
}
