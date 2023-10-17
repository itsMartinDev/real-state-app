
import { DM_Serif_Display, Montserrat, Mrs_Saint_Delafield } from 'next/font/google'



export const montserrat = Montserrat({
   subsets : ['latin'],
   variable: '--font-montserrat',
   weight : ['400', '500', '700', '800']
 })
 
export const dm_serif_display = DM_Serif_Display({
   subsets : ['latin'],
   variable: '--font-dm-serif-display',
   weight : ['400']
 })
 

 export const mrs_saint_delafield = Mrs_Saint_Delafield({
   subsets : ['latin'],
   variable: '--font-mrs-saint-delafield',
   weight : ['400']
 })