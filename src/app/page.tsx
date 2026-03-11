import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AgentCards from '@/components/AgentCards'
import HowItWorks from '@/components/HowItWorks'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import DemoForm from '@/components/DemoForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Header />
      <Hero />
      <AgentCards />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <DemoForm />
      <Footer />
    </main>
  )
}
