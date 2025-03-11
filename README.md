# pianopia.github.io

個人ウェブサイト - NextJSとNextraを使用して構築

## 開発

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

## ビルド

```bash
# 静的サイトの生成
npm run build
```

## デプロイ

```bash
NODE_ENV=production npm run build

NODE_ENV=production npm run deploy
```

このリポジトリは、GitHub Actionsを使用して自動的にGitHub Pagesにデプロイされます。
`main`ブランチにプッシュすると、自動的にビルドとデプロイが行われます。

## 技術スタック

- [Next.js](https://nextjs.org/)
- [Nextra](https://nextra.site/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/) 