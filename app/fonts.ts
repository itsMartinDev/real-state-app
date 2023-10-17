
import { DM_Serif_Display, Montserrat, Alex_Brush } from 'next/font/google'



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
 

 export const alex_brush = Alex_Brush({
   subsets : ['latin'],
   variable: '--font-alex-brush',
   weight : ['400']
 })