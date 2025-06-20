import Image from "next/image";
import styles from "./page.module.css";
import { Hero } from "@/components/Hero";
import { Differences } from "@/components/Differences";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { FAQs } from "@/components/FAQs";
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
