/* ---- Goofy blob decorative overlays ---- */
const Blob1 = () => (
  <svg viewBox="0 0 60 72" fill="none" className="w-full h-full">
    <circle cx="30" cy="28" r="24" fill="#38BDF8" />
    <circle cx="22" cy="30" r="2.2" fill="#2D1B69" />
    <circle cx="38" cy="32" r="2.2" fill="#2D1B69" />
    <path d="M20 38 C26 44, 34 44, 40 38" stroke="#2D1B69" strokeWidth="2.2" strokeLinecap="round" fill="none" />
    <ellipse cx="24" cy="55" rx="5" ry="7" fill="#38BDF8" />
    <ellipse cx="36" cy="55" rx="5" ry="7" fill="#38BDF8" />
  </svg>
)

const Blob2 = () => (
  <svg viewBox="0 0 60 72" fill="none" className="w-full h-full">
    <path d="M10 22 C6 10, 22 2, 30 4 C38 2, 54 10, 50 22 C56 30, 52 48, 44 52 C38 56, 22 56, 16 52 C8 48, 4 30, 10 22Z" fill="#B197FC" />
    <circle cx="24" cy="26" r="2.2" fill="#2D1B69" />
    <circle cx="38" cy="28" r="2.2" fill="#2D1B69" />
    <path d="M24 34 C28 38, 34 38, 40 34" stroke="#2D1B69" strokeWidth="2.2" strokeLinecap="round" fill="none" />
    <ellipse cx="24" cy="58" rx="5" ry="7" fill="#B197FC" />
    <ellipse cx="36" cy="58" rx="5" ry="7" fill="#B197FC" />
  </svg>
)

const Blob3 = () => (
  <svg viewBox="0 0 60 72" fill="none" className="w-full h-full">
    <path d="M30 4 L38 20 L54 20 L42 30 L46 46 L30 38 L14 46 L18 30 L6 20 L22 20Z" fill="#FFD23F" />
    <path d="M24 28 C25 25, 29 25, 30 28" stroke="#2D1B69" strokeWidth="2.2" strokeLinecap="round" fill="none" />
    <path d="M34 26 C35 23, 39 23, 40 26" stroke="#2D1B69" strokeWidth="2.2" strokeLinecap="round" fill="none" />
    <path d="M24 36 C28 40, 36 40, 40 36" stroke="#2D1B69" strokeWidth="2" strokeLinecap="round" fill="none" />
    <ellipse cx="24" cy="56" rx="5" ry="7" fill="#FFD23F" />
    <ellipse cx="36" cy="56" rx="5" ry="7" fill="#FFD23F" />
  </svg>
)

const Blob4 = () => (
  <svg viewBox="0 0 60 72" fill="none" className="w-full h-full">
    <path d="M12 22 C8 10, 24 2, 30 4 C36 2, 52 10, 48 22 C54 32, 50 48, 42 52 C36 56, 24 56, 18 52 C10 48, 6 32, 12 22Z" fill="#FF8FAB" />
    <circle cx="26" cy="30" r="2.2" fill="#2D1B69" />
    <circle cx="36" cy="28" r="2.2" fill="#2D1B69" />
    <ellipse cx="31" cy="40" rx="4.5" ry="3.5" fill="#2D1B69" opacity="0.55" />
    <ellipse cx="24" cy="60" rx="5" ry="6" fill="#FF8FAB" />
    <ellipse cx="38" cy="57" rx="5" ry="6" fill="#FF8FAB" transform="rotate(-15 38 57)" />
  </svg>
)

const Blob5 = () => (
  <svg viewBox="0 0 60 72" fill="none" className="w-full h-full">
    <rect x="8" y="8" width="44" height="40" rx="14" fill="#22C55E" />
    <circle cx="24" cy="24" r="2.2" fill="#2D1B69" />
    <circle cx="36" cy="26" r="2.2" fill="#2D1B69" />
    <path d="M24 34 C28 38, 34 38, 38 34" stroke="#2D1B69" strokeWidth="2.2" strokeLinecap="round" fill="none" />
    <ellipse cx="24" cy="54" rx="5" ry="7" fill="#22C55E" />
    <ellipse cx="36" cy="54" rx="5" ry="7" fill="#22C55E" />
  </svg>
)

