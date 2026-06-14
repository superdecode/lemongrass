import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function MenuTabs({ categories, onSelectDish }) {
  const [activeId, setActiveId] = useState(categories[0]?.id)
  const activeCategory = categories.find((category) => category.id === activeId)

  return (
    <div className="mx-auto mt-10 max-w-5xl">
      <div className="sticky top-0 z-20 -mx-4 border-y border-gold/15 bg-ink/88 px-4 py-3 backdrop-blur-xl sm:mx-0 sm:rounded-full sm:border">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {categories.map((category) => {
            const isActive = category.id === activeId
            return (
              <button
                key={category.id}
                onClick={() => setActiveId(category.id)}
                className={`relative min-w-fit rounded-full px-5 py-3 text-sm font-bold transition ${
                  isActive ? 'text-ink' : 'text-cream/80 hover:text-cream'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-tab"
                    className="absolute inset-0 rounded-full bg-gold"
                    transition={{ type: 'spring', stiffness: 520, damping: 38 }}
                  />
                )}
                <span className="relative">{category.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.16 }}
          className="mt-7"
        >
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-gold">
                {activeCategory.eyebrow}
              </p>
              <h3 className="mt-1 font-serif text-3xl font-semibold text-cream">
                {activeCategory.label}
              </h3>
            </div>
            <span className="rounded-full border border-gold/25 px-3 py-1 text-xs text-smoke">
              {activeCategory.items.length} platillos
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {activeCategory.items.map((dish, index) => (
              <motion.button
                key={dish.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.025, duration: 0.22 }}
                onClick={() => onSelectDish({ ...dish, category: activeCategory.label })}
                className="group rounded-lg border border-gold/14 bg-cream/[0.035] p-4 text-left transition hover:-translate-y-0.5 hover:border-gold/45 hover:bg-gold/[0.08] focus:outline-none focus:ring-2 focus:ring-gold/80"
              >
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-serif text-2xl font-semibold leading-6 text-cream">
                    {dish.name}
                  </h4>
                  <span className="mt-1 shrink-0 font-sans text-sm font-extrabold text-gold">
                    ${dish.price}
                  </span>
                </div>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-smoke">
                  {dish.description}
                </p>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.22em] text-gold/80">
                  Ver detalle
                </p>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
