import HowToGetStarted from "@/components/HowToGetStarted/HowToGetStarted";
import StartGrowing from "@/components/Start-Growing/StartGrowing";
import WhyChoose from "@/components/customer-trust/WhyChoose";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/heroSection/Hero";
import HowItWork from "@/components/how-it-works/HowItWork";
import Performance from "@/components/performance/Performance";
import PermotionThatWork from "@/components/permotion/PermotionThatWork";
import SliderComponent from "@/components/slider/SliderComponent";

export default function Home() {
  return (
    <main className={`bg-[#101010]`}>
      <Hero />
      <HowToGetStarted />
      <WhyChoose />
      <PermotionThatWork />

      <HowItWork />
      <SliderComponent />
      <Performance />
      <StartGrowing />
      <Footer />
    </main>
  );
}
