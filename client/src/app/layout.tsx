"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import Header from './Header'
import SubMenu from './SubMenu'
import { usePathname, useRouter } from 'next/navigation'
import Footer from './Footer'


const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  console.log(pathname)
  if (pathname === "/login") {
    return (<html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>)
  }
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <SubMenu />
        {children}
        <Footer />
      </body>
    </html>
  )
}
