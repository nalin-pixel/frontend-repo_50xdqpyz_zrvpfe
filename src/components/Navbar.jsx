import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-amber-400 to-emerald-500" />
            <span className="font-semibold text-gray-900">Odyssey DARES</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#showcase" className="hover:text-gray-900">Showcase</a>
            <a href="#about" className="hover:text-gray-900">About</a>
          </nav>

          <div className="hidden md:block">
            <a
              href="#get-started"
              className="inline-flex items-center rounded-md bg-emerald-600 px-4 py-2 text-white font-medium hover:bg-emerald-700"
            >
              Get started
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#features" className="block px-2 py-2 rounded hover:bg-gray-100">Features</a>
            <a href="#showcase" className="block px-2 py-2 rounded hover:bg-gray-100">Showcase</a>
            <a href="#about" className="block px-2 py-2 rounded hover:bg-gray-100">About</a>
            <a href="#get-started" className="block px-2 py-2 rounded bg-emerald-600 text-white">Get started</a>
          </div>
        )}
      </div>
    </header>
  )
}
