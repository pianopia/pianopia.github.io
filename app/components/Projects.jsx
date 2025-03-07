import Link from 'next/link';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    title: 'プロジェクト1',
    description: 'モバイルアプリケーションの開発プロジェクト。Kotlinを使用したAndroidアプリ。',
    imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'モバイルアプリ',
    date: '2023年1月',
    link: '#',
  },
  {
    title: 'プロジェクト2',
    description: 'Next.jsとTailwind CSSを使用したWebアプリケーション。レスポンシブデザインとモダンなUI/UX。',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Webアプリ',
    date: '2023年3月',
    link: '#',
  },
  {
    title: 'プロジェクト3',
    description: 'Unityを使用した3Dゲーム開発。キャラクターモデリングからプログラミングまで担当。',
    imageUrl: 'https://images.unsplash.com/photo-1556438064-2d7646166914?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'ゲーム開発',
    date: '2023年6月',
    link: '#',
  },
];

export default function Projects() {
  return (
    <div className="bg-white dark:bg-gray-900 py-24">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">プロジェクト</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            これまでに手がけた主なプロジェクトをご紹介します。
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="card overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center">
                  <span className="inline-block rounded-full bg-blue-100 dark:bg-blue-900 px-3 py-1 text-xs font-semibold text-blue-800 dark:text-blue-200">
                    {project.category}
                  </span>
                  <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">{project.date}</span>
                </div>
                <h3 className="mt-3 text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-400">{project.description}</p>
                <div className="mt-4">
                  <a
                    href={project.link}
                    className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300"
                  >
                    詳細を見る
                    <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="btn-primary"
          >
            すべてのプロジェクトを見る
          </Link>
        </div>
      </div>
    </div>
  );
} 