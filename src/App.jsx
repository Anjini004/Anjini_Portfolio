// src/App.jsx
// Root component. Add or remove sections here as needed.

import { ThemeProvider } from './context/ThemeContext'

import Navbar          from './components/layout/Navbar'
import Footer          from './components/layout/Footer'

import Hero            from './components/sections/Hero'
import About           from './components/sections/About'
import Skills          from './components/sections/Skills'
import Projects        from './components/sections/Projects'
import Experience      from './components/sections/Experience'
import Certifications  from './components/sections/Certifications'
import Contact         from './components/sections/Contact'

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen font-body">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
