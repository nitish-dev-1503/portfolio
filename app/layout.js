import { Be_Vietnam_Pro } from 'next/font/google'
import './globals.css'

import Footer from './components/footer'
import Navbar from './components/navbar'
import { Providers } from './components/providers'

const beVietnamPro = Be_Vietnam_Pro({ weight: ['300', '400', '600', '700'], subsets: ['latin'] })

export const metadata = {
  title: 'Nitish Sharma',
  description: 'Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` selection:bg-midnight_black dark:selection:bg-whisper_white bg-whisper_white dark:bg-midnight_black text-midnight_black dark:text-whisper_white min-h-screen ${beVietnamPro.className}`}>
        <Providers >
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
