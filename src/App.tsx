import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Training from './components/Training';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Training />
        <Reviews />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
