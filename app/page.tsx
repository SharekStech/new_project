import About from "@/components/About";
import Navbar from "@/components/Navbar";
import ProductDetails from "@/components/ProductDetails";
import Project from "@/components/Project";

export default function page() {
  return (
    <main className=" justify-center bg-amber-100">
      <Navbar />
      <About />
      <Project/>
      <ProductDetails/> 
    </main>
  );
}
