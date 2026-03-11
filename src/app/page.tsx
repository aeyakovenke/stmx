import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AgentSlider from '@/components/AgentSlider'
import UseCases from '@/components/UseCases'
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
      <AgentSlider />
      <UseCases />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <DemoForm />
      <Footer />
    </main>
  )
}
