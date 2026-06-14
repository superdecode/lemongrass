import { motion } from 'framer-motion'

export default function DishModal({ dish, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-40 flex items-end bg-black/70 p-3 backdrop-blur-sm sm:items-center sm:justify-center"
      onClick={onClose}
    >
      <motion.article
        initial={{ y: 80, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 80, opacity: 0, scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 360, damping: 34 }}
        onClick={(event) => event.stopPropagation()}
        className="w-full max-w-lg rounded-t-3xl border border-gold/25 bg-[#11100e] p-6 shadow-sheet sm:rounded-3xl"
      >
        <div className="mx-auto mb-5 h-1 w-12 rounded-full bg-gold/50 sm:hidden" />
        <p className="text-[0.66rem] font-bold uppercase tracking-[0.34em] text-gold">
          {dish.category}
        </p>
        <div className="mt-3 flex items-start justify-between gap-5">
          <h3 className="font-serif text-4xl font-semibold leading-none text-cream">
            {dish.name}
          </h3>
          <span className="rounded-full bg-gold px-4 py-2 text-sm font-black text-ink">
            ${dish.price}
          </span>
        </div>
        <p className="mt-5 text-base leading-7 text-cream/86">{dish.description}</p>
        <p className="mt-4 text-sm leading-7 text-smoke">{dish.detail}</p>

        {dish.options && (
          <div className="mt-5 grid grid-cols-2 gap-2">
            {dish.options.map((option) => (
              <div
                key={option.label}
                className="rounded-lg border border-gold/15 bg-black/25 px-3 py-3"
              >
                <p className="text-sm font-bold text-cream">{option.label}</p>
                <p className="text-sm text-gold">${option.price}</p>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={onClose}
          className="mt-7 w-full rounded-full border border-gold/45 px-5 py-4 text-sm font-extrabold uppercase tracking-[0.22em] text-gold transition hover:bg-gold hover:text-ink"
        >
          Cerrar
        </button>
      </motion.article>
    </motion.div>
  )
}
