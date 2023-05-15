"use client";

// styles
import styles from './page.module.scss';

// bootstrap
import 'bootstrap/dist/css/bootstrap.css';

// components
import Navigation from '@/components/Navigation/Navigation';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Projects from '@/components/Projects/Projects';
import Contact from '@/components/Contact/Contact';
import Sidebar from '@/components/Sidebar/Sidebar';

export default function Home() {
  return (
    <div>
      <Navigation />
      <main className={styles.main}>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Sidebar />
      </main>
    </div>
  )
}
