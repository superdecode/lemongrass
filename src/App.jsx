import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import logoMark from '../Logo.png'
import logoText from '../Logo2.png'
import logoFull from '../Lemongrass.png'
import heroInterior from './assets/imagery/lemongrass-hero-interior.jpg'
import signatureDishes from './assets/imagery/lemongrass-signature-dishes.jpg'
import chefPlating from './assets/imagery/lemongrass-chef-plating.jpg'
import categorySalads from './assets/imagery/category-salads.jpg'
import categorySoups from './assets/imagery/category-soups.jpg'
import categoryEntradas from './assets/imagery/category-entradas.jpg'
import categoryCurrys from './assets/imagery/category-currys.jpg'
import categoryNoodles from './assets/imagery/category-noodles.jpg'
import categoryPostres from './assets/imagery/category-postres.jpg'
import { menuCategories } from './data/menuData.js'

const pages = [
  { id: 'inicio', label: 'Inicio', path: '/' },
  { id: 'menu', label: 'Menu', path: '/menu' },
  { id: 'acerca', label: 'Acerca', path: '/acerca' },
  { id: 'galeria', label: 'Galeria', path: '/galeria' },
]

const categoryCopy = {
  ensaladas: { title: 'Ensaladas', note: 'Papaya verde, mango, tofu y hierbas frescas con acidez limpia.' },
  sopas: { title: 'Sopas', note: 'Caldos aromaticos con coco, limoncillo y especias thai.' },
  entradas: { title: 'Entradas', note: 'Bocados para compartir, frituras ligeras y street food refinado.' },
  currys: { title: 'Currys', note: 'Leche de coco, especias profundas y picor calibrado al gusto.' },
  'arroces-noodles': { title: 'Arroces & Noodles', note: 'Wok caliente, tamarindo, hierbas frescas y arroz jazmin.' },
  postres: { title: 'Postres', note: 'Finales suaves con coco, arroz glutinoso y fruta fresca.' },
  bebidas: { title: 'Bebidas', note: 'Infusiones frescas, aguas de la casa y bebidas para acompanar.' },
  cocteleria: { title: 'Cocteleria', note: 'Cocteles de autor inspirados en la botanica tailandesa y tecnica mexicana.' },
}

const categoryImages = {
  ensaladas: categorySalads,
  sopas: categorySoups,
  entradas: categoryEntradas,
  currys: categoryCurrys,
  'arroces-noodles': categoryNoodles,
  postres: categoryPostres,
  bebidas: categorySalads,
  cocteleria: chefPlating,
}

const dishCropPositions = [
  '45% 42%', '68% 56%', '28% 48%', '52% 66%', '74% 38%',
  '34% 68%', '58% 34%', '82% 62%', '22% 40%', '48% 78%',
  '64% 50%', '36% 54%', '72% 74%',
]

const googleReviews = [
  { name: 'Maria G.', rating: 5, text: 'Absolutamente increible. El Curry Verde es el mejor que he probado en CDMX. El ambiente es elegante y el servicio impecable. Cada detalle refleja autenticidad tailandesa.', date: 'hace 2 semanas', avatar: 'M' },
  { name: 'Carlos R.', rating: 5, text: 'Una experiencia gastronomica unica. El Tom Yam Kum tiene un sabor autentico que te transporta directo a Bangkok. Sin duda regresare pronto.', date: 'hace 1 mes', avatar: 'C' },
  { name: 'Ana L.', rating: 5, text: 'El PadThai es una obra maestra. Los ingredientes son frescos y la presentacion es de alta cocina. Recomendadisimo para cenas especiales y aniversarios.', date: 'hace 3 semanas', avatar: 'A' },
  { name: 'Roberto M.', rating: 5, text: 'Perfecto para eventos corporativos. El equipo es profesional y la cocteleria de autor es excepcional. El espacio es elegante y sofisticado para cualquier reunion.', date: 'hace 2 meses', avatar: 'R' },
  { name: 'Sofia T.', rating: 5, text: 'Lemongrass es mi restaurante favorito en CDMX. Cada visita es una aventura de sabores. Los rollos crujientes y el Thai Basil Smash son adictivos.', date: 'hace 1 semana', avatar: 'S' },
  { name: 'Alejandro P.', rating: 5, text: 'La cocteleria es de otro nivel. El ambiente nocturno es perfecto: luz tenue, musica suave y platillos tailandeses autenticos y memorables.', date: 'hace 3 meses', avatar: 'A' },
]

