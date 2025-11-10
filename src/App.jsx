import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Publications from './components/Publications'
import Blog from './components/Blog'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Publications />
      <Blog />
      <About />
      <Contact />
      <footer className="py-8 text-center text-sm text-slate-500">© {new Date().getFullYear()} Muhamad Juwandi</footer>
    </div>
  )
}

export default App
