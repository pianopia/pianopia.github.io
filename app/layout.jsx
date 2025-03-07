import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'pianopia',
  description: 'Android/iOS, Web, Game Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className="h-full scroll-smooth">
      <body className={`${inter.className} antialiased text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900 h-full`}>
        {children}
      </body>
    </html>
  )
} 