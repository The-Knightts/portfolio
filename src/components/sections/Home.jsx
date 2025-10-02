import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Home.scss';
import backgroundImage from '../../assets/images/bg.jpg';

const Home = () => {
  return (
    <section className="home-section">
      <div className="container">
        <div className="hero-content">
          <h1>Hi, I'm <span className="highlight">Kuber</span></h1>
          <h2>Full Stack Developer</h2>
          <p>I build responsive websites and web applications with modern technologies.</p>
          <div className="cta-buttons">
            <Link to="/projects" className="btn btn-primary">View My Work</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Me</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;