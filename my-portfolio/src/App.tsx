import React from 'react';
import Header from "./components/Header.jsx";
import Footer from './components/Footer.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Portfolio from './pages/portfolio.jsx';
import Contact from './pages/Contact.jsx';
import Resume from './pages/Resume.jsx';
import './App.css';

const App = () => (
  <>
    <Header />
    <main>
      <AboutMe />
      <Portfolio />
      <Contact />
      <Resume />
    </main>
    <Footer />
  </>
);

export default App;
