import { motion } from 'framer-motion'
import logo from '../assets/lemongrass-logo.svg'

export default function Hero({ onMenuClick }) {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 py-10">
      <div className="absolute inset-0 hero-food" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,10,10,.08),rgba(10,10,10,.82)_62%,#0a0a0a_100%)]" />
      <div className="absolute inset-x-6 top-6 h-px bg-gold-line opacity-80" />
      <div className="absolute inset-x-6 bottom-8 h-px bg-gold-line opacity-50" />

      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex w-full max-w-sm flex-col items-center text-center sm:max-w-md"
      >
        <img
          src={logo}
          alt="Lemongrass Thai Cuisine"
          className="w-56 rounded-full shadow-glow ring-1 ring-gold/25 sm:w-72"
        />
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="mt-7 text-[0.72rem] font-semibold uppercase tracking-[0.42em] text-gold"
        >
          Thai cuisine
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.34, duration: 0.65 }}
          className="mt-3 font-serif text-5xl font-semibold leading-[0.95] text-cream sm:text-7xl"
        >
          Lemongrass
        </motion.h1>
        <motion.button
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          whileTap={{ scale: 0.96 }}
          transition={{ delay: 0.48, duration: 0.55 }}
          onClick={onMenuClick}
          className="mt-9 rounded-full border border-gold/60 bg-gold px-8 py-4 text-sm font-extrabold uppercase tracking-[0.22em] text-ink shadow-glow transition hover:bg-[#e2c253] focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ink"
        >
          Ver Menu
        </motion.button>
      </motion.div>
    </section>
  )
}
