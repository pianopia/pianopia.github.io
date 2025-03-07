import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'blog-posts');

// すべてのブログ記事のメタデータを取得する関数
export function getAllPosts() {
  // blog-postsディレクトリ内のファイル名を取得
  const fileNames = fs.readdirSync(postsDirectory);
  
  // 各ファイルのメタデータを取得
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      // ファイル名からスラッグを取得（.mdを除去）
      const slug = fileName.replace(/\.md$/, '');
      
      // マークダウンファイルを文字列として読み込む
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      // gray-matterを使用してメタデータを解析
      const matterResult = matter(fileContents);
      
      // データをスラッグと組み合わせる
      return {
        slug,
        ...matterResult.data,
        content: matterResult.content,
      };
    });
  
  // 日付でソート
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// すべてのブログ記事のスラッグを取得する関数
export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      return {
        slug: fileName.replace(/\.md$/, ''),
      };
    });
}

// 特定のブログ記事のデータを取得する関数
export async function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // gray-matterを使用してメタデータを解析
    const matterResult = matter(fileContents);
    
    // remarkを使用してマークダウンをHTMLに変換
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();
    
    // データを返す
    return {
      slug,
      contentHtml,
      ...matterResult.data,
    };
  } catch (error) {
    console.error(`Error reading file ${fullPath}:`, error);
    return null;
  }
}

// すべてのカテゴリーを取得する関数
export function getAllCategories() {
  const posts = getAllPosts();
  const categories = posts.map(post => post.category);
  const uniqueCategories = [...new Set(categories)];
  
  return uniqueCategories.map(category => {
    const count = posts.filter(post => post.category === category).length;
    return { name: category, count };
  });
} 