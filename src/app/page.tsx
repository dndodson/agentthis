import Hero from '../components/sections/hero'
import Features from '../components/sections/features'
import { SignupFormSection } from '../components/sections/email-signup'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <SignupFormSection />
    </>
  )
}
