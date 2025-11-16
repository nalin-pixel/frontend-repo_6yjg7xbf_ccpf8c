export default function Projects() {
  const projects = [
    {
      title: 'Interactive 3D Landing',
      desc: 'Playful, performant hero built with Spline and React.',
      tags: ['React', 'Spline', 'Tailwind'],
      link: '#'
    },
    {
      title: 'SaaS Dashboard',
      desc: 'Data-rich admin with charts, filters and dark mode.',
      tags: ['React', 'Tailwind', 'API'],
      link: '#'
    },
    {
      title: 'E-commerce Micro-frontend',
      desc: 'Composable product pages with blazing load times.',
      tags: ['React', 'Vite', 'Performance'],
      link: '#'
    }
  ]

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">Selected Projects</h2>
          <p className="mt-3 text-gray-600">A few things I’ve crafted recently.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <a key={i} href={p.link} className="group bg-white rounded-2xl border border-black/5 p-6 shadow-sm hover:shadow-lg transition">
              <div className="h-36 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 border border-black/5" />
              <h3 className="mt-4 text-lg font-semibold group-hover:text-blue-600 transition-colors">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
