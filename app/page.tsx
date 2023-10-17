import Cover from '@/components/Cover'
import CoverResidences from '@/components/CoverResidences'
import Gallery from '@/components/Gallery'
import Hero from '@/components/Hero'
import ParkCover from '@/components/ParkCover'

import Image from 'next/image'

export default function Home() {
  return (
    <main >
      <Hero></Hero>
      <Gallery></Gallery>
      <Cover></Cover>
      <ParkCover></ParkCover>
      <CoverResidences></CoverResidences>
    </main>
  )
}
