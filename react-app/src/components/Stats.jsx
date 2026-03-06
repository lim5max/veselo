import { useEffect, useRef, useState } from 'react'

const stats = [
  { count: 870, suffix: '', decimal: false, label: 'подборок отправлено', hand: 'и считаем', color: '#FF6B35' },
  { count: 150, suffix: '', decimal: false, label: 'проверенных занятий', hand: 'в базе', color: '#FFD23F' },
  { count: 47, suffix: ' мин', decimal: false, label: 'среднее время ответа', hand: 'не часы, а минуты', color: '#22C55E' },
  { count: 49, suffix: '', decimal: true, label: 'оценка от родителей', hand: 'из 5.0', color: '#B197FC' },
]

function AnimatedNum({ count, suffix, decimal }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const el = ref.current
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true
        const dur = 1500
        const start = performance.now()
        function tick(now) {
          const t = Math.min((now - start) / dur, 1)
          const eased = 1 - Math.pow(1 - t, 3)
          setVal(decimal ? (eased * count / 10).toFixed(1) : Math.floor(eased * count))
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [count, decimal])

  const display = decimal ? val : (val > 100 ? val + '+' : val)
  return <span ref={ref}>{display}{suffix}</span>
}

/* Decorative doodle elements */
const DoodleStar = ({ className = '' }) => (
  <svg viewBox="0 0 20 20" fill="none" className={className}>
    <path d="M10 0 C10 7, 10 7, 10 10 C10 7, 10 7, 20 10 C10 10, 10 10, 10 20 C10 10, 10 10, 0 10Z" fill="white" opacity="0.15" />
  </svg>
)

export default function Stats() {
  return (
    <section className="py-16 bg-indigo text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,var(--color-indigo-lt)_0%,transparent_60%)] opacity-30" />
      {/* Doodle decorations */}
      <DoodleStar className="absolute top-6 left-[10%] w-6 h-6 animate-[wiggle_3s_ease-in-out_infinite]" />
      <DoodleStar className="absolute bottom-8 right-[15%] w-5 h-5 animate-[wiggle_4s_ease-in-out_infinite]" />
      <DoodleStar className="absolute top-12 right-[30%] w-4 h-4 animate-[float-b_5s_ease-in-out_infinite]" />

      <div className="max-w-[1240px] mx-auto px-5 md:px-10 relative z-1">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
          {stats.map((s, i) => (
            <div key={i} className={`sr ${i > 0 ? `sr-d${i}` : ''}`}>
              <div className="font-display font-black text-[3rem] md:text-[3.5rem] leading-none mb-0.5">
                <AnimatedNum count={s.count} suffix={s.suffix} decimal={s.decimal} />
              </div>
              <div className="font-hand text-xl opacity-80 mb-1" style={{ color: s.color }}>{s.hand}</div>
              <div className="text-[0.8125rem] opacity-60 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
