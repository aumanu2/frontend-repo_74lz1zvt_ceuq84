import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition ${scrolled ? 'backdrop-blur bg-white/70 dark:bg-slate-950/60 border-b border-slate-200/70 dark:border-slate-800' : 'bg-transparent'}`}
    >
      <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
        <a href="#" className="font-extrabold tracking-tight text-slate-900 dark:text-white">MJ</a>
        <div className="flex items-center gap-6 text-sm font-semibold text-slate-700 dark:text-slate-300">
          <a href="#projects" className="hover:text-slate-900 dark:hover:text-white">Projects</a>
          <a href="#publications" className="hover:text-slate-900 dark:hover:text-white">Publications</a>
          <a href="#blog" className="hover:text-slate-900 dark:hover:text-white">Blog</a>
          <a href="#about" className="hover:text-slate-900 dark:hover:text-white">About</a>
          <a href="#contact" className="hover:text-slate-900 dark:hover:text-white">Contact</a>
        </div>
      </div>
    </motion.nav>
  )
}
