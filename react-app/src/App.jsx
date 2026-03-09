import { useCallback, useEffect, useState } from 'react'
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
import Admin from './components/Admin'

export default function App() {
  useScrollReveal()
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const [paymentFail, setPaymentFail] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('payment') === 'success') {
      setPaymentSuccess(true)
      window.history.replaceState({}, '', window.location.pathname)
    } else if (params.get('payment') === 'fail') {
      setPaymentFail(true)
      window.history.replaceState({}, '', window.location.pathname)
    }
  }, [])

  const toQuiz = useCallback(() => {
    document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  if (window.location.pathname === '/admin') {
    return <Admin />
  }

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
      <Quiz paymentSuccess={paymentSuccess} paymentFail={paymentFail} onClosePaymentSuccess={() => setPaymentSuccess(false)} onClosePaymentFail={() => setPaymentFail(false)} />
      <FinalCTA onQuiz={toQuiz} />
      <Footer />
    </>
  )
}