const Blob6 = () => (
  <svg viewBox="0 0 60 72" fill="none" className="w-full h-full">
    <circle cx="30" cy="30" r="24" fill="#FF6B35" />
    <circle cx="22" cy="32" r="2.2" fill="#2D1B69" />
    <circle cx="38" cy="30" r="2.2" fill="#2D1B69" />
    <path d="M20 40 C26 46, 36 46, 42 40" stroke="#2D1B69" strokeWidth="2.2" strokeLinecap="round" fill="none" />
    <ellipse cx="24" cy="58" rx="5" ry="7" fill="#FF6B35" />
    <ellipse cx="36" cy="58" rx="5" ry="7" fill="#FF6B35" />
  </svg>
)

/* ---- Bento photo cell ---- */
function BentoCell({ photo, label, sub, tag, color, Blob, className = '', delay = '', imgPosition = 'center center' }) {
  return (
    <div className={`sr ${delay} group relative rounded-[24px] overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(26,26,46,.12)] ${className}`}>
      <img
        src={photo}
        alt={label}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        style={{ objectPosition: imgPosition }}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-black/5" />

      <div className="relative h-full flex flex-col justify-end p-5 md:p-6">
        {tag && (
          <span
            className="self-start text-[0.6875rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-2 backdrop-blur-sm"
            style={{ background: `${color}cc`, color: 'white' }}
          >
            {tag}
          </span>
        )}
        <h3 className="font-display font-black text-white text-[1.15rem] md:text-[1.35rem] leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,.3)]">
          {label}
        </h3>
        {sub && (
          <p className="text-white/70 text-[0.75rem] mt-1 leading-snug">{sub}</p>
        )}
      </div>

      {/* Blob peeking on hover */}
      <div className="absolute top-3 right-3 w-[44px] h-[54px] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 drop-shadow-[0_4px_12px_rgba(0,0,0,.25)]">
        <div className="animate-[wiggle_3s_ease-in-out_infinite]">
          <Blob />
        </div>
      </div>
    </div>
  )
}

/* ---- Accent cell (color bg + blob, no photo) ---- */
function AccentCell({ label, sub, items, color, lightBg, Blob, className = '', delay = '' }) {
  return (
    <div
      className={`sr ${delay} group relative rounded-[24px] overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(26,26,46,.10)] ${className}`}
      style={{ background: lightBg }}
    >
      <div
        className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full opacity-15 group-hover:opacity-30 transition-opacity duration-500"
        style={{ background: color }}
      />

      <div className="relative h-full flex flex-col justify-between p-5 md:p-6">
        <div>
          <h3 className="font-display font-black text-[1.1rem] md:text-[1.25rem] leading-tight mb-1" style={{ color: color === '#FFD23F' ? '#B8860B' : color === '#6EE7B7' ? '#059669' : color }}>
            {label}
          </h3>
          {sub && <p className="text-n700 text-[0.8rem] leading-[1.5]">{sub}</p>}
          {items && (
            <div className="flex flex-wrap gap-1.5 mt-2">
              {items.map((t, i) => (
                <span key={i} className="text-[0.65rem] font-medium px-2 py-0.5 rounded-full bg-white/60 text-n700">{t}</span>
              ))}
            </div>
          )}
        </div>
        <div className="w-[50px] h-[60px] self-end transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-6deg]">
          <Blob />
        </div>
      </div>
    </div>
  )
}

