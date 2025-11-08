import { Star } from 'lucide-react'

const cards = [
  {
    title: 'Rooftop portfolio scan',
    image:
      'https://images.unsplash.com/photo-1558442074-3c0041429d5b?q=80&w=1600&auto=format&fit=crop',
    score: 88,
  },
  {
    title: 'Community solar siting',
    image:
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1600&auto=format&fit=crop',
    score: 91,
  },
  {
    title: 'Wind resource screening',
    image:
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1600&auto=format&fit=crop',
    score: 85,
  },
]

export default function Showcase() {
  return (
    <section id="showcase" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Use cases</h2>
            <p className="mt-2 text-gray-600">Examples of how DARES accelerates development.</p>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-amber-500">
            <Star className="h-5 w-5 fill-amber-400" />
            <Star className="h-5 w-5 fill-amber-400" />
            <Star className="h-5 w-5 fill-amber-400" />
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <article key={c.title} className="group rounded-xl overflow-hidden border bg-white hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={c.image} alt={c.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">{c.title}</h3>
                  <span className="inline-flex items-center justify-center text-sm font-semibold text-emerald-700 bg-emerald-100 rounded-full px-2.5 py-1">
                    Score {c.score}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
