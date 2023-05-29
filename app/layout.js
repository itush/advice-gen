import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Frontend Mentor | Advice generator app',
  description: 'Created by Tushar Biswas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-DarkBlue'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
