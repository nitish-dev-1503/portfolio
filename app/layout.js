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
      <body className={` min-h-screen p-4 flex flex-col m-auto gap-6 selection:bg-jet dark:selection:bg-white_smoke bg-white_smoke dark:bg-jet text-jet dark:text-white_smoke max-w-3xl ${beVietnamPro.className}`}>
        <Providers >
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
