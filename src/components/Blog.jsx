import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { apiGet } from '../utils/api'

export default function Blog() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    apiGet('/blog').then(setPosts).catch(()=>{})
  }, [])

  return (
    <section id="blog" className="py-20 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Blog & Notes</motion.h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-3xl">Essays on AI, data ethics, visualization design, and learning reflections.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <motion.article key={p.slug} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
              <span className="text-xs uppercase tracking-wide text-slate-500">{new Date(p.published_at).toLocaleDateString()}</span>
              <h3 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">{p.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">{p.excerpt}</p>
              <details className="mt-3 text-sm text-slate-700 dark:text-slate-300">
                <summary className="cursor-pointer">Read</summary>
                <div className="mt-2 whitespace-pre-wrap">{p.body}</div>
              </details>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
