import Contact from '@/components/Contact'
import LifeAmongParksCover from '@/components/LifeAmongParksCover'
import CypressParkResidencesCover from '@/components/CypressParkResidencesCover'
import Footer from '@/components/Footer'
import ElegantViewsCover from '@/components/ElegantViewsCover'
import Hero from '@/components/Hero'
import MakeYourChoiceCover from '@/components/MakeYourChoiceCover'
import SleekAbodesCover from '@/components/SleekAbodesCover'
import CypressParkCover from '@/components/CypressParkCover'
import ScrollWrapper from '@/components/ScrollWrapper'

import Image from 'next/image'

export default function Home() {
  return (
    <main >
      <Hero></Hero>

      <ElegantViewsCover></ElegantViewsCover>

      <LifeAmongParksCover></LifeAmongParksCover>

      <CypressParkCover></CypressParkCover>

      <CypressParkResidencesCover></CypressParkResidencesCover>

      <SleekAbodesCover></SleekAbodesCover>

      <MakeYourChoiceCover></MakeYourChoiceCover>

      <Contact></Contact>
      <Footer></Footer>
    </main>
  )
}
