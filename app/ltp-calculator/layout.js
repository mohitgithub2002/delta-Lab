import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LTP Calculator | Delta Lab',
  description: 'Learn to trade safe with Delta Lab',
}


export default function LTPClaculatorLayout({ children }) {
    return <section>{children}</section>
}