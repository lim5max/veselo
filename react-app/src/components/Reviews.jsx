const Star = () => (
  <svg viewBox="0 0 24 24" className="w-[15px] h-[15px] fill-current">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
  </svg>
)

const accents = [
  { border: 'border-coral', bg: 'bg-coral-lt', dot: 'bg-coral' },
  { border: 'border-gold', bg: 'bg-gold-lt', dot: 'bg-gold' },
  { border: 'border-green', bg: 'bg-green-lt', dot: 'bg-green' },
]

const reviews = [
  {
    text: <>Заполнила утром, к&nbsp;обеду получила подборку. <strong className="text-indigo font-semibold">Нашли дзюдо рядом с&nbsp;домом</strong> — тренер с&nbsp;15-летним стажем, стоимость вдвое ниже сетевых. Артём ходит третий месяц!</>,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80',
    name: 'Марина',
    detail: 'сын Артём, 7 лет',
  },
  {
    text: <>Дочке 4 года — нашли <strong className="text-indigo font-semibold">3 студии с&nbsp;группами от&nbsp;3,5 лет</strong>: танцы, рисование и&nbsp;гимнастика. За&nbsp;один вечер решили вопрос, который я&nbsp;откладывала месяц.</>,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80',
    name: 'Ольга',
    detail: 'дочь Варя, 4 года',
  },
  {
    text: <>Заполнил две анкеты, через час получил две подборки. <strong className="text-indigo font-semibold">Робототехника и&nbsp;плавание.</strong> Оба ребёнка ходят уже второй месяц. Сам бы за&nbsp;выходные столько не&nbsp;нашёл.</>,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80',
    name: 'Дмитрий',
    detail: 'Лёва 10, Аня 6 лет',
  },
]

export default function Reviews() {
  return (
    <section className="py-20 md:py-[6.5rem]" id="reviews">
      <div className="max-w-[1240px] mx-auto px-5 md:px-10">
        <p className="sr font-hand text-2xl text-coral text-center">Отзывы</p>
        <h2 className="sr sr-d1 font-display font-black text-[1.875rem] md:text-[2.5rem] text-indigo leading-[1.2] text-center mx-auto mb-2">
          Что говорят <span className="text-pill text-pill-pink">родители</span>
        </h2>
        <div className="mb-10" />
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => {
            const a = accents[i]
            return (
              <div key={i} className={`sr ${i > 0 ? `sr-d${i}` : ''} bg-white border-2 border-n200/40 rounded-[20px] p-6 flex flex-col transition-all duration-350 hover:shadow-[0_12px_36px_rgba(26,26,46,.08)] hover:-translate-y-1`}>
                {/* Accent dot */}
                <div className="flex items-center gap-2 mb-3">
                  <span className={`w-2.5 h-2.5 rounded-full ${a.dot}`} />
                  <div className="flex gap-0.5 text-gold">
                    {[...Array(5)].map((_, j) => <Star key={j} />)}
                  </div>
                </div>
                <p className="text-sm text-n700 leading-[1.65] flex-1 mb-5">{r.text}</p>
                <div className="flex items-center gap-2.5 pt-4 border-t border-n100">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 ring-2 ring-n100">
                    <img src={r.avatar} alt={r.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-semibold text-[0.8125rem] text-n900">{r.name}</div>
                    <div className="text-xs text-n500">{r.detail}</div>
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
