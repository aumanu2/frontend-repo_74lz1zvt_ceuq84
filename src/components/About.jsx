import { motion } from 'framer-motion'

export default function About() {
  const skills = [
    'Python', 'R', 'SQL', 'TensorFlow', 'PyTorch', 'MLOps', 'Statistics', 'Visualization', 'Docker', 'Airflow'
  ]
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">About & CV</motion.h2>
        <div className="mt-6 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">Muhamad Juwandi is a Data Scientist known for innovative storytelling with data. He builds end-to-end solutions from problem framing to production, translating complex insights into clear, actionable narratives for technical and non-technical audiences.</p>
            <a href="/cv.pdf" className="inline-block mt-4 px-4 py-2 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold">Download CV</a>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map(s => <span key={s} className="px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm">{s}</span>)}
            </div>
            <div className="mt-6">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Career Story</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">From analytics to ML engineering, Juwandi has delivered measurable impact across industries, focusing on clarity, reliability, and outcomes. He champions collaborative practices and robust MLOps to turn prototypes into dependable products.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
