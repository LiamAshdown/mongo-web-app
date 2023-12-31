import './globals.css'

import { Montserrat } from 'next/font/google'
import Providers from '@/app/providers/provider'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
