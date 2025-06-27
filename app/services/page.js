import React from 'react'
import { Hero } from '@/components/servicesPage/Hero'
import { Services } from '@/components/servicesPage/Services'
import {Description} from '@/components/servicesPage/Description'
import {Future} from '@/components/servicesPage/Future'
export default function ServicesPage() {
  return (
    <>
        <Hero />
        <Services/>
        <Description/>
        <Future/>
    </>
  )
}
