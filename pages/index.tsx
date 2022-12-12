import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import { motion } from "framer-motion";
import About from '../components/About';
import Skills from '../components/Skills';
import Work from '../components/Work';
import ContactMe from '../components/ContactMe';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-[rgb(21,21,21)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 
    scrollbar-thumb-teal-500/70">
      <Head>
        <title>Aarons Portfolio</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
   
      <Header />
      
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-center">
        <Skills />
      </section>

      {/* Experience */}

    <section id="work" className="snap-start">
        <Work />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
          <footer className="sticky bottom-5 w-full cursor-pointer">
            <div className="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 hover:stroke-teal-500/70">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
            </svg>
          </div>
          </footer>
      </Link>

      {/* Hire Me */}
    </div>
  )
};
