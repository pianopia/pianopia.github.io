import Link from 'next/link'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export const metadata = {
  title: 'ページが見つかりません - pianopia',
  description: 'お探しのページは見つかりませんでした。',
}

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <h1 className="text-6xl font-extrabold text-gray-900 dark:text-white">404</h1>
          <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">ページが見つかりません</p>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">お探しのページは存在しないか、移動した可能性があります。</p>
          <div className="mt-8">
            <Link href="/" className="btn-primary">
              ホームに戻る
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 