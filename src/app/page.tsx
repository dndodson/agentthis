import Hero from './hero'
import Navbar from './navbar'
import Features from './features'
import { SignupFormSection } from './signup'
import { Footer } from './footer'

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
