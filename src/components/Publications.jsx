import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { apiGet } from '../utils/api'

export default function Publications() {
  const [items, setItems] = useState([])

  useEffect(() => {
    apiGet('/publications').then(setItems).catch(()=>{})
  }, [])

  return (
    <section id="publications" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Publications & Talks</motion.h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-3xl">Selected papers, conference talks, and workshops.</p>

        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          {items.map((it, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-5">
              <span className="text-xs uppercase tracking-wide text-slate-500">{it.kind} • {it.year}</span>
              <h3 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">{it.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{it.venue}</p>
              {it.slides_url && (
                <div className="mt-3">
                  <iframe title={`slides-${idx}`} loading="lazy" className="w-full h-48 rounded" src={it.slides_url}></iframe>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
