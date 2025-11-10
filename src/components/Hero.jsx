import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90 dark:from-slate-950/80 dark:via-slate-950/40 dark:to-slate-950/90 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white"
        >
          Muhamad Juwandi
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-4 max-w-2xl text-lg sm:text-xl text-slate-600 dark:text-slate-300"
        >
          Data Scientist focused on practical machine learning, analytics, and storytelling with data.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a href="#projects" className="px-5 py-2.5 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold shadow hover:shadow-md transition">Explore Projects</a>
          <a href="#contact" className="px-5 py-2.5 rounded-lg bg-white text-slate-900 dark:bg-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition">Get in Touch</a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="mt-10 grid sm:grid-cols-3 gap-4"
        >
          {[
            { label: 'Years Experience', value: '6+' },
            { label: 'Projects Delivered', value: '30+' },
            { label: 'Talks & Workshops', value: '10+' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur p-5">
              <p className="text-3xl font-extrabold text-slate-900 dark:text-white">{stat.value}</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mt-14">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur p-6">
            <p className="text-sm uppercase tracking-wide text-slate-500">Featured Project</p>
            <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">Interactive Mobility Dashboard</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-3xl">Exploring city mobility patterns through interactive visualizations and insights that drive policy and business decisions.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
