import { 
  DevicePhoneMobileIcon, 
  GlobeAltIcon, 
  CubeIcon, 
  MusicalNoteIcon, 
  PaintBrushIcon, 
  CommandLineIcon 
} from '@heroicons/react/24/outline';

const skills = [
  {
    name: 'モバイルアプリ開発',
    description: 'Android/iOSアプリの設計・開発。Kotlin、Swift、Flutter、React Nativeなどを使用。',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Webフロントエンド開発',
    description: 'モダンなWebアプリケーションの開発。React、Next.js、TypeScriptなどを使用。',
    icon: GlobeAltIcon,
  },
  {
    name: 'ゲーム開発',
    description: 'Unity、Unreal Engineを使用したゲーム開発。2D/3Dゲームの設計・実装。',
    icon: CubeIcon,
  },
  {
    name: '音楽作曲',
    description: 'ゲームやアプリケーション向けのBGM、効果音の作成。DAWを使用した音楽制作。',
    icon: MusicalNoteIcon,
  },
  {
    name: 'グラフィックデザイン',
    description: 'IllustratorやPhotoshopを使用したUI/UXデザイン。ロゴ、アイコン、バナーなどの制作。',
    icon: PaintBrushIcon,
  },
  {
    name: 'バックエンド開発',
    description: 'Node.js、Python、Goなどを使用したサーバーサイド開発。APIの設計・実装。',
    icon: CommandLineIcon,
  },
];

export default function Skills() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-24">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">スキル</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            多様な分野での経験とスキルを活かして、クリエイティブな課題解決を提供します。
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <div key={skill.name} className="pt-6">
                <div className="flow-root rounded-lg bg-white dark:bg-gray-900 px-6 pb-8 shadow-lg">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-blue-500 p-3 shadow-lg">
                        <skill.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900 dark:text-white">{skill.name}</h3>
                    <p className="mt-5 text-base text-gray-500 dark:text-gray-400">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 