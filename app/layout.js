import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@components/navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Delta Lab',
  description: 'Learn to trade safe with Delta Lab',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <div className=" bg-neutral-200 dark:bg-neutral-700">
        <Navbar />
        {children}
      </div>
      
        </body>
    </html>
  )
}
