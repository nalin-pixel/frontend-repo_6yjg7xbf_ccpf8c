import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="backdrop-blur supports-[backdrop-filter]:bg-white/30 bg-white/40 rounded-2xl p-6 sm:p-8 shadow-xl border border-white/50">
            <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold">Portfolio</p>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Hi, I’m <span className="text-blue-600">Your Name</span>
            </h1>
            <p className="mt-4 text-gray-700 text-lg">
              I design and build modern web experiences — blending thoughtful UX with playful, interactive 3D.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition">View Projects</a>
              <a href="#contact" className="px-5 py-3 rounded-xl bg-white/80 text-gray-900 font-semibold shadow hover:bg-white transition">Contact Me</a>
            </div>
          </div>

          <div className="hidden lg:block"></div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white"></div>
    </section>
  )
}
