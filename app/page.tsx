import Header from "@/components/header"
import Hero from "@/components/hero"
import Fleet from "@/components/fleet"
import Pricing from "@/components/pricing"
import Destinations from "@/components/destinations"
import Testimonials from "@/components/testimonials"
import Booking from "@/components/booking"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Fleet />
      <Pricing />
      <Destinations />
      <Testimonials />
      <Booking />
      <Footer />
    </main>
  )
}
