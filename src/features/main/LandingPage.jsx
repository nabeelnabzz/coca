import MaxWidthContainer from "../../containers/MaxWidthContainer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function LandingPage() {
  return (
    <MaxWidthContainer>
      <Navbar />
      <HeroSection />
    </MaxWidthContainer>
  );
}

export default LandingPage;
