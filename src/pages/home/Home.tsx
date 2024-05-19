import AboutMe from 'pages/home/AboutMe';
import Projects from 'pages/home/Projects';
import Skills from 'pages/home/Skills';
import React from 'react';
import Hero from 'pages/home/Hero';
import ContatctMe from 'pages/home/ContatctMe';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <ContatctMe />
    </>
  );
}

export default Home;