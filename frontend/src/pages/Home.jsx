import Navbar from '../components/navbar'
import Hero from '../components/Hero'
import FeatureStrip from '../components/FeatureStrip'
import AboutSection from '../components/AboutSection'
import MenuSection from '../components/MenuSection'
import TestimonialSection from '../components/TestimonialSection'
import Footer from '../components/Footer'

function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeatureStrip />
      <AboutSection />
      <MenuSection />
      <TestimonialSection />
      <Footer />
    </main>
  )
}

export default Home