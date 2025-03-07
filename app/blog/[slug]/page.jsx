import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { CalendarIcon, ClockIcon, ArrowLeftIcon, ShareIcon } from '@heroicons/react/24/outline'
import { getPostBySlug, getAllPosts } from '../../lib/blog'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'ページが見つかりません - pianopia',
      description: '指定されたブログ記事は存在しません。',
    };
  }
  
  return {
    title: `${post.title} - pianopia`,
    description: post.description,
  };
}

export default function BlogPost({ params }) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }
  
  // Markdownをシンプルに表示するための関数
  const renderMarkdown = (content) => {
    // 行ごとに分割
    const lines = content.split('\n');
    
    return lines.map((line, index) => {
      // 見出し
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{line.substring(2)}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold mt-6 mb-3">{line.substring(3)}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-bold mt-5 mb-2">{line.substring(4)}</h3>;
      }
      
      // リスト
      if (line.startsWith('- ')) {
        return <li key={index} className="ml-6 mb-2">{line.substring(2)}</li>;
      }
      
      // 空行
      if (line.trim() === '') {
        return <br key={index} />;
      }
      
      // 通常のテキスト
      return <p key={index} className="mb-4">{line}</p>;
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        <div className="bg-white dark:bg-gray-900 py-12 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <Link href="/blog" className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 mb-8">
                <ArrowLeftIcon className="mr-2 h-4 w-4" />
                ブログ一覧に戻る
              </Link>

              <article className="prose-custom">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">{post.title}</h1>
                
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-4 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
                  <CalendarIcon className="mr-1.5 h-4 w-4 flex-shrink-0" />
                  <time dateTime={post.date}>{post.date}</time>
                  <span className="mx-2">•</span>
                  <ClockIcon className="mr-1.5 h-4 w-4 flex-shrink-0" />
                  <span>{post.readTime}</span>
                  <span className="mx-2">•</span>
                  <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900 px-3 py-0.5 text-sm font-medium text-blue-800 dark:text-blue-200">
                    {post.category}
                  </span>
                </div>
                
                <div className="prose prose-lg prose-blue dark:prose-invert max-w-none">
                  {renderMarkdown(post.content)}
                </div>
                
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">この記事をシェアする</h3>
                    </div>
                    <div className="flex space-x-4">
                      <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                        <span className="sr-only">Twitter</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                        <span className="sr-only">Facebook</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M19.7 3H4.3A1.3 1.3 0 003 4.3v15.4A1.3 1.3 0 004.3 21h15.4a1.3 1.3 0 001.3-1.3V4.3A1.3 1.3 0 0019.7 3zM8.339 18.338H5.667v-8.59h2.672v8.59zM7.004 8.574a1.548 1.548 0 11-.002-3.096 1.548 1.548 0 01.002 3.096zm11.335 9.764H15.67v-4.177c0-.996-.017-2.278-1.387-2.278-1.389 0-1.601 1.086-1.601 2.206v4.249h-2.667v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 