import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Showcase />

        <section id="about" className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold">About DARES</h2>
            <p className="mt-3 text-gray-600">
              DARES by Odyssey delivers fast, transparent site due diligence for distributed renewable projects. Combine geospatial context, resource data, and investment-grade scoring to move from origination to decision with confidence.
            </p>
            <a
              id="get-started"
              href="#"
              className="mt-8 inline-flex items-center rounded-md bg-emerald-600 px-5 py-3 text-white font-medium hover:bg-emerald-700"
            >
              Request access
            </a>
          </div>
        </section>

        <footer className="border-t bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-gray-600">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p>© {new Date().getFullYear()} Odyssey Energy Solutions</p>
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-gray-900">Privacy</a>
                <a href="#" className="hover:text-gray-900">Terms</a>
                <a href="#" className="hover:text-gray-900">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
