import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Opstra Medical Group - Personalized Healthcare in Ghana',
  description: 'At Opstra Medical Group, our team of skilled physicians and nurses work together to support your health at every stage of life. We offer modern, patient-centered healthcare in Ghana.',
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
