import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OurTeam from "@/components/OurTeam";
import ProductDetails from "@/components/ProductDetails";
import Project from "@/components/Project";

export default function page() {
  return (
    <main className=" justify-center bg-amber-100">
      <Navbar />
      <About />
      <Project/>
      <ProductDetails/> 
      <OurTeam/>
      <Contact/>
      <Footer/>
    </main>
  );
}
