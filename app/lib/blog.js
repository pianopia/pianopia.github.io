// ブログ記事のメタデータ
export const blogPosts = [
  {
    slug: 'first-post',
    title: '最初のブログ記事',
    date: '2023-01-01',
    description: 'これは、Next.jsを使った新しいブログの最初の記事です。これからここで技術的な内容や日々の活動について書いていきます。',
    readTime: '3分',
    category: '技術',
    content: `
# 最初のブログ記事

これは、Next.jsを使った新しいブログの最初の記事です。これからここで技術的な内容や日々の活動について書いていきます。

## Next.jsについて

Next.jsは、Reactベースのフレームワークで、サーバーサイドレンダリング（SSR）や静的サイト生成（SSG）などの機能を提供します。
このブログもNext.jsを使って構築されています。

## 今後の予定

このブログでは、以下のような内容を書いていく予定です：

- Web開発に関するチュートリアルや tips
- モバイルアプリ開発の経験や知見
- 新しい技術のレビューや考察
- 個人プロジェクトの進捗報告

定期的に更新していきますので、ぜひチェックしてください！
    `
  },
  {
    slug: 'second-post',
    title: 'モバイルアプリ開発のベストプラクティス',
    date: '2023-02-15',
    description: 'モバイルアプリ開発において重要なベストプラクティスについて解説します。UI/UXデザイン、パフォーマンス最適化、セキュリティ対策など。',
    readTime: '5分',
    category: 'モバイル開発',
    content: `
# モバイルアプリ開発のベストプラクティス

モバイルアプリ開発において重要なベストプラクティスについて解説します。

## UI/UXデザイン

ユーザーにとって使いやすいインターフェースを設計することが重要です。

## パフォーマンス最適化

バッテリー消費を抑え、起動時間を短縮するための最適化テクニックを紹介します。

## セキュリティ対策

ユーザーデータを保護するためのセキュリティ対策について解説します。
    `
  },
  {
    slug: 'third-post',
    title: 'Next.jsとTailwind CSSでモダンなWebサイトを構築する',
    date: '2023-03-20',
    description: 'Next.jsとTailwind CSSを組み合わせて、高速でモダンなWebサイトを構築する方法を紹介します。',
    readTime: '4分',
    category: 'Web開発',
    content: `
# Next.jsとTailwind CSSでモダンなWebサイトを構築する

Next.jsとTailwind CSSを組み合わせて、高速でモダンなWebサイトを構築する方法を紹介します。

## Next.jsの特徴

Next.jsの主な特徴と利点について解説します。

## Tailwind CSSの利点

ユーティリティファーストのCSSフレームワークであるTailwind CSSの利点について説明します。

## 実装例

実際のコード例を交えながら、実装方法を紹介します。
    `
  }
];

// スラッグからブログ記事を取得する関数
export function getPostBySlug(slug) {
  return blogPosts.find(post => post.slug === slug);
}

// すべてのブログ記事を取得する関数
export function getAllPosts() {
  return blogPosts;
}

// カテゴリー一覧を取得する関数
export function getAllCategories() {
  const categories = blogPosts.map(post => post.category);
  const uniqueCategories = [...new Set(categories)];
  
  return uniqueCategories.map(category => {
    const count = blogPosts.filter(post => post.category === category).length;
    return { name: category, count };
  });
} 