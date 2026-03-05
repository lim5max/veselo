import { useCallback } from 'react'
import useScrollReveal from './hooks/useScrollReveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ChildProfile from './components/ChildProfile'
import Problems from './components/Problems'
import WhyUs from './components/WhyUs'
import Categories from './components/Categories'
import Steps from './components/Steps'
import Stats from './components/Stats'
import Pricing from './components/Pricing'

import FAQ from './components/FAQ'
import Quiz from './components/Quiz'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  useScrollReveal()

  const toQuiz = useCallback(() => {
    document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <>
      <div className="grain" />
      <Navbar onQuiz={toQuiz} />
      <Hero onQuiz={toQuiz} />
      <ChildProfile onQuiz={toQuiz} />
      <Problems />
      <WhyUs />
      <Categories />
      <Steps />
      <Stats />
      <Pricing onQuiz={toQuiz} />

      <FAQ />
      <Quiz />
      <FinalCTA onQuiz={toQuiz} />
      <Footer />
    </>
  )
}
