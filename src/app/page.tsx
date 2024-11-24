"use client";
import { Provider } from "react-redux";
import store from "@/store/store"; 
import HeroCarousal from "@/components/Hero/HeroCarousal";
import ShopTheLook from "@/components/Hero/ShopTheLook";
import PicAMood from "@/components/Hero/PickAMood";
import Collections from "@/components/Hero/Collections";
import NewForYou from "@/components/Hero/NewForYou";
import BestSellers from "@/components/Hero/BestSellers";
import Gallery from "@/components/Hero/Gallery";
import WhyChooseUs from "@/components/Hero/WhyChooseUs";

export default function Home() {
  return (
    <Provider store={store}>
      <HeroCarousal />
      <ShopTheLook />
      <PicAMood />
      <Collections />
      <NewForYou />
      <BestSellers />
      <Gallery />
      <WhyChooseUs />
    </Provider>
  );
}
