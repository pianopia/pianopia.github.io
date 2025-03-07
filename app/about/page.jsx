import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { UserIcon, AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'プロフィール - pianopia',
  description: 'pianopiaのプロフィールページです。スキルや経歴について紹介しています。',
};

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        <div className="bg-white dark:bg-gray-900 py-12 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">プロフィール</h1>
              
              <div className="prose-custom">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-12">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <UserIcon className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="ml-6">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-0">自己紹介</h2>
                      <p className="text-lg text-gray-700 dark:text-gray-300">
                        プログラマーであり、クリエイターです。普段はAndroid/iOSエンジニアとして働いています。
                        それだけでなく、3Dモデル制作、音楽作曲、IllustratorやPhotoshopを使ったデザインなども行っています。
                        技術とクリエイティビティを組み合わせて、ユーザーに価値を提供することを目指しています。
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <AcademicCapIcon className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
                  スキル
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <div className="card">
                    <div className="card-body">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">プログラミング言語</h3>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center">
                          <span className="w-24 font-medium text-gray-700 dark:text-gray-300">Kotlin</span>
                          <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                          </div>
                        </li>
                        <li className="flex items-center">
                          <span className="w-24 font-medium text-gray-700 dark:text-gray-300">Swift</span>
                          <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                          </div>
                        </li>
                        <li className="flex items-center">
                          <span className="w-24 font-medium text-gray-700 dark:text-gray-300">JavaScript</span>
                          <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                          </div>
                        </li>
                        <li className="flex items-center">
                          <span className="w-24 font-medium text-gray-700 dark:text-gray-300">TypeScript</span>
                          <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                          </div>
                        </li>
                        <li className="flex items-center">
                          <span className="w-24 font-medium text-gray-700 dark:text-gray-300">Python</span>
                          <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="card">
                    <div className="card-body">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">フレームワーク・ツール</h3>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center">
                          <span className="w-24 font-medium text-gray-700 dark:text-gray-300">Android SDK</span>
                          <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                          </div>
                        </li>
                        <li className="flex items-center">
                          <span className="w-24 font-medium text-gray-700 dark:text-gray-300">iOS SDK</span>
                          <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                          </div>
                        </li>
                        <li className="flex items-center">
                          <span className="w-24 font-medium text-gray-700 dark:text-gray-300">React</span>
                          <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                          </div>
                        </li>
                        <li className="flex items-center">
                          <span className="w-24 font-medium text-gray-700 dark:text-gray-300">Unity</span>
                          <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                          </div>
                        </li>
                        <li className="flex items-center">
                          <span className="w-24 font-medium text-gray-700 dark:text-gray-300">Photoshop</span>
                          <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <BriefcaseIcon className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
                  経歴
                </h2>
                
                <div className="relative border-l-4 border-gray-200 dark:border-gray-700 pl-6 ml-6 mb-12">
                  <div className="mb-10 relative">
                    <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full border-4 border-white dark:border-gray-900 bg-blue-600"></div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">シニアモバイルエンジニア</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">2020年 - 現在</p>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                      大手テクノロジー企業でAndroid/iOSアプリの開発を担当。新機能の設計・実装、パフォーマンス最適化、コードレビューなどを行っています。
                    </p>
                  </div>
                  
                  <div className="mb-10 relative">
                    <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full border-4 border-white dark:border-gray-900 bg-blue-600"></div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Webフロントエンドエンジニア</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">2018年 - 2020年</p>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                      スタートアップ企業でReactを使用したWebアプリケーションの開発を担当。UIコンポーネントの設計・実装、状態管理、APIとの連携などを行いました。
                    </p>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full border-4 border-white dark:border-gray-900 bg-blue-600"></div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">ゲーム開発者（フリーランス）</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">2016年 - 2018年</p>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                      Unityを使用したモバイルゲームの開発を担当。ゲームメカニクスの実装、3Dモデリング、UI設計などを行いました。
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">連絡先</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  メール: <a href="mailto:grandpianoaoa@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">grandpianoaoa@gmail.com</a><br />
                  GitHub: <a href="https://github.com/pianopia" className="text-blue-600 dark:text-blue-400 hover:underline">pianopia</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 