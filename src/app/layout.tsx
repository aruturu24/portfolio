import './globals.scss'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'] })

export const metadata = {
  title: 'Arthur Gabryel Portfolio',
  description: 'Arthur Gabryel is a passionate developer looking for a opportunity to show your skills.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
