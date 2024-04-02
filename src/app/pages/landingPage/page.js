import Case from "@/app/components/Case/page";
import Hero from "@/app/components/Hero/page";
import Specs from "@/app/components/Specs/page";
import Cta from "@/app/components/cta/page";
import Footer from "@/app/components/footer/page";
import Navbar from "@/app/components/navbar/page";
import Products from "@/app/components/products/page";
import Sponsor from "@/app/components/sponsor/page";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Sponsor />
      <Specs />
      <Case />
      <Cta />
      <Products />
      <Footer />
    </>
  );
};

export default LandingPage;
