import './globals.css'
import type { Metadata } from 'next'
import { Maven_Pro } from 'next/font/google'
import Navbar from '@/component/views/Navbar'
import Wrapper from '@/component/shared/Wrapper'
import Footer from '@/component/views/Footer'

const inter = Maven_Pro({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700", "800", "900"]
})

export const metadata: Metadata = {
  title: 'Dine Market',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Wrapper>
          <Navbar />
          {children}
          /*<Footer />
        </Wrapper>
      </body>
    </html>
  );
}
