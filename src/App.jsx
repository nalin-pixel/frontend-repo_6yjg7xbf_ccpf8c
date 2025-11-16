import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <footer className="py-12 border-t border-black/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <a href="/test" className="text-sm text-blue-600 hover:underline">System status</a>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
