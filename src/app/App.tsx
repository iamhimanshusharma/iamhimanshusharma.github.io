import { useState, useEffect } from 'react';
import { Navigation } from '@/app/components/Navigation';
import { Hero } from '@/app/components/Hero';
import { About } from '@/app/components/About';
import { Timeline } from '@/app/components/Timeline';
import { Skills } from '@/app/components/Skills';
import { Projects } from '@/app/components/Projects';
import { Contact } from '@/app/components/Contact';
import { Footer } from '@/app/components/Footer';
import { CodingStats } from './components/CodingStats';

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage or system preference
    const saved = localStorage.getItem('theme');
    if (saved) {
      return saved === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Update HTML class and localStorage when theme changes
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Timeline />
      <CodingStats />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
