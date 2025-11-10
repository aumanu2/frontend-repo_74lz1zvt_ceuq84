import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { apiGet } from '../utils/api'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [filters, setFilters] = useState({ domain: '', q: '' })

  useEffect(() => {
    fetchProjects()
  }, [])

  async function fetchProjects(params = {}) {
    try {
      setLoading(true)
      const q = new URLSearchParams()
      if (params.domain) q.set('domain', params.domain)
      if (params.q) q.set('q', params.q)
      const data = await apiGet(`/projects${q.toString() ? `?${q.toString()}` : ''}`)
      setProjects(data)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  function applyFilters() {
    fetchProjects(filters)
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Projects & Case Studies</motion.h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-3xl">Each case study outlines the problem, approach, dataset, models, results, and real-world impact. Interactive charts load on demand.</p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <select value={filters.domain} onChange={(e)=>setFilters({ ...filters, domain: e.target.value })} className="px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
            <option value="">All Domains</option>
            {["ML","Analytics","Visualization","NLP","CV","Time Series","MLOps","Other"].map(d => <option key={d} value={d}>{d}</option>)}
          </select>
          <input value={filters.q} onChange={(e)=>setFilters({ ...filters, q: e.target.value })} placeholder="Search by keyword" className="flex-1 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white" />
          <button onClick={applyFilters} className="px-4 py-2 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold">Filter</button>
        </div>

        {loading && <p className="mt-8 text-slate-600 dark:text-slate-300">Loading projects...</p>}
        {error && <p className="mt-8 text-red-500">{error}</p>}

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.article key={p.slug} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-wide text-slate-500">{p.domain} • {p.year}</span>
                <div className="flex gap-2">
                  {p.github_url && <a href={p.github_url} className="text-xs text-slate-600 dark:text-slate-300 underline" target="_blank">GitHub</a>}
                  {p.demo_url && <a href={p.demo_url} className="text-xs text-slate-600 dark:text-slate-300 underline" target="_blank">Demo</a>}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{p.title}</h3>
              <p className="mt-1 text-slate-600 dark:text-slate-300">{p.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack?.slice(0,4).map(s => <span key={s} className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">{s}</span>)}
              </div>
              {p.plotly_fig && (
                <details className="mt-4">
                  <summary className="cursor-pointer text-sm text-slate-600 dark:text-slate-300">Interactive Chart</summary>
                  <div className="mt-2 h-56">
                    <iframe title={`${p.slug}-plot`} loading="lazy" className="w-full h-full rounded" srcDoc={`<!doctype html><html><head><meta charset='utf-8' /><script src='https://cdn.plot.ly/plotly-latest.min.js'></script></head><body style='margin:0'><div id='c' style='width:100%;height:100%'></div><script>Plotly.newPlot('c', ${JSON.stringify(p.plotly_fig.data)}, ${JSON.stringify(p.plotly_fig.layout)});</script></body></html>`}></iframe>
                  </div>
                </details>
              )}
              <details className="mt-4">
                <summary className="cursor-pointer text-sm text-slate-600 dark:text-slate-300">Read more</summary>
                <div className="mt-2 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <p><span className="font-semibold">Problem:</span> {p.problem}</p>
                  <p><span className="font-semibold">Approach:</span> {p.approach}</p>
                  <p><span className="font-semibold">Dataset:</span> {p.dataset}</p>
                  <p><span className="font-semibold">Model:</span> {p.model}</p>
                  <p><span className="font-semibold">Results:</span> {p.results}</p>
                  <p><span className="font-semibold">Impact:</span> {p.impact}</p>
                </div>
              </details>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