/* ---- Main Section ---- */
export default function Categories() {
  return (
    <section className="py-20 md:py-[6.5rem]" id="categories">
      <div className="max-w-[1240px] mx-auto px-5 md:px-10">
        <p className="sr font-hand text-2xl text-coral">Направления</p>
        <h2 className="sr sr-d1 font-display font-black text-[1.875rem] md:text-[2.5rem] text-indigo leading-[1.2] mb-2">
          Кружки, секции и&nbsp;<span className="text-pill text-pill-gold">мастер-классы</span>
        </h2>
        <p className="sr sr-d2 text-n700 text-[0.9375rem] max-w-[560px] leading-[1.65] mb-10">
          Подберём из&nbsp;любого формата&nbsp;— офлайн-студии, онлайн-курсы, разовые мастер-классы и&nbsp;даже экскурсии
        </p>

        {/* Bento Grid — explicit placement to avoid gaps */}
        <div className="grid grid-cols-2 gap-3 md:gap-4 md:grid-cols-4 md:grid-rows-[165px_165px_165px_165px]">

          {/* Кружки и секции — col 1-2, row 1-2 */}
          <BentoCell
            photo="https://images.unsplash.com/photo-1544717305-2782549b5136?w=700&h=500&fit=crop&auto=format"
            label="Кружки и секции"
            sub="Спорт, творчество, музыка, танцы, шахматы"
            tag="Регулярные"
            color="#38BDF8"
            Blob={Blob1}
            imgPosition="center 22%"
            className="md:[grid-area:1/1/3/3] min-h-[280px] md:min-h-0 col-span-2"
            delay="sr-d1"
          />

          {/* Студии — col 3, row 1-2 */}
          <BentoCell
            photo="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=600&fit=crop&auto=format"
            label="Студии"
            sub="Танцы, вокал, театр, рисование"
            color="#B197FC"
            Blob={Blob2}
            className="md:[grid-area:1/3/3/4] min-h-[160px] md:min-h-0"
            delay="sr-d2"
          />

          {/* Онлайн-занятия — col 4, row 1-2 */}
          <BentoCell
            photo="https://images.unsplash.com/photo-1610484826967-09c5720778c7?w=400&h=600&fit=crop&auto=format"
            label="Онлайн-занятия"
            sub="Программирование, языки, репетиторы"
            tag="Удалённо"
            color="#22C55E"
            Blob={Blob5}
            className="md:[grid-area:1/4/3/5] min-h-[160px] md:min-h-0"
            delay="sr-d3"
          />

          {/* Мастер-классы — col 1-2, row 3 */}
          <BentoCell
            photo="https://images.unsplash.com/photo-1560421683-6856ea585c78?w=700&h=350&fit=crop&auto=format"
            label="Мастер-классы"
            sub="Керамика, кулинария, робототехника"
            tag="Разовые"
            color="#FF6B35"
            Blob={Blob6}
            className="md:[grid-area:3/1/4/3] min-h-[160px] md:min-h-0 col-span-2"
            delay="sr-d2"
          />

          {/* Музеи и экскурсии — col 3, row 3 */}
          <BentoCell
            photo="https://images.unsplash.com/photo-1564399579883-451a5d44ec08?w=400&h=300&fit=crop&auto=format"
            label="Музеи и экскурсии"
            sub="Интерактивные программы"
            color="#FFD23F"
            Blob={Blob3}
            className="md:[grid-area:3/3/4/4] min-h-[160px] md:min-h-0"
            delay="sr-d3"
          />

          {/* Лагеря — col 4, row 3 */}
          <AccentCell
            label="Лагеря"
            sub="Каникулярные программы на неделю или сезон"
            color="#FF8FAB"
            lightBg="#FFF0F3"
            Blob={Blob4}
            className="md:[grid-area:3/4/4/5] min-h-[160px] md:min-h-0"
            delay="sr-d3"
          />

          {/* "И ещё" — col 1-4, row 4 */}
          <div className="sr sr-d3 col-span-2 md:[grid-area:4/1/5/5] rounded-[24px] overflow-hidden relative bg-gradient-to-br from-indigo to-[#4A3A8A] cursor-pointer transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(45,27,105,.2)] group flex items-center justify-center min-h-[140px] md:min-h-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,210,63,.15),transparent_60%)]" />
            <div className="relative text-center px-6 py-5">
              <p className="font-hand text-gold text-[1.6rem] leading-tight mb-1">и ещё 20+ форматов</p>
              <p className="text-white/70 text-[0.8125rem]">Репетиторы, логопеды, подготовка к школе, единоборства...</p>
            </div>
            <div className="absolute top-3 left-4 w-[30px] h-[36px] opacity-40 animate-[float-a_5s_ease-in-out_infinite]">
              <Blob1 />
            </div>
            <div className="absolute bottom-3 right-4 w-[30px] h-[36px] opacity-40 animate-[float-b_4s_ease-in-out_infinite]">
              <Blob4 />
            </div>
            <div className="absolute top-2 right-[20%] w-[26px] h-[32px] opacity-30 animate-[float-c_6s_ease-in-out_infinite]">
              <Blob3 />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
