import Link from 'next/link'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CalendarIcon, ClockIcon, TagIcon } from '@heroicons/react/24/outline'
import { getAllPosts, getAllCategories } from '../../lib/blog'

export const metadata = {
  title: 'ブログ - pianopia',
  description: '技術的な記事や日々の活動について',
}

export default function Blog() {
  const posts = getAllPosts();
  const categories = [
    { name: 'すべて', count: posts.length },
    ...getAllCategories()
  ];

  // 読了時間の計算（単純な推定）
  const calculateReadTime = (content) => {
    const wordsPerMinute = 200; // 1分あたりの単語数
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes}分`;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        <div className="bg-white dark:bg-gray-900 py-12 md:py-24">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">ブログ</h1>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
                技術的な記事や日々の活動について書いています。
              </p>
            </div>

            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-3/4 lg:pr-12">
                <div className="space-y-10">
                  {posts.map((post) => (
                    <article key={post.slug} className="card overflow-hidden">
                      <div className="p-6">
                        <div className="flex items-center mb-2">
                          <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900 px-3 py-0.5 text-sm font-medium text-blue-800 dark:text-blue-200">
                            <TagIcon className="mr-1 h-4 w-4" />
                            {post.category}
                          </span>
                        </div>
                        <Link href={`/blog/${post.slug}`}>
                          <h2 className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                            {post.title}
                          </h2>
                        </Link>
                        <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <CalendarIcon className="mr-1.5 h-4 w-4 flex-shrink-0" />
                          <time dateTime={post.date}>{post.date}</time>
                          <span className="mx-2">•</span>
                          <ClockIcon className="mr-1.5 h-4 w-4 flex-shrink-0" />
                          <span>{calculateReadTime(post.content)}</span>
                        </div>
                        <p className="mt-3 text-base text-gray-500 dark:text-gray-400">{post.description}</p>
                        <div className="mt-4">
                          <Link
                            href={`/blog/${post.slug}`}
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 font-medium"
                          >
                            続きを読む →
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="lg:w-1/4 mt-10 lg:mt-0">
                <div className="sticky top-24">
                  <div className="card overflow-hidden">
                    <div className="p-6">
                      <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">カテゴリー</h2>
                      <nav className="space-y-2">
                        {categories.map((category) => (
                          <a
                            key={category.name}
                            href="#"
                            className="flex items-center justify-between px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                          >
                            <span className="text-gray-700 dark:text-gray-300">{category.name}</span>
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-700 text-xs text-gray-600 dark:text-gray-400">
                              {category.count}
                            </span>
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>

                  <div className="card overflow-hidden mt-6">
                    <div className="p-6">
                      <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">ブログを購読する</h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        新しい記事が公開されたときに通知を受け取りましょう。
                      </p>
                      <form className="mt-2">
                        <div>
                          <label htmlFor="email-address" className="sr-only">
                            メールアドレス
                          </label>
                          <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white sm:text-sm"
                            placeholder="メールアドレス"
                          />
                        </div>
                        <div className="mt-2">
                          <button
                            type="submit"
                            className="w-full btn-primary"
                          >
                            購読する
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 