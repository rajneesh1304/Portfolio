import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Project from './components/Project';
import Header from './components/Header'; 
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
