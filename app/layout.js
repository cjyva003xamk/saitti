import './globals.css'
import { Ysabeau_SC } from 'next/font/google'

const ysabeau = Ysabeau_SC({ subsets: ['latin'],
 display:'swap',
weight:['100','300','400','500','700','900'] })

export const metadata = {
  title: 'Web dev',
  description: 'Parallax and particles',
  creator:'JV',
  openGraph:{
    title:'Web dev',
    description:'Nextjs13, tailwind etc..'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth '>
      <body className={ysabeau.className}>{children}</body>
    </html>
  )
}
