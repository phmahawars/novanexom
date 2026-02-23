'use client';
import React from 'react'
import { Breadcrumb } from '../components/includes/Breadcrumb';
import { About } from '../components/parts/About';
import { Testimonials } from '../components/parts/Testimonial';
import { Blog } from '../components/parts/Blog';
import { Cta } from '../components/parts/Cta';
import WhatWeOffer from '../components/parts/WhatWeOffer';
import OurVission from '../components/parts/OurVission';


export default function AboutPage() {
  return (
    <>
    <Breadcrumb title={'About Us'} />
    <About />
    <WhatWeOffer />
    <OurVission />
    <Testimonials />
    <Blog />
    <Cta />
    </>
  )
}
