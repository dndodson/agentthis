import Hero from './hero'
import Navbar from './navbar'
import Features from './features'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <SignupFormSection />
      <Footer />
    </main>
  )
}

// Placeholder components for future implementation
const SignupFormSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Learn more</h2>
    </div>
  </section>
)

const Footer = () => (
  <footer className="py-8 bg-gray-800 text-white">
    <div className="container mx-auto text-center">
      <p>© 2024 AgentThis. All rights reserved.</p>
    </div>
  </footer>
)
