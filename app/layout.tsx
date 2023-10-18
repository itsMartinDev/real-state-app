import './globals.css'
import type { Metadata } from 'next'
import { montserrat, dm_serif_display, mrs_saint_delafield } from '@/app/fonts'

export const metadata: Metadata = {
  title: 'Cypress Park Residences',
  description: 'Cypress Park Residences has everything to let you enjoy yourself & the company of those you love',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"  className={`${montserrat.variable} ${dm_serif_display.variable} ${mrs_saint_delafield.variable}`}>
      <body >{children}</body>
    </html>
  )
}
