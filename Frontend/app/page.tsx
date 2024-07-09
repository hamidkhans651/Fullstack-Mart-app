import Image from "next/image";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import ShopByCategory from "./components/ShopByCategory";
import ShopAir from "./components/HeroImages";
import HeroImages from "./components/HeroImages";
import Footer from "./components/Footer";


export default function Home() {
  return (
   <div>

<section id="Navbar">
<Navbar/>
</section>

<section id="landingPage" className="text-white">
<LandingPage/>
</section>
<section className="bg-[#1F1F21]">
<HeroImages/>
</section>

<section className="bg-[#1F1F21]">
  <ShopByCategory/>
</section>

<section className="bg-[#1F1F21]">
  <Footer/>
</section>
</div>

  );
}
