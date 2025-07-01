import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Team from './components/Team';
import Impact from './components/Impact';
import Programs from './components/Programs';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Team />
      <Impact />
      <Programs />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;