import Image from "next/image";
import Header from "@/components/Header/Header";
import HeroCarousal from "@/components/Hero/HeroCarousal";
import ShopTheLook from "@/components/Hero/ShopTheLook";
import PicAMood from "@/components/Hero/PickAMood";
import Collections from "@/components/Hero/Collections";





export default function Home() {
  return (
    <>
   
    <Header />
    <HeroCarousal />
    <ShopTheLook />
    <PicAMood />
    <Collections />
    
     </>
  );
}
