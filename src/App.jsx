import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/footer'
import Gallery from './components/Gallery'
import Home from './components/Home'
import Services from './components/Services'
import Certificate from './components/Certificate'
import Navbar from './components/Navbar'
import Logo from "./components/logo";

function App() {


  return (
    <>
      <Navbar />
      {/* <Home />
      <About />
      <Services />
      <Certificate />
      <Gallery />
      <Contact /> */}
      <Routes>
        <Route path="/" element={<Home />} />
          {/* <Route path="logo" element={<Logo />} /> */}
        {/* </Route> */}
          
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
