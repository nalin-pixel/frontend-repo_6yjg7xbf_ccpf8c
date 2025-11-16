import { Mail, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed to send')
      setStatus('Thanks! I will get back to you soon.')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-bold flex items-center gap-2"><Mail className="w-7 h-7 text-blue-600"/>Get in touch</h2>
          <p className="mt-3 text-gray-600">Have a question or want to work together? Send a message.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 bg-slate-50 rounded-2xl p-6 border border-black/5">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-700">Name</label>
              <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full px-4 py-3 rounded-xl border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="text-sm text-gray-700">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full px-4 py-3 rounded-xl border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-sm text-gray-700">Message</label>
            <textarea name="message" rows="5" value={form.message} onChange={handleChange} required className="mt-1 w-full px-4 py-3 rounded-xl border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mt-6 flex items-center gap-3">
            <button type="submit" className="px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition inline-flex items-center gap-2">
              <Send className="w-4 h-4" /> Send
            </button>
            <p className="text-sm text-gray-600">{status}</p>
          </div>
        </form>
      </div>
    </section>
  )
}
