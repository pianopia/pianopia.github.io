import Link from 'next/link';
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';

const posts = [
  {
    slug: 'first-post',
    title: '最初のブログ記事',
    date: '2023-01-01',
    description: 'これは、NextJSとNextraを使った新しいブログの最初の記事です。これからここで技術的な内容や日々の活動について書いていきます。',
    readTime: '3分',
    category: '技術',
  },
  {
    slug: 'second-post',
    title: 'モバイルアプリ開発のベストプラクティス',
    date: '2023-02-15',
    description: 'モバイルアプリ開発において重要なベストプラクティスについて解説します。UI/UXデザイン、パフォーマンス最適化、セキュリティ対策など。',
    readTime: '5分',
    category: 'モバイル開発',
  },
  {
    slug: 'third-post',
    title: 'Next.jsとTailwind CSSでモダンなWebサイトを構築する',
    date: '2023-03-20',
    description: 'Next.jsとTailwind CSSを組み合わせて、高速でモダンなWebサイトを構築する方法を紹介します。',
    readTime: '4分',
    category: 'Web開発',
  },
];

export default function BlogPreview() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-24">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">最新のブログ記事</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            技術的な記事や日々の活動について書いています。
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.slug} className="card flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="p-6 flex-grow">
                <div className="flex items-center">
                  <span className="inline-block rounded-full bg-blue-100 dark:bg-blue-900 px-3 py-1 text-xs font-semibold text-blue-800 dark:text-blue-200">
                    {post.category}
                  </span>
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="mt-3 text-xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                    {post.title}
                  </h3>
                </Link>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-400 line-clamp-3">{post.description}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <CalendarIcon className="mr-1.5 h-4 w-4 flex-shrink-0" />
                  <time dateTime={post.date}>{post.date}</time>
                  <span className="mx-2">•</span>
                  <ClockIcon className="mr-1.5 h-4 w-4 flex-shrink-0" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="btn-primary"
          >
            すべての記事を読む
          </Link>
        </div>
      </div>
    </div>
  );
} 