const ingredients = [
  { name: 'Limoncillo', origin: 'Tailandia', desc: 'Hierba aromatica base de sopas y currys. Sus notas citricas definen la identidad de la cocina thai.' },
  { name: 'Galanga', origin: 'Asia Tropical', desc: 'Raiz pariente del jengibre con notas citricas y terrosas. Esencia del Tom Yam clasico.' },
  { name: 'Lima Kaffir', origin: 'Tailandia', desc: 'Hoja brillante con fragancia citrica intensa que aromatiza currys, sopas y marinadas.' },
  { name: 'Pasta de Curry', origin: 'Tailandia', desc: 'Mezcla artesanal de chiles, ajo y especias secas. La base profunda de toda la cocina thai.' },
  { name: 'Leche de Coco', origin: 'Tailandia', desc: 'Base cremosa que equilibra el picante y el dulzor. El alma liquida de los currys.' },
  { name: 'Albahaca Thai', origin: 'Tailandia', desc: 'Hierba anisada con dulzor y leve picante. Protagonista del Pad Krao Pao y los currys verdes.' },
  { name: 'Tamarindo', origin: 'Asia / Mexico', desc: 'Fruto acido y dulce, columna vertebral del autentico Pad Thai. Puente entre dos culturas.' },
  { name: 'Nam Pla', origin: 'Tailandia', desc: 'Salsa de pescado fermentada. El umami tailandes que da profundidad a cada platillo de la carta.' },
  { name: 'Arroz Jazmin', origin: 'Tailandia', desc: 'Variedad de grano largo con aroma floral suave. La base perfecta de la cocina thai moderna.' },
]

const triptychImages = [
  { src: heroInterior, alt: 'Interior del restaurante Lemongrass', label: 'Ambiente' },
  { src: signatureDishes, alt: 'Platillos emblematicos de Lemongrass', label: 'Cocina Thai' },
  { src: chefPlating, alt: 'Chef en accion en Lemongrass', label: 'Alta Cocina' },
]

const galleryImages = [
  { src: heroInterior, alt: 'Interior del restaurante', caption: 'Ambiente' },
  { src: signatureDishes, alt: 'Platillos signature', caption: 'Cocina' },
  { src: chefPlating, alt: 'Chef en accion', caption: 'Alta Cocina' },
  { src: categorySalads, alt: 'Ensaladas frescas', caption: 'Ensaladas' },
  { src: categorySoups, alt: 'Sopas aromaticas', caption: 'Sopas' },
  { src: categoryEntradas, alt: 'Entradas para compartir', caption: 'Entradas' },
  { src: categoryCurrys, alt: 'Currys tailandeses', caption: 'Currys' },
  { src: categoryNoodles, alt: 'Arroces y noodles al wok', caption: 'Wok' },
  { src: categoryPostres, alt: 'Postres thai', caption: 'Postres' },
]

function getDishVisual(categoryId, index = 0) {
  const image = categoryImages[categoryId] ?? signatureDishes
  return { image, position: dishCropPositions[index % dishCropPositions.length] }
}

function formatPrice(price) {
  return `$${price.toLocaleString('es-MX')}`
}

function cx(...classes) {
  return classes.filter(Boolean).join(' ')
}

function pageFromLocation() {
  const hashPage = window.location.hash.replace('#', '')
  if (pages.some((page) => page.id === hashPage)) return hashPage
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  if (path === '/home') return 'inicio'
  return pages.find((page) => page.path === path)?.id ?? 'inicio'
}

export default function App() {
  const [activePage, setActivePage] = useState('inicio')
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setActivePage(pageFromLocation())
    const onRouteChange = () => {
      setActivePage(pageFromLocation())
      setDrawerOpen(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('hashchange', onRouteChange)
    window.addEventListener('popstate', onRouteChange)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('hashchange', onRouteChange)
      window.removeEventListener('popstate', onRouteChange)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('nav-open', drawerOpen)
    return () => { document.body.classList.remove('nav-open') }
  }, [drawerOpen])

  const navigate = (pageId) => {
    if (pageId === activePage) { setDrawerOpen(false); return }
    const page = pages.find((item) => item.id === pageId)
    window.history.pushState({}, '', page?.path ?? '/')
    setActivePage(pageId)
    setDrawerOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="site-shell min-h-screen bg-ivory text-charcoal">
      <Nav
        activePage={activePage}
        drawerOpen={drawerOpen}
        scrolled={scrolled}
        onNavigate={navigate}
        onToggleDrawer={() => setDrawerOpen((v) => !v)}
      />
      <AnimatePresence mode="wait">
        <motion.main
          key={activePage}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="pt-[64px] md:pt-[72px]"
        >
          {activePage === 'inicio' && <HomePage onNavigate={navigate} />}
          {activePage === 'menu' && <MenuPage />}
          {activePage === 'acerca' && <AboutPage onNavigate={navigate} />}
          {activePage === 'galeria' && <GalleryPage />}
        </motion.main>
      </AnimatePresence>
      <Footer onNavigate={navigate} />
    </div>
  )
}

