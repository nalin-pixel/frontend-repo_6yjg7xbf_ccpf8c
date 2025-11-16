import { useState } from 'react'
import { Menu, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="font-bold text-xl tracking-tight">Flames<span className="text-blue-600">.Portfolio</span></a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-gray-700 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-gray-100">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-gray-100">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#contact" className="p-2 rounded-lg hover:bg-gray-100">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-gray-100">
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-gray-100">
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-2 flex items-center gap-3">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-gray-100">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-gray-100">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#contact" onClick={() => setOpen(false)} className="p-2 rounded-lg hover:bg-gray-100">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
