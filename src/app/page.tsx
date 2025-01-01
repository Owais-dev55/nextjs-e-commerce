import Navbar from "@/Component/Navbar/Navbar";
import Hero from "../Component/Hero/Hero";
import EditorPick from "../Component/Editor/EditorPick";
import Bestseller from "@/Component/Bestseller/Bestseller";
import Footer from "@/Component/Footer/Footer";
import Pickpages from "@/Component/Pickpages/Pickpages";
import FeaturedProducts from "@/Component/FeaturedProducts/FeaturedProducts";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <EditorPick/>
    <Bestseller/>
    <Pickpages/>
    <FeaturedProducts/>
    <Footer backgroundColor="#FAFAFA"/>
    </>
  );
}
