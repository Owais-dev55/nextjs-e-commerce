import Navbar from "@/Component/Navbar/Navbar";
import Hero from "../Component/Hero/Hero";
import EditorPick from "../Component/Editor/EditorPick";
import Bestseller from "@/Component/Bestseller/Bestseller";
import Footer from "@/Component/Footer/Footer";
import Pickpages from "@/Component/Pickpages/Pickpages";
import PremiumProductShowcase from "@/Component/Pickpages/Pickpages0";

export default function Home() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <EditorPick/>
    <Bestseller/>
    <PremiumProductShowcase />
    <Pickpages/>
    <Footer backgroundColor="#FAFAFA"/>
    </div>
  );
}
