import AboutSection from "../components/home/AboutSection";
import HeroSection from "../components/home/HeroSection";
import NewsEvents from "../components/home/NewsEvents";
import PrincipalMessage from "../components/home/PrincipalsNote";
import QuickInfo from "../components/home/QuickInfo";
import StudentLife from "../components/home/StudentLife";
import TrustStrip from "../components/home/TrustStripmSection";
import WhyChooseUs from "../components/home/WhyChooseUs";

export default function Index() {
  return (
    <>
      {/* <SchoolHero /> */}
      <HeroSection />
      <QuickInfo />
      <AboutSection isHomePage={true} />
      <TrustStrip />
      <PrincipalMessage />
      <WhyChooseUs />
      {/* <AcademicPrograms /> */}
      <NewsEvents />
      {/* <FacilitiesSection /> */}
      <StudentLife />
      {/* <GallerySection /> */}
    </>
  );
}
