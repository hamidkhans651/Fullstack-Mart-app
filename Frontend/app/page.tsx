import Image from "next/image";
import LandingPage from "./components/LandingPage";
import ShopByCategory from "./components/ShopByCategory";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import About from "./about/About";


export default function Home() {
  return (
   <div>
<nav>
  <Navbar/>
</nav>

<section id="landingPage" className="text-white">
<LandingPage/>
</section>


<section className="bg-[#1F1F21]">
  <ShopByCategory/>
</section>

<section className="">
  <Footer/>
</section>


<section>

  <About/>

</section>
</div>

  );
}
