import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  { q: 'Как вы подбираете занятия? Это алгоритм?', a: 'Нет. Каждую подборку собирает живой специалист. Мы\u00a0анализируем ваши ответы, учитываем возраст, интересы, расположение и\u00a0бюджет\u00a0— и\u00a0вручную отбираем 3-5 занятий.' },
  { q: 'А если подборка не подойдёт?', a: 'Напишите нам\u00a0— бесплатно дополним подборку. Нам важно, чтобы вы\u00a0нашли занятие, а\u00a0не\u00a0просто заплатили.' },
  { q: 'Почему это стоит денег?', a: 'Бесплатные каталоги выдают сотни вариантов без фильтрации. Мы\u00a0берём на\u00a0себя всю работу: изучаем, сравниваем, проверяем. Вы\u00a0платите за\u00a0своё свободное время и\u00a0уверенность в\u00a0выборе.' },
  { q: 'Через сколько получу подборку?', a: 'В\u00a0среднем через 1-2 часа. Подборка придёт в\u00a0WhatsApp или Telegram\u00a0— в\u00a0тот мессенджер, который укажете.' },
  { q: 'Какие города?', a: 'Москва и\u00a0Московская область. Из\u00a0другого города? Оставьте заявку\u00a0— напишем, когда откроемся у\u00a0вас.' },
]

const dotColors = ['bg-coral', 'bg-gold', 'bg-lavender', 'bg-green', 'bg-sky']

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="py-20 md:py-[6.5rem] relative" id="faq">
      <div className="absolute inset-0 bg-gradient-to-b from-cream-dk/30 to-cream pointer-events-none" />
      <div className="max-w-[1240px] mx-auto px-5 md:px-10 relative">
        <p className="sr font-hand text-2xl text-coral text-center">FAQ</p>
        <h2 className="sr sr-d1 font-display font-black text-[1.875rem] md:text-[2.5rem] text-indigo leading-[1.2] text-center mx-auto mb-10">
          Частые <span className="text-pill text-pill-sky">вопросы</span>
        </h2>
        <div className="sr max-w-[720px] mx-auto">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={i} className={`sr-item rounded-2xl mb-3 bg-white overflow-hidden transition-all duration-300 border-2 ${isOpen ? 'border-coral shadow-[0_8px_24px_rgba(255,107,53,.08)]' : 'border-n200/50 hover:border-n300'}`}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex items-center justify-between w-full py-4 px-5 gap-4 text-left hover:text-coral transition-colors"
                >
                  <span className="flex items-center gap-3 min-w-0">
                    <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${dotColors[i]}`} />
                    <span className="font-semibold text-[0.9375rem] text-indigo">{f.q}</span>
                  </span>
                  <ChevronDown size={18} className={`shrink-0 transition-transform duration-350 ${isOpen ? 'rotate-180 text-coral' : 'text-n400'}`} />
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-450 ease-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 pl-[2.75rem] text-sm text-n700 leading-[1.7]">{f.a}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
