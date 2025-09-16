import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import FloatingContact from "./components/SubComponent/FloatingContact";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

function Layout() {
  return (
    <>
      <FloatingContact/>
      <Header/>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