// ── Navigation ────────────────────────────────────────────────────────────────

function Nav({ activePage, drawerOpen, scrolled, onNavigate, onToggleDrawer }) {
  return (
    <header className={cx('nav-shell fixed inset-x-0 top-0 z-50', scrolled && 'is-scrolled')}>
      <nav className="mx-auto flex h-[64px] max-w-[1360px] items-center justify-between px-4 md:h-[72px] md:px-10">
        <button
          className="flex items-center gap-2.5 text-left md:gap-3"
          onClick={() => onNavigate('inicio')}
          aria-label="Ir al inicio"
        >
          <img src={logoMark} alt="" className="h-9 w-9 object-contain md:h-10 md:w-10" />
          <span className="leading-none">
            <span className="block font-serif text-[20px] text-gold md:text-[22px]">Lemongrass</span>
            <span className="block font-sans text-[8px] font-bold uppercase tracking-[0.28em] text-ivory/75 md:text-[9px] md:tracking-[0.32em]">
              Thai Cuisine
            </span>
          </span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {pages.map((page) => (
            <button
              key={page.id}
              onClick={() => onNavigate(page.id)}
              className={cx('nav-link-emerald', activePage === page.id && 'is-active')}
            >
              {page.label}
            </button>
          ))}
        </div>

        <button
          className={cx('hamburger hamburger-light md:hidden', drawerOpen && 'is-open')}
          onClick={onToggleDrawer}
          aria-label={drawerOpen ? 'Cerrar menu' : 'Abrir menu'}
          aria-expanded={drawerOpen}
          aria-controls="mobile-nav-drawer"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-charcoal/45 backdrop-blur-sm md:hidden"
            onClick={onToggleDrawer}
          >
            <motion.aside
              id="mobile-nav-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 280, damping: 32 }}
              className="ml-auto flex h-screen w-[84vw] max-w-[340px] flex-col bg-emerald px-5 pb-8 pt-5 text-ivory shadow-[0_28px_80px_rgba(0,0,0,.28)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-8 flex items-center justify-between gap-4">
                <img src={logoText} alt="Lemongrass Thai Cuisine" className="w-32 brightness-0 invert" />
                <button className="drawer-close" onClick={onToggleDrawer}>Cerrar</button>
              </div>
              <div className="flex flex-col gap-5 border-t border-ivory/15 pt-8">
                {pages.map((page) => (
                  <button
                    key={page.id}
                    onClick={() => onNavigate(page.id)}
                    className={cx('drawer-link', activePage === page.id && 'is-active')}
                  >
                    {page.label}
                  </button>
                ))}
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

// ── Home Page ─────────────────────────────────────────────────────────────────

function HomePage({ onNavigate }) {
  return (
    <>
      {/* Hero */}
      <section className="hero-stage relative flex min-h-[calc(100svh-64px)] items-center justify-center overflow-hidden px-5 py-20 text-center text-ivory md:min-h-[calc(100svh-72px)] md:py-24">
        <img src={heroInterior} alt="" className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(35,35,35,.82),rgba(35,35,35,.36),rgba(15,92,77,.74))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,155,47,.12),transparent_28rem)]" />
        <div className="paper-grain absolute inset-0" />
        <div className="thai-arch absolute inset-x-0 top-10 mx-auto h-[62vh] max-w-5xl opacity-35" />
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="relative z-10 mx-auto max-w-5xl"
        >
          <img src={logoMark} alt="" className="mx-auto mb-6 h-20 w-20 object-contain drop-shadow-[0_0_34px_rgba(200,155,47,.32)] md:mb-7 md:h-24 md:w-24" />
          <p className="label text-gold">Ciudad de Mexico · Cocina Tailandesa</p>
          <div className="mx-auto my-7 h-px w-20 bg-gold" />
          <h1 className="font-serif text-[38px] font-medium leading-[0.95] sm:text-[44px] md:text-[72px]">
            Una experiencia culinaria
            <br />
            desde Bangkok
            <br />
            hasta el corazon de CDMX
          </h1>
          <p className="mx-auto mt-6 max-w-2xl px-2 font-accent text-lg italic text-ivory/75 sm:text-xl md:mt-7 md:text-2xl">
            Sabores autenticos. Presentacion de alta cocina. Cocteleria de autor.
          </p>

          {/* Value proposition pillars */}
          <div className="mx-auto mt-8 flex max-w-xl flex-wrap items-center justify-center gap-x-5 gap-y-3">
            {['Cocina Thai Moderna', 'Cocteleria de Autor', 'Eventos Corporativos'].map((pillar, i) => (
              <span key={pillar} className="flex items-center gap-3">
                {i > 0 && <span className="hidden h-px w-5 bg-gold/40 sm:block" />}
                <span className="font-sans text-[10px] font-black uppercase tracking-[0.24em] text-ivory/80">
                  {pillar}
                </span>
              </span>
            ))}
          </div>

          <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <button className="btn btn-emerald w-full sm:w-auto" onClick={() => onNavigate('menu')}>Ver Menu</button>
            <button className="btn btn-outline-gold w-full sm:w-auto" onClick={() => onNavigate('galeria')}>Ver Galeria</button>
          </div>
        </motion.div>
        <div className="scroll-cue absolute bottom-8 left-1/2 -translate-x-1/2 text-gold" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      <AboutTeaser onNavigate={onNavigate} />
      <ReviewsCarousel />
      <TriptychSection />
      <IngredientsGrid />
    </>
  )
}

