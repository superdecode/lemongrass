import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function WhatsAppOrder({ categories }) {
  const [open, setOpen] = useState(false)
  const [categoryId, setCategoryId] = useState(categories[0]?.id)
  const [dishId, setDishId] = useState(categories[0]?.items[0]?.id)
  const [quantity, setQuantity] = useState(1)
  const [notes, setNotes] = useState('')

  const activeCategory = categories.find((category) => category.id === categoryId)
  const dish = activeCategory?.items.find((item) => item.id === dishId)

  const whatsappUrl = useMemo(() => {
    const lines = [
      'Hola Lemongrass Thai Cuisine, quiero hacer un pedido:',
      '',
      `${quantity} x ${dish?.name ?? ''} - $${dish?.price ?? ''}`,
      notes ? `Notas: ${notes}` : '',
      '',
      'Me pueden confirmar disponibilidad y total, por favor.',
    ].filter(Boolean)

    return `https://wa.me/?text=${encodeURIComponent(lines.join('\n'))}`
  }, [dish, notes, quantity])

  const handleCategoryChange = (nextCategoryId) => {
    const nextCategory = categories.find((category) => category.id === nextCategoryId)
    setCategoryId(nextCategoryId)
    setDishId(nextCategory?.items[0]?.id)
  }

  return (
    <>
      <motion.button
        initial={{ y: 90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, type: 'spring', stiffness: 260, damping: 24 }}
        onClick={() => setOpen(true)}
        className="fixed inset-x-4 bottom-4 z-30 rounded-full bg-gold px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-ink shadow-glow sm:left-auto sm:right-6 sm:w-auto"
      >
        Pedir por WhatsApp
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end bg-black/70 p-3 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.aside
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', stiffness: 340, damping: 34 }}
              onClick={(event) => event.stopPropagation()}
              className="mx-auto w-full max-w-xl rounded-t-3xl border border-gold/25 bg-[#11100e] p-5 shadow-sheet"
            >
              <div className="mx-auto mb-5 h-1 w-12 rounded-full bg-gold/50" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.34em] text-gold">
                    Pedido guiado
                  </p>
                  <h3 className="mt-1 font-serif text-3xl font-semibold text-cream">
                    Arma tu mensaje
                  </h3>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-gold/25 px-3 py-1 text-sm text-gold"
                >
                  Cerrar
                </button>
              </div>

              <label className="mt-6 block text-xs font-bold uppercase tracking-[0.22em] text-smoke">
                Categoria
              </label>
              <select
                value={categoryId}
                onChange={(event) => handleCategoryChange(event.target.value)}
                className="mt-2 w-full rounded-lg border border-gold/20 bg-black/30 px-4 py-3 text-cream outline-none focus:border-gold"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.label}
                  </option>
                ))}
              </select>

              <label className="mt-4 block text-xs font-bold uppercase tracking-[0.22em] text-smoke">
                Platillo
              </label>
              <select
                value={dishId}
                onChange={(event) => setDishId(event.target.value)}
                className="mt-2 w-full rounded-lg border border-gold/20 bg-black/30 px-4 py-3 text-cream outline-none focus:border-gold"
              >
                {activeCategory?.items.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name} - ${item.price}
                  </option>
                ))}
              </select>

              <label className="mt-4 block text-xs font-bold uppercase tracking-[0.22em] text-smoke">
                Cantidad
              </label>
              <div className="mt-2 flex items-center gap-3">
                <button
                  onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                  className="h-12 w-12 rounded-full border border-gold/30 text-2xl text-gold"
                >
                  -
                </button>
                <span className="min-w-10 text-center text-xl font-black text-cream">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((value) => value + 1)}
                  className="h-12 w-12 rounded-full border border-gold/30 text-2xl text-gold"
                >
                  +
                </button>
              </div>

              <label className="mt-4 block text-xs font-bold uppercase tracking-[0.22em] text-smoke">
                Notas
              </label>
              <textarea
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                placeholder="Ej. poco picante, sin cacahuate..."
                rows={3}
                className="mt-2 w-full resize-none rounded-lg border border-gold/20 bg-black/30 px-4 py-3 text-cream outline-none placeholder:text-smoke/60 focus:border-gold"
              />

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 block rounded-full bg-gold px-5 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-ink"
              >
                Enviar pedido
              </a>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
