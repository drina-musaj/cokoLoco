import './globals.css'
import type { Metadata } from 'next'
import ReduxProvider from './Provider'

export const metadata: Metadata = {
  title: 'Coko Loco',
  description: 'It’s a Coko Loco World',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
