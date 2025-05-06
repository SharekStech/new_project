import { url } from "inspector";
import Header from "./Header";

export default function Navbar() {
  return (
    <div className="relative w-full h-[854px]  max-w-7xl mx-auto">
      
      <img className="relative top-0 left-0 w-full  object-cover z-0"
        src="/image/slider2.jpg"
        alt="Slider 1"
      />
      <div className="absolute top-0 left-0 w-full z-10">
        <Header />
      </div>    
      

      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold z-10">
        Let's make software together!
      </h1>
    </div>
  );
}

