import Image from "next/image";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import ShopByCategory from "./components/ShopByCategory";
import ShopAir from "./components/ShopAir";


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

</section>

<section className="bg-[#1F1F21]">
  <ShopByCategory/>
</section>

<section className="bg-[#1F1F21]">
  
</section>
</div>

  );
}
