'use client';
import { Service } from "../components/parts/Service";
import { Project } from "../components/parts/Project";
import { Pricing } from "../components/parts/Pricing";
import { About } from "../components/parts/About";
import { Blog } from "../components/parts/Blog";
import { Cta } from "../components/parts/Cta";
import { Testimonials } from "../components/parts/Testimonial";
import Intro from "../components/parts/Intro";
import AboutNew from "../components/parts/AboutNew";
import ImageSection from "../components/ImageSection";

export default function Home() {
  return (
   <>
    <Intro />
    <AboutNew />
    <ImageSection />
    <Service />
    <Project />
    <Pricing />
    <About />
    <Testimonials />
    <Blog />
    <Cta />
   </>
  );
}