function AboutTeaser({ onNavigate }) {
  return (
    <Reveal className="grid min-h-[620px] md:grid-cols-[1.35fr_.9fr]">
      <div className="px-5 py-20 md:px-16 lg:px-24">
        <p className="label text-gold">Nuestra Historia</p>
        <h2 className="mt-5 max-w-3xl font-serif text-5xl font-medium leading-none md:text-6xl">
          Donde Bangkok se encuentra con la Ciudad de Mexico
        </h2>
        <p className="mt-8 max-w-2xl text-base leading-8 text-charcoal/70 md:text-lg">
          Lemongrass nace como una mesa de contrastes: hierbas frescas, fuego de wok, caldos
          pacientes y una vision contemporanea de servicio. En CDMX, cada plato traduce la
          hospitalidad tailandesa con una cadencia refinada, precisa y profundamente sensorial.
        </p>
        <div className="my-9 h-px max-w-xl bg-gold/60" />
        <p className="font-accent text-2xl italic text-charcoal/80">
          La gastronomia tailandesa es un arte de contrastes
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {['12 anos de experiencia', 'Ingredientes importados', 'Chef reconocido'].map((stat) => (
            <div key={stat} className="border-l border-gold pl-4">
              <p className="font-sans text-xs font-bold uppercase tracking-[0.22em] text-charcoal/55">{stat}</p>
            </div>
          ))}
        </div>
        <button className="btn btn-emerald mt-10" onClick={() => onNavigate('acerca')}>Conocer mas</button>
      </div>
      <div className="lemongrass-pattern relative flex min-h-[420px] items-center justify-center overflow-hidden bg-emerald p-10">
        <img src={chefPlating} alt="" className="absolute inset-0 h-full w-full object-cover opacity-45 mix-blend-luminosity" loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-emerald/75" />
        <span className="absolute font-accent text-[220px] italic leading-none text-gold/10">L</span>
        <div className="relative z-10 max-w-xs text-center">
          <img src={logoText} alt="Lemongrass" className="mx-auto mb-8 w-64 brightness-0 invert" />
          <p className="label text-ivory/75">Bangkok discipline · Mexico City pulse</p>
        </div>
      </div>
    </Reveal>
  )
}

