import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import BlogPreview from './components/BlogPreview';
import Contact from './components/Contact';
import Footer from './components/Footer';

export const metadata = {
  title: 'pianopia',
  description: 'Android/iOS、Web、ゲーム開発者。プログラミングだけでなく、3Dモデリング、音楽作曲、グラフィックデザインなど、多様なスキルを持つクリエイター。',
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <Skills />
        <Projects />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
    </div>
  );
} 