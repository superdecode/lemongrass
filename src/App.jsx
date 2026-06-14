import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import logoMark from '../Logo.png'
import logoText from '../Logo2.png'
import logoFull from '../Lemongrass.png'
import heroInterior from './assets/imagery/lemongrass-hero-interior.jpg'
import signatureDishes from './assets/imagery/lemongrass-signature-dishes.jpg'
import chefPlating from './assets/imagery/lemongrass-chef-plating.jpg'
import { menuCategories } from './data/menuData.js'

const pages = [
  { id: 'inicio', label: 'Inicio', path: '/' },
  { id: 'menu', label: 'Menu', path: '/menu' },
  { id: 'acerca', label: 'Nosotros', path: '/acerca' },
  { id: 'contacto', label: 'Contacto', path: '/contacto' },
]

const categoryCopy = {
  entradas: {
    title: 'Entrantes',
    note: 'Aromas citricos, texturas crujientes y primeras notas de Bangkok.',
  },
  currys: {
    title: 'Currys',
    note: 'Leche de coco, especias profundas y picor calibrado al gusto.',
  },
  'arroces-noodles': {
    title: 'Arroces & Noodles',
    note: 'Wok caliente, tamarindo, hierbas frescas y arroz jazmin.',
  },
}

const menuHighlights = [
  'Sopa Tomyam Kung',
  'Curry Verde',
  'Pad Thai',
  'Rollo Crujiente de Pollo con Mango',
]

const dishCropPositions = [
  '45% 42%',
  '68% 56%',
  '28% 48%',
  '52% 66%',
  '74% 38%',
  '34% 68%',
  '58% 34%',
  '82% 62%',
  '22% 40%',
  '48% 78%',
  '64% 50%',
  '36% 54%',
  '72% 74%',
]

function getDishVisual(categoryId, index = 0) {
  const image =
    categoryId === 'currys'
      ? signatureDishes
      : categoryId === 'arroces-noodles'
        ? signatureDishes
        : chefPlating

  return {
    image,
    position: dishCropPositions[index % dishCropPositions.length],
  }
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

  const navigate = (pageId) => {
    if (pageId === activePage) {
      setDrawerOpen(false)
      return
    }
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
        onToggleDrawer={() => setDrawerOpen((value) => !value)}
      />

      <AnimatePresence mode="wait">
        <motion.main
          key={activePage}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="pt-[72px]"
        >
          {activePage === 'inicio' && <HomePage onNavigate={navigate} />}
          {activePage === 'menu' && <MenuPage />}
          {activePage === 'acerca' && <AboutPage onNavigate={navigate} />}
          {activePage === 'contacto' && <ContactPage />}
        </motion.main>
      </AnimatePresence>

      <Footer onNavigate={navigate} />
      <FloatingReserve onNavigate={navigate} />
    </div>
  )
}

function Nav({ activePage, drawerOpen, scrolled, onNavigate, onToggleDrawer }) {
  return (
    <header className={cx('nav-shell fixed inset-x-0 top-0 z-50', scrolled && 'is-scrolled')}>
      <nav className="mx-auto flex h-[72px] max-w-[1360px] items-center justify-between px-5 md:px-10">
        <button
          className="flex items-center gap-3 text-left"
          onClick={() => onNavigate('inicio')}
          aria-label="Ir al inicio"
        >
          <img src={logoMark} alt="" className="h-10 w-10 object-contain" />
          <span className="leading-none">
            <span className="block font-serif text-[22px] text-gold">Lemongrass</span>
            <span className="block font-sans text-[9px] font-bold uppercase tracking-[0.32em] text-charcoal">
              Thai Cuisine
            </span>
          </span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {pages.map((page) => (
            <button
              key={page.id}
              onClick={() => onNavigate(page.id)}
              className={cx('nav-link', activePage === page.id && 'is-active')}
            >
              {page.label}
            </button>
          ))}
        </div>

        <button className="hidden btn btn-emerald md:inline-flex" onClick={() => onNavigate('contacto')}>
          Reserve una Mesa
        </button>

        <button className="hamburger md:hidden" onClick={onToggleDrawer} aria-label="Abrir menu">
          <span />
          <span />
          <span />
        </button>
      </nav>

      <AnimatePresence>
        {drawerOpen && (
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 280, damping: 32 }}
            className="fixed right-0 top-0 z-[60] flex h-screen w-[82vw] max-w-sm flex-col bg-emerald p-8 text-ivory"
          >
            <button className="mb-12 self-end text-sm uppercase tracking-[0.3em]" onClick={onToggleDrawer}>
              Cerrar
            </button>
            <img src={logoText} alt="Lemongrass Thai Cuisine" className="mb-12 w-52 brightness-0 invert" />
            <div className="flex flex-col gap-7">
              {pages.map((page) => (
                <button
                  key={page.id}
                  onClick={() => onNavigate(page.id)}
                  className="font-serif text-4xl text-left"
                >
                  {page.label}
                </button>
              ))}
            </div>
            <button className="btn mt-auto border border-gold text-gold" onClick={() => onNavigate('contacto')}>
              Reservar
            </button>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  )
}

