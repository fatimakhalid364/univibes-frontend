import React from 'react'
import { Hero } from '@/components/services/Hero'
import { Services } from '@/components/services/Services'
import {Description} from '@/components/services/Description'
import {Future} from '@/components/services/Future'
import {Features} from '@/components/services/Features'
export default function ServicesPage() {
  return (
    <>
        <Hero />
        <Services/>
        <Description/>
        <Features />
        <Future/>
    </>
  )
}
