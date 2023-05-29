import Footer from 'components/Footer';
import AboutMe from 'containers/home/AboutMe';
import Projects from 'containers/home/Projects';
import Skills from 'containers/home/Skills';
import React from 'react';
import Hero from 'containers/home/Hero';
import ContatctMe from 'containers/home/ContatctMe';

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