import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import TestiSection from './components/TestiSection'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'
import svg1 from './images/bg-tablet-pattern.svg'

const App = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${svg1})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top -160px right -10%',
      }}
    >
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <TestiSection />
      <CtaSection />
      <Footer />
    </div>
  )
}

export default App