function HomePage({ onNavigate }) {
  return (
    <>
      <section className="hero-stage relative flex min-h-[calc(100svh-72px)] items-center justify-center overflow-hidden px-5 py-24 text-center text-ivory">
        <img src={heroInterior} alt="" className="absolute inset-0 h-full w-full object-cover" />
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
          <img src={logoMark} alt="" className="mx-auto mb-7 h-24 w-24 object-contain drop-shadow-[0_0_34px_rgba(200,155,47,.32)]" />
          <p className="label text-gold">Ciudad de Mexico · Cocina Tailandesa</p>
          <div className="mx-auto my-7 h-px w-20 bg-gold" />
          <h1 className="font-serif text-[44px] font-medium leading-[0.95] md:text-[72px]">
            Una experiencia culinaria
            <br />
            desde Bangkok
            <br />
            hasta el corazon de CDMX
          </h1>
          <p className="mx-auto mt-7 max-w-2xl font-accent text-xl italic text-ivory/75 md:text-2xl">
            Sabores autenticos. Presentacion de alta cocina.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="btn btn-emerald" onClick={() => onNavigate('menu')}>Ver Menu</button>
            <button className="btn btn-outline-gold" onClick={() => onNavigate('contacto')}>Reservar</button>
          </div>
        </motion.div>
        <div className="scroll-cue absolute bottom-8 left-1/2 -translate-x-1/2 text-gold" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      <AboutTeaser onNavigate={onNavigate} />
      <SignatureMenu />
      <ExperienceSection />
      <ReservationBand onNavigate={onNavigate} />
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
        <img src={chefPlating} alt="" className="absolute inset-0 h-full w-full object-cover opacity-45 mix-blend-luminosity" />
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

function SignatureMenu() {
  const items = useMemo(() => {
    const all = menuCategories.flatMap((category) =>
      category.items.map((item) => ({ ...item, category: category.label })),
    )
    return menuHighlights.map((name) => all.find((item) => item.name === name)).filter(Boolean)
  }, [])

  return (
    <section className="section-padding bg-ivory">
      <Reveal className="mx-auto max-w-[1240px]">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="label text-gold">Firma de la casa</p>
            <h2 className="mt-4 font-serif text-5xl font-medium leading-none md:text-6xl">Primer vistazo al menu</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-charcoal/60">
            La carta real del restaurante, presentada como una pieza editorial para navegar sin friccion.
          </p>
        </div>
        <div className="feature-image mb-12">
          <img src={signatureDishes} alt="Curry verde y Pad Thai de Lemongrass Thai Cuisine" />
          <div className="feature-caption">
            <span>Signature tasting</span>
            <strong>Currys · Wok · Hierbas frescas</strong>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {items.map((item, index) => (
            <article key={item.id} className={cx('signature-card', index % 2 && 'md:translate-y-8')}>
              <div className="food-frame mb-6" data-dish={index}>
                <img src={index % 2 ? chefPlating : signatureDishes} alt="" />
              </div>
              <p className="label text-gold">{item.category}</p>
              <h3 className="mt-3 font-serif text-3xl leading-none">{item.name}</h3>
              <p className="mt-4 text-sm leading-7 text-charcoal/60">{item.description}</p>
              <p className="mt-5 text-sm font-extrabold text-gold">{formatPrice(item.price)}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

function MenuPage() {
  const [activeId, setActiveId] = useState(menuCategories[0].id)
  const [selectedDish, setSelectedDish] = useState(null)
  const activeCategory = menuCategories.find((category) => category.id === activeId)

  return (
    <section className="min-h-screen bg-ivory">
      <PageHero
        label="Menu real"
        title="La carta de Lemongrass"
        copy="Entradas aromaticas, currys con leche de coco y noodles salteados al wok. Precios e informacion tomados del menu fisico."
      />

      <div className="section-padding pt-10">
        <div className="mx-auto max-w-[1180px]">
          <div className="menu-tabs-wrap">
            <div className="menu-tabs">
              {menuCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveId(category.id)}
                  className={cx(activeId === category.id && 'is-active')}
                >
                  {categoryCopy[category.id]?.title ?? category.label}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.24 }}
              className="grid gap-10 lg:grid-cols-[.72fr_1.28fr]"
            >
              <aside className="menu-art-panel sticky top-24 h-fit overflow-hidden bg-emerald p-8 text-ivory">
                <img src={activeId === 'currys' ? signatureDishes : chefPlating} alt="" className="menu-art-image" />
                <div className="absolute inset-0 bg-emerald/70" />
                <div className="relative z-10">
                <p className="label text-gold">{activeCategory.eyebrow}</p>
                <h2 className="mt-5 font-serif text-5xl leading-none">
                  {categoryCopy[activeId]?.title ?? activeCategory.label}
                </h2>
                <p className="mt-6 text-sm leading-7 text-ivory/72">{categoryCopy[activeId]?.note}</p>
                <div className="mt-10 border border-gold/35 bg-charcoal/35 p-5 backdrop-blur-sm">
                  <p className="label text-gold">Servicio</p>
                  <p className="mt-3 text-sm leading-7 text-ivory/70">
                    Toca cualquier platillo para ver detalles, opciones y precio.
                  </p>
                </div>
                </div>
              </aside>

              <div className="menu-list bg-ivory">
                {activeCategory.items.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedDish({ ...item, category: activeCategory.label })}
                    className="menu-row group"
                  >
                    <DishThumb
                      categoryId={activeCategory.id}
                      index={index}
                      name={item.name}
                    />
                    <span className="menu-row-index">{String(index + 1).padStart(2, '0')}</span>
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-center gap-3">
                        <span className="font-serif text-2xl leading-tight md:text-[30px]">{item.name}</span>
                        {index === 1 && <span className="chip gold">Chef's Choice</span>}
                        {item.name.toLowerCase().includes('tofu') && <span className="chip emerald">Vegano</span>}
                      </span>
                      <span className="mt-2 block text-sm leading-7 text-charcoal/60">{item.description}</span>
                    </span>
                    <span className="price">{formatPrice(item.price)}</span>
                  </button>
                ))}
                <p className="mt-10 text-center font-accent text-xl italic text-charcoal/60">
                  Todos nuestros ingredientes son importados directamente de Tailandia.
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedDish && <DishSheet dish={selectedDish} onClose={() => setSelectedDish(null)} />}
      </AnimatePresence>
    </section>
  )
}

function DishSheet({ dish, onClose }) {
  const category = menuCategories.find((item) => item.label === dish.category)
  const dishIndex = category?.items.findIndex((item) => item.id === dish.id) ?? 0
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
        onClick={(event) => event.stopPropagation()}
        className="w-full max-w-2xl bg-ivory p-7 text-charcoal md:p-10"
      >
        <div className="dish-sheet-image mb-7">
          <img src={visual.image} alt={dish.name} style={{ objectPosition: visual.position }} />
        </div>
        <div className="mb-7 flex items-start justify-between gap-5">
          <div>
            <p className="label text-gold">{dish.category}</p>
            <h3 className="mt-3 font-serif text-5xl leading-none">{dish.name}</h3>
          </div>
          <p className="shrink-0 bg-emerald px-4 py-2 text-sm font-black text-ivory">{formatPrice(dish.price)}</p>
        </div>
        <p className="text-lg leading-8 text-charcoal/75">{dish.description}</p>
        <p className="mt-4 text-sm leading-7 text-charcoal/60">{dish.detail}</p>
        {dish.options && (
          <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-4">
            {dish.options.map((option) => (
              <div key={option.label} className="border border-gold/35 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.22em]">{option.label}</p>
                <p className="mt-2 text-gold">{formatPrice(option.price)}</p>
              </div>
            ))}
          </div>
        )}
        <button className="btn btn-emerald mt-8 w-full justify-center" onClick={onClose}>Cerrar</button>
      </motion.article>
    </motion.div>
  )
}

function DishThumb({ categoryId, index, name }) {
  const visual = getDishVisual(categoryId, index)

  return (
    <span className="dish-thumb" aria-hidden="true">
      <img src={visual.image} alt={name} style={{ objectPosition: visual.position }} />
    </span>
  )
}

function AboutPage({ onNavigate }) {
  return (
    <section className="bg-ivory">
      <PageHero
        label="Nosotros"
        title="Herencia tailandesa con pulso capitalino"
        copy="Una casa para cenas lentas, currys ceremoniales y servicio preciso en el corazon de Ciudad de Mexico."
      />
      <AboutTeaser onNavigate={onNavigate} />
      <section className="section-padding bg-emerald text-ivory">
        <Reveal className="mx-auto grid max-w-[1180px] gap-6 md:grid-cols-3">
          {[
            ['Hoja', 'Hierbas frescas, limoncillo, galanga y albahaca thai como base aromatica.'],
            ['Copa', 'Maridajes pensados para equilibrar acidez, dulzor, grasa y picante.'],
            ['Estrella', 'Servicio sobrio y atento, disenado para una noche de alta cocina.'],
          ].map(([title, copy], index) => (
            <article key={title} className="highlight-card">
              <ThinIcon type={index} />
              <h3 className="mt-8 font-serif text-3xl">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-ivory/70">{copy}</p>
            </article>
          ))}
        </Reveal>
      </section>
      <section className="section-padding">
        <Reveal className="mx-auto grid max-w-[1180px] gap-10 md:grid-cols-[.9fr_1.1fr] md:items-center">
          <div className="brand-card">
            <img src={chefPlating} alt="" className="brand-card-photo" />
            <img src={logoFull} alt="Lemongrass Thai Cuisine" className="mx-auto w-72" />
          </div>
          <div>
            <p className="label text-gold">Identidad</p>
            <h2 className="mt-4 font-serif text-5xl leading-none">Minimalismo, oro y sombra</h2>
            <p className="mt-6 text-base leading-8 text-charcoal/65">
              La marca combina una silueta inspirada en arquitectura tailandesa con un lenguaje
              editorial de CDMX: espacios amplios, dorado contenido y un esmeralda profundo que
              sostiene la experiencia.
            </p>
          </div>
        </Reveal>
      </section>
    </section>
  )
}

function ContactPage() {
  return (
    <section className="bg-ivory">
      <PageHero
        label="Reservaciones"
        title="Haz tu reservacion"
        copy="Recomendamos reservar con 48 horas de anticipacion para cenas de fin de semana y grupos."
      />
      <section className="grid min-h-[720px] md:grid-cols-2">
        <div className="lemongrass-pattern bg-emerald px-5 py-16 text-ivory md:px-16 lg:px-24">
          <div className="contact-photo mb-10">
            <img src={heroInterior} alt="Interior de Lemongrass Thai Cuisine" />
          </div>
          <p className="label text-gold">Contacto directo</p>
          <h2 className="mt-5 font-serif text-5xl leading-none">Te esperamos en CDMX</h2>
          <div className="mt-10 space-y-7">
            <ContactLine icon="clock" title="Horario" copy="Martes a domingo · 13:00 a 23:00" />
            <ContactLine icon="phone" title="Telefono" copy="+52 55 0000 0000" />
            <ContactLine icon="pin" title="Direccion" copy="Reforma · Ciudad de Mexico" />
          </div>
          <p className="mt-12 max-w-md font-accent text-xl italic text-ivory/75">
            Recomendamos reservar con 48 horas de anticipacion.
          </p>
        </div>
        <ReservationForm />
      </section>
      <section className="section-padding">
        <Reveal className="mx-auto grid max-w-[1180px] gap-8 md:grid-cols-3">
          <InfoColumn title="Direccion" copy="Paseo de la Reforma, Ciudad de Mexico" />
          <InfoColumn title="Horarios" copy="Comida y cena de martes a domingo" />
          <InfoColumn title="Redes Sociales" copy="@lemongrass_cuisine" icons />
        </Reveal>
      </section>
    </section>
  )
}

function ReservationBand({ onNavigate }) {
  return (
    <section className="section-padding bg-charcoal text-ivory">
      <Reveal className="mx-auto grid max-w-[1180px] items-center gap-10 md:grid-cols-[1.1fr_.9fr]">
        <div>
          <p className="label text-gold">Reservaciones</p>
          <h2 className="mt-4 font-serif text-5xl leading-none md:text-6xl">Una mesa para viajar sin salir de CDMX</h2>
        </div>
        <div className="border border-gold/30 p-8">
          <p className="text-sm leading-7 text-ivory/70">
            Reserva una experiencia de noche completa: entradas para compartir, curry al centro,
            noodles de cierre y cocteleria pensada para especias tailandesas.
          </p>
          <button className="btn btn-gold mt-7" onClick={() => onNavigate('contacto')}>Reservar ahora</button>
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

function PageHero({ label, title, copy }) {
  return (
    <section className="page-hero relative overflow-hidden bg-charcoal px-5 py-24 text-center text-ivory md:py-32">
      <div className="paper-grain absolute inset-0" />
      <div className="relative z-10 mx-auto max-w-4xl">
        <p className="label text-gold">{label}</p>
        <div className="mx-auto my-7 h-px w-20 bg-gold" />
        <h1 className="font-serif text-5xl leading-none md:text-7xl">{title}</h1>
        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-ivory/70">{copy}</p>
      </div>
    </section>
  )
}

function ReservationForm() {
  const fields = ['Nombre completo', 'Email', 'Telefono', 'Fecha', 'Hora', 'Numero de personas']
  return (
    <form
      className="bg-ivory px-5 py-16 md:px-16 lg:px-24"
      onSubmit={(event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const message = Array.from(data.entries())
          .map(([key, value]) => `${key}: ${value}`)
          .join('\n')
        window.open(`https://wa.me/?text=${encodeURIComponent(`Hola Lemongrass, quiero reservar:\n${message}`)}`, '_blank')
      }}
    >
      <p className="label text-gold">Formulario</p>
      <h2 className="mt-5 font-serif text-5xl leading-none">Reserva tu mesa</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {fields.map((field) => (
          <label key={field} className="floating-field">
            <input
              name={field}
              placeholder=" "
              type={field === 'Email' ? 'email' : field === 'Fecha' ? 'date' : field === 'Hora' ? 'time' : 'text'}
              required
            />
            <span>{field}</span>
          </label>
        ))}
      </div>
      <button className="btn btn-emerald mt-10 w-full justify-center" type="submit">Solicitar reservacion</button>
    </form>
  )
}

function ContactLine({ icon, title, copy }) {
  return (
    <div className="flex gap-4">
      <ThinContactIcon icon={icon} />
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">{title}</p>
        <p className="mt-1 text-sm leading-7 text-ivory/75">{copy}</p>
      </div>
    </div>
  )
}

function InfoColumn({ title, copy, icons }) {
  return (
    <article className="border-t border-gold/45 pt-6">
      <h3 className="font-serif text-3xl">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-charcoal/60">{copy}</p>
      {icons && (
        <div className="mt-5 flex gap-4 text-gold">
          <SocialIcon type="instagram" />
          <SocialIcon type="facebook" />
          <SocialIcon type="tiktok" />
        </div>
      )}
    </article>
  )
}

function Footer({ onNavigate }) {
  return (
    <footer className="bg-charcoal px-5 py-12 text-ivory md:px-10">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-8 text-center">
        <img src={logoText} alt="Lemongrass Thai Cuisine" className="w-56 brightness-0 invert" />
        <div className="flex flex-wrap justify-center gap-6">
          {pages.map((page) => (
            <button key={page.id} className="nav-link text-ivory/70" onClick={() => onNavigate(page.id)}>
              {page.label}
            </button>
          ))}
        </div>
        <p className="text-xs text-ivory/50">© 2025 Lemongrass Thai Cuisine · Ciudad de Mexico</p>
      </div>
    </footer>
  )
}

function FloatingReserve({ onNavigate }) {
  return (
    <button className="floating-reserve" onClick={() => onNavigate('contacto')}>
      Reservar
    </button>
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

function ThinContactIcon({ icon }) {
  const map = {
    clock: <><circle cx="12" cy="12" r="8" /><path d="M12 7v5l3 2" /></>,
    phone: <path d="M7 4l3 5-2 2c1.5 3 3 4.5 6 6l2-2 5 3c-.5 2-2 3-4 3C9 21 3 15 3 7c0-2 1-3.5 4-3Z" />,
    pin: <><path d="M12 21s7-6 7-12a7 7 0 0 0-14 0c0 6 7 12 7 12Z" /><circle cx="12" cy="9" r="2" /></>,
  }
  return (
    <svg className="mt-1 h-6 w-6 shrink-0 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
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
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
      {paths[type]}
    </svg>
  )
}
