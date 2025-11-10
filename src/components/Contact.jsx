import { useState } from 'react'
import { motion } from 'framer-motion'
import { apiPost } from '../utils/api'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setStatus('Sending...')
      await apiPost('/contact', form)
      setStatus('Thanks! I will get back to you soon.')
      setForm({ name: '', email: '', message: '' })
    } catch (e) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Contact</motion.h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Find me on LinkedIn, GitHub, Kaggle, and Google Scholar or send a message below.</p>

        <div className="mt-6 grid md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
            <div className="grid gap-4">
              <input value={form.name} onChange={(e)=>setForm({ ...form, name: e.target.value })} placeholder="Name" className="px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white" required />
              <input type="email" value={form.email} onChange={(e)=>setForm({ ...form, email: e.target.value })} placeholder="Email" className="px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white" required />
              <textarea rows="5" value={form.message} onChange={(e)=>setForm({ ...form, message: e.target.value })} placeholder="Message" className="px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white" required />
              <button type="submit" className="px-4 py-2 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold">Send</button>
              {status && <p className="text-sm text-slate-600 dark:text-slate-300">{status}</p>}
            </div>
          </form>
          <div>
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
              <h3 className="font-semibold text-slate-900 dark:text-white">Connect</h3>
              <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                <li><a className="underline" href="https://www.linkedin.com/" target="_blank">LinkedIn</a></li>
                <li><a className="underline" href="https://github.com/" target="_blank">GitHub</a></li>
                <li><a className="underline" href="https://www.kaggle.com/" target="_blank">Kaggle</a></li>
                <li><a className="underline" href="https://scholar.google.com/" target="_blank">Google Scholar</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
