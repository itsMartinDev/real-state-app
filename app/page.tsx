import Contact from '@/components/Contact'
import Cover from '@/components/Cover'
import CoverResidences from '@/components/CoverResidences'
import Footer from '@/components/Footer'
import Gallery from '@/components/Gallery'
import Hero from '@/components/Hero'
import MakeYourChoice from '@/components/MakeYourChoice'
import ModernVillaCover from '@/components/ModernVillaCover'
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
      <ModernVillaCover></ModernVillaCover>
      <MakeYourChoice></MakeYourChoice>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  )
}
