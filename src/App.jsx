import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
// import Footer from './components/footer'
import Gallery from './components/Gallery'
// import Home from './components/Home'
import Services from './components/Services'
import Certificate from './components/Certificate'
// import Navbar from './components/Navbar'
// import Logo from "./components/logo";
import ServiceDetail from "./components/ServiceDetail";
import HeroPage from "./components/HeroPage";
import Layout from "./Layout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HeroPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
