import HeroCard from '@/components/home/Hero'
import KasallarDetail from '@/components/kasallar/kasallarDetail'
import KasallikTarixi from '@/components/kasallar/KasallikTarixi'
import React from 'react'

export default function page() {
  return (
    <div>
      <HeroCard />
      <KasallarDetail />
      <KasallikTarixi />
    </div>
  )
}
