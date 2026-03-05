import { useEffect } from 'react'

export default function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('vis')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    // Observe all .sr elements, re-run on DOM changes
    const observe = () => document.querySelectorAll('.sr:not(.vis)').forEach(el => io.observe(el))
    observe()

    const mo = new MutationObserver(observe)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => { io.disconnect(); mo.disconnect() }
  }, [])
}
