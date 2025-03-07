import Link from 'next/link'

export const metadata = {
  title: '404 - Page Not Found',
  description: 'ページが見つかりませんでした',
}

export default function NotFound() {
  return (
    <div className="container">
      <h1>404 - ページが見つかりませんでした</h1>
      <p>お探しのページは存在しないか、移動した可能性があります。</p>
      <Link href="/">ホームに戻る</Link>
    </div>
  )
} 