function ReviewsCarousel() {
  const doubled = useMemo(() => [...googleReviews, ...googleReviews], [])
  return (
    <section className="section-padding bg-ivory overflow-hidden">
      <Reveal className="mx-auto mb-12 max-w-[1240px] px-5">
        <p className="label text-gold">Google Resenas</p>
        <h2 className="mt-4 font-serif text-5xl font-medium leading-none md:text-6xl">
          Lo que dicen nuestros clientes
        </h2>
      </Reveal>
      <div className="reviews-carousel">
        <div className="reviews-track">
          {doubled.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ReviewCard({ review }) {
  return (
    <article className="review-card">
      <div className="review-card-header">
        <div className="review-avatar">{review.avatar}</div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-bold text-charcoal leading-tight">{review.name}</p>
          <div className="review-stars mt-1">
            {Array.from({ length: review.rating }).map((_, i) => (
              <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="m12 3 2.3 5.7L20 11l-5.7 2.3L12 20l-2.3-6.7L4 11l5.7-2.3L12 3Z" />
              </svg>
            ))}
          </div>
        </div>
        <GoogleLogo />
      </div>
      <p className="review-text">{review.text}</p>
      <p className="review-date">{review.date}</p>
    </article>
  )
}

function GoogleLogo() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  )
}

function TriptychSection() {
  return (
    <section className="triptych" aria-label="Galeria de imagenes">
      {triptychImages.map((item) => (
        <div key={item.label} className="triptych-panel">
          <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
          <div className="triptych-overlay" />
          <div className="triptych-label">
            <p className="label text-gold">{item.label}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

function IngredientsGrid() {
  return (
    <section className="section-padding bg-ivory">
      <Reveal className="mx-auto max-w-[1240px]">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="label text-gold">Botanica Thai</p>
            <h2 className="mt-4 font-serif text-5xl font-medium leading-none md:text-6xl">
              Los ingredientes de la casa
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-charcoal/60">
            Cada platillo de Lemongrass nace de especias importadas directamente de Tailandia, tratadas con la precision que merece cada ingrediente.
          </p>
        </div>
        <div className="ingredients-grid">
          {ingredients.map((item, i) => (
            <article key={item.name} className="ingredient-card">
              <p className="ingredient-number">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="ingredient-name">{item.name}</h3>
              <p className="ingredient-origin">{item.origin}</p>
              <p className="ingredient-desc">{item.desc}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

function ExperienceSection() {
  return (
    <section className="section-padding bg-charcoal text-ivory">
      <Reveal className="mx-auto max-w-[1180px]">
        <h2 className="text-center font-serif text-5xl leading-none">La experiencia Lemongrass</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            ['Botanica Thai', 'Limoncillo, hojas de lima kaffir y albahaca thai perfuman cada servicio.'],
            ['Cena Urbana', 'Ambiente sobrio, luz baja y ritmo de Ciudad de Mexico.'],
            ['Precision de Wok', 'Fuego alto, tiempos cortos y salsas balanceadas al momento.'],
          ].map(([title, copy], index) => (
            <article key={title} className="highlight-card">
              <ThinIcon type={index} />
              <h3 className="mt-8 font-serif text-3xl">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-ivory/70">{copy}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

// ── Menu Page ─────────────────────────────────────────────────────────────────

function MenuPage() {
  const [activeId, setActiveId] = useState(menuCategories[0].id)
  const [selectedDish, setSelectedDish] = useState(null)
  const activeCategory = menuCategories.find((c) => c.id === activeId)

  return (
    <section className="min-h-screen bg-ivory">
      <PageHero
        label="Menu real"
        title="La carta de Lemongrass"
        copy="Ensaladas frescas, sopas aromaticas, entradas para compartir, currys con leche de coco, noodles salteados al wok, postres tailandeses y cocteleria de autor."
      />

      <div className="section-padding pt-10">
        <div className="mx-auto max-w-[1240px]">

          {/* Category tabs */}
          <div className="menu-tabs-wrap">
            <div className="menu-tabs">
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveId(cat.id)}
                  className={cx(activeId === cat.id && 'is-active')}
                >
                  {categoryCopy[cat.id]?.title ?? cat.label}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
            >
              {/* Category header */}
              <div className="menu-category-header">
                <p className="label text-gold">{activeCategory.eyebrow}</p>
                <h2 className="mt-2 font-serif text-3xl font-medium leading-none">
                  {categoryCopy[activeId]?.title ?? activeCategory.label}
                </h2>
                <p className="mt-2 text-sm leading-7 text-charcoal/60">
                  {categoryCopy[activeId]?.note}
                </p>
              </div>

              {/* Cards grid */}
              <div className="menu-cards-grid">
                {activeCategory.items.map((item, index) => (
                  <MenuCard
                    key={item.id}
                    item={item}
                    categoryId={activeCategory.id}
                    index={index}
                    onSelect={() => setSelectedDish({ ...item, category: activeCategory.label })}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Allergy notice */}
          <div className="allergy-banner">
            <svg className="mt-0.5 h-5 w-5 shrink-0 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
              <path d="M12 9v4M12 17h.01" />
            </svg>
            <p className="text-sm leading-7 text-charcoal/75">
              <strong className="font-black text-charcoal">Informacion importante:</strong>{' '}
              Consulte con su mesero sobre cualquier tipo de alergia o restriccion alimentaria antes de realizar su pedido. Su salud y seguridad son nuestra maxima prioridad.
            </p>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedDish && <DishSheet dish={selectedDish} onClose={() => setSelectedDish(null)} />}
      </AnimatePresence>
    </section>
  )
}

function MenuCard({ item, categoryId, index, onSelect }) {
  const visual = getDishVisual(categoryId, index)
  return (
    <button className="menu-card" onClick={onSelect}>
      <div className="menu-card-image">
        <img
          src={visual.image}
          alt={item.name}
          style={{ objectPosition: visual.position }}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="menu-card-body">
        <h3 className="menu-card-name">{item.name}</h3>
        <p className="menu-card-desc">{item.description}</p>
        {item.options && (
          <div className="menu-card-options">
            {item.options.map((opt) => (
              <span key={opt.label} className="menu-card-option">{opt.label}</span>
            ))}
          </div>
        )}
        <p className="menu-card-price">{formatPrice(item.price)}</p>
      </div>
    </button>
  )
}

function DishSheet({ dish, onClose }) {
  const category = menuCategories.find((c) => c.label === dish.category)
  const dishIndex = category?.items.findIndex((i) => i.id === dish.id) ?? 0
  const visual = getDishVisual(category?.id, Math.max(dishIndex, 0))

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-end bg-charcoal/65 p-3 backdrop-blur-md md:items-center md:justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.article
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 80, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 330, damping: 32 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl bg-ivory p-5 text-charcoal sm:p-7 md:p-10"
      >
        <div className="dish-sheet-image mb-7">
          <img src={visual.image} alt={dish.name} style={{ objectPosition: visual.position }} loading="lazy" decoding="async" />
        </div>
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="label text-gold">{dish.category}</p>
            <h3 className="mt-3 font-serif text-4xl leading-none sm:text-5xl">{dish.name}</h3>
          </div>
          <p className="w-fit shrink-0 bg-emerald px-4 py-2 text-sm font-black text-ivory">{formatPrice(dish.price)}</p>
        </div>
        <p className="text-lg leading-8 text-charcoal/75">{dish.description}</p>
        <p className="mt-4 text-sm leading-7 text-charcoal/60">{dish.detail}</p>
        {dish.options && (
          <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-4">
            {dish.options.map((opt) => (
              <div key={opt.label} className="border border-gold/35 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.22em]">{opt.label}</p>
                <p className="mt-2 text-gold">{formatPrice(opt.price)}</p>
              </div>
            ))}
          </div>
        )}
        <button className="btn btn-emerald mt-8 w-full justify-center" onClick={onClose}>Cerrar</button>
      </motion.article>
    </motion.div>
  )
}

// ── About Page ────────────────────────────────────────────────────────────────

function AboutPage({ onNavigate }) {
  return (
    <section className="bg-ivory">
      <PageHero
        label="Nuestra Historia"
        title="Donde Bangkok se encuentra con la Ciudad de Mexico"
        copy="Cocina Thai moderna, cocteleria de autor y un espacio disenado para experiencias que perduran."
      />

      {/* Two-column: story + contact */}
      <section className="section-padding">
        <Reveal className="mx-auto grid max-w-[1180px] gap-12 md:grid-cols-2 md:gap-16">
          {/* Left: narrative */}
          <div>
            <p className="label text-gold">Nuestra Identidad</p>
            <h2 className="mt-5 font-serif text-5xl font-medium leading-none">
              Una vision moderna de la tradicion tailandesa
            </h2>
            <p className="mt-7 text-base leading-8 text-charcoal/70">
              Lemongrass nace como una propuesta culinaria sin concesiones: ingredientes importados directamente de Tailandia, tecnicas de alta cocina y un servicio pensado para quienes aprecian los detalles. En el corazon de CDMX, cada plato es un viaje sensorial que parte desde Bangkok.
            </p>
            <p className="mt-5 text-base leading-8 text-charcoal/70">
              Por la noche, Lemongrass se transforma en un bar de cocteleria de autor. Nuestros mixologos crean tragos que dialogan con las especias thai: limoncillo, galanga, albahaca y kaffir lime en recetas unicas que no encontraras en ningun otro lugar de la ciudad.
            </p>
            <p className="mt-5 text-base leading-8 text-charcoal/70">
              Para eventos corporativos y celebraciones privadas, ofrecemos espacios y menus personalizados que elevan cualquier reunion a una experiencia memorable de cocina Thai moderna.
            </p>
            <div className="my-9 h-px max-w-sm bg-gold/40" />
            <p className="font-accent text-2xl italic text-charcoal/80">
              La elegancia no es lujo. Es la precision de cada detalle.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {['12 anos de experiencia', 'Ingredientes importados', 'Chef reconocido'].map((stat) => (
                <div key={stat} className="border-l border-gold pl-4">
                  <p className="font-sans text-xs font-bold uppercase tracking-[0.22em] text-charcoal/55">{stat}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: contact */}
          <div>
            <p className="label text-gold">Visita y Contacto</p>
            <h2 className="mt-5 font-serif text-4xl font-medium leading-none">Encontranos en CDMX</h2>
            <div className="mt-8 space-y-4">
              <ContactCardStatic icon="pin" title="Direccion" copy="C. Rio Lerma 186, Cuauhtemoc, 06500, Ciudad de Mexico" />
              <ContactCardStatic icon="clock" title="Horarios" copy="Lunes a Viernes 12:30 - 23:00 · Sabado 12:30 - 22:00 · Domingo 13:00 - 21:00" />
              <ContactCardStatic icon="phone" title="Telefono" copy="+52 55 0000 0000" />
            </div>
            <div className="about-photo-card mt-8">
              <img src={heroInterior} alt="Interior Lemongrass Thai Cuisine" loading="lazy" decoding="async" />
              <div className="about-photo-card-overlay">
                <p className="label text-gold">Ubicacion</p>
                <p className="mt-2 font-serif text-2xl text-ivory">Rio Lerma 186, CDMX</p>
              </div>
            </div>
            <div className="mt-6 border border-gold/30 p-6">
              <p className="label text-gold">Eventos Corporativos</p>
              <p className="mt-3 text-sm leading-7 text-charcoal/70">
                Contactanos directamente por telefono o visitanos para coordinar eventos privados, cenas corporativas o celebraciones especiales a la medida.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Three pillars */}
      <section className="section-padding bg-emerald text-ivory">
        <Reveal className="mx-auto grid max-w-[1180px] gap-6 md:grid-cols-3">
          {[
            ['Botanica Thai', 'Hierbas frescas, limoncillo, galanga y albahaca thai como base aromatica de cada servicio.'],
            ['Cocteleria de Autor', 'Maridajes pensados para equilibrar acidez, dulzor, grasa y picante con tecnica mexicana.'],
            ['Servicio Preciso', 'Servicio sobrio y atento, disenado para una noche de alta cocina moderna y elegante.'],
          ].map(([title, copy], index) => (
            <article key={title} className="highlight-card">
              <ThinIcon type={index} />
              <h3 className="mt-8 font-serif text-3xl">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-ivory/70">{copy}</p>
            </article>
          ))}
        </Reveal>
      </section>

    </section>
  )
}

function ContactCardStatic({ icon, title, copy }) {
  return (
    <div className="contact-card-static">
      <ThinContactIcon icon={icon} className="mt-0.5 h-6 w-6 shrink-0 text-emerald" />
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold mb-1">{title}</p>
        <p className="text-sm leading-7 text-charcoal/70">{copy}</p>
      </div>
    </div>
  )
}

// ── Gallery Page ──────────────────────────────────────────────────────────────

function GalleryPage() {
  return (
    <section className="bg-ivory">
      <PageHero
        label="Galeria"
        title="Momentos Lemongrass"
        copy="Una seleccion visual de nuestra cocina, ambiente y la experiencia que nos define."
      />
      <section className="section-padding">
        <Reveal className="mx-auto max-w-[1240px]">
          <div className="gallery-grid">
            {galleryImages.map((item, i) => (
              <figure key={i} className="gallery-item">
                <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
                <figcaption className="gallery-caption">{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </section>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────

function Footer({ onNavigate }) {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="mx-auto max-w-[1180px] px-5 py-12 md:px-10">
        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
          {/* Col 1: Logo + Dirección */}
          <div>
            <img src={logoText} alt="Lemongrass Thai Cuisine" className="mb-5 w-40 brightness-0 invert" />
            <p className="label text-gold mb-2">Direccion</p>
            <p className="text-sm leading-6 text-ivory/60">C. Rio Lerma 186, Cuauhtemoc<br />06500, Ciudad de Mexico</p>
          </div>

          {/* Col 2: Contacto */}
          <div>
            <p className="label text-gold mb-4">Contacto</p>
            <div className="space-y-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-ivory/40 mb-0.5">Telefono</p>
                <p className="text-sm text-ivory/70">+52 55 0000 0000</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-ivory/40 mb-0.5">Horario</p>
                <p className="text-sm text-ivory/70">Lun - Vie 12:30 - 23:00</p>
                <p className="text-sm text-ivory/70">Sab 12:30 - 22:00 · Dom 13:00 - 21:00</p>
              </div>
            </div>
          </div>

          {/* Col 3: Redes Sociales */}
          <div>
            <p className="label text-gold mb-4">Redes Sociales</p>
            <div className="flex gap-4 mb-3">
              <SocialIcon type="instagram" />
              <SocialIcon type="facebook" />
              <SocialIcon type="tiktok" />
            </div>
            <p className="text-xs text-ivory/40">@lemongrass_cuisine</p>
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/10" />

      {/* Bottom breadcrumb */}
      <div className="mx-auto max-w-[1180px] px-5 py-5 md:px-10">
        <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
          <nav className="footer-breadcrumb" aria-label="Mapa del sitio">
            {pages.map((page, index) => (
              <span key={page.id} className="footer-breadcrumb-item">
                {index > 0 && <span className="footer-breadcrumb-sep" aria-hidden="true">/</span>}
                <button onClick={() => onNavigate(page.id)} className="footer-breadcrumb-link">
                  {page.label}
                </button>
              </span>
            ))}
          </nav>
          <p className="text-xs text-ivory/30">© 2025 Lemongrass Thai Cuisine · Ciudad de Mexico</p>
        </div>
      </div>
    </footer>
  )
}

// ── Shared UI ─────────────────────────────────────────────────────────────────

function PageHero({ label, title, copy }) {
  return (
    <section className="page-hero relative overflow-hidden bg-charcoal px-5 py-20 text-center text-ivory md:py-32">
      <div className="paper-grain absolute inset-0" />
      <div className="relative z-10 mx-auto max-w-4xl">
        <p className="label text-gold">{label}</p>
        <div className="mx-auto my-7 h-px w-20 bg-gold" />
        <h1 className="font-serif text-4xl leading-none sm:text-5xl md:text-7xl">{title}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-ivory/70 sm:text-base sm:leading-8 md:mt-7">{copy}</p>
      </div>
    </section>
  )
}

function Reveal({ children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function ThinIcon({ type }) {
  const paths = [
    <path key="leaf" d="M5 18C9 7 17 5 21 4c-1 8-5 15-13 16-2 .2-3-.6-3-2Z M8 18c4-4 7-7 10-12" />,
    <path key="glass" d="M8 3h8l-1 8a4 4 0 0 1-6 0L8 3Zm4 10v7m-4 0h8" />,
    <path key="star" d="m12 3 2.3 5.7L20 11l-5.7 2.3L12 20l-2.3-6.7L4 11l5.7-2.3L12 3Z" />,
  ]
  return (
    <svg className="h-12 w-12 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round">
      {paths[type]}
    </svg>
  )
}

function ThinContactIcon({ icon, className = 'mt-1 h-6 w-6 shrink-0 text-gold' }) {
  const map = {
    clock: <><circle cx="12" cy="12" r="8" /><path d="M12 7v5l3 2" /></>,
    phone: <path d="M7 4l3 5-2 2c1.5 3 3 4.5 6 6l2-2 5 3c-.5 2-2 3-4 3C9 21 3 15 3 7c0-2 1-3.5 4-3Z" />,
    pin: <><path d="M12 21s7-6 7-12a7 7 0 0 0-14 0c0 6 7 12 7 12Z" /><circle cx="12" cy="9" r="2" /></>,
  }
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      {map[icon]}
    </svg>
  )
}

function SocialIcon({ type }) {
  const paths = {
    instagram: <><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="12" cy="12" r="3.5" /><path d="M17 7.2h.01" /></>,
    facebook: <path d="M14 8h2V4h-2c-3 0-5 2-5 5v2H7v4h2v5h4v-5h3l1-4h-4V9c0-.6.4-1 1-1Z" />,
    tiktok: <path d="M14 4v9.5a4.5 4.5 0 1 1-4-4.47V13a1.5 1.5 0 1 0 1.5 1.5V4h2.5c.7 2 2 3.3 4 3.8v3.1c-1.7-.2-3-1-4-2.1Z" />,
  }
  return (
    <svg className="h-6 w-6 text-ivory/60 transition-colors hover:text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
      {paths[type]}
    </svg>
  )
}
