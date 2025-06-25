
import { Hero } from "@/components/home/Hero";
import { Differences } from "@/components/home/Differences";
import { Services } from "@/components/home/Services";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQs } from "@/components/home/FAQs";

export default function Home() {
  return (
    <>
      <Hero/>
      <Differences/>
      <Services/>
      <Testimonials/>
      <FAQs/>
    </>
  );
}
