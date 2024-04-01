import Hero from "@/app/components/Hero/page";
import Specs from "@/app/components/Specs/page";
import Navbar from "@/app/components/navbar/page";
import Sponsor from "@/app/components/sponsor/page";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Sponsor />
      <Specs />
    </>
  );
};

export default LandingPage;
