
import Bemorlar from '@/components/home/Bemorlar'
import HeroCard from '@/components/home/Hero'
import HeroDetail from '@/components/home/HeroDetail'
import Shifokorlar from '@/components/home/Shifokorlar'
import React from 'react'

export default function page() {
  return (
    <div>
      <HeroCard />
      <HeroDetail />
      <Bemorlar />
      <Shifokorlar />
    </div>
  )
}
