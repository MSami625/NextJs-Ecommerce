import Image from "next/image";
import Header from "@/components/Header/Header";
import HeroCarousal from "@/components/Hero/HeroCarousal";
import ShopTheLook from "@/components/Hero/ShopTheLook";
import PicAMood from "@/components/Hero/PickAMood";
import Collections from "@/components/Hero/Collections";
import NewForYou from "@/components/Hero/NewForYou";
import Gallery from "@/components/Hero/Gallery";
import BestSellers from "@/components/Hero/BestSellers";
import WhyChooseUs from "@/components/Hero/WhyChooseUs";
import Footer from "@/components/Hero/Footer";





export default function Home() {
  return (
    <>
   
    <Header />
    <HeroCarousal />
    <ShopTheLook />
    <PicAMood />
    <Collections />
    <NewForYou />
    <BestSellers />
    <Gallery />
    <WhyChooseUs />
    <Footer />
    
     </>
  );
}
