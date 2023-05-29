import './globals.css'

export const metadata = {
  title: 'Frontend Mentor | Advice generator app',
  description: 'Created by Tushar Biswas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-DarkGrayishBlue'>
      <body>{children}</body>
    </html>
  )
}
