import React from 'react';
import '../../styles/About.scss';
import kImage from '../../assets/images/k.jpg';
import resumePdf from '../../assets/resume.pdf';
const About = () => {
  return (
    <section className="about-section section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src={kImage} alt="pfp" className="profile-image" />
          </div>
          <div className="about-text">
            <h3>Who am I?</h3>
            <p>I am a passionate Full Stack Developer with expertise in building modern web applications. With a strong foundation in both frontend and backend technologies, I create seamless user experiences and robust server-side solutions.</p>

            <h3>My Journey</h3>
            <p>My journey in web development started several years ago when I built my first website. Since then, I've continuously expanded my skills and knowledge, staying up-to-date with the latest technologies and best practices in the industry.</p>

            <h3>Education & Experience</h3>
            <ul>
              <li>Diploma in Information Technology</li>
              <li>Currently pursuing Bachelor of Engineering (BE) in Information Technology</li>
              <li>3+ years of experience in web development</li>
            </ul>

            <div className="cta">
              <a href="/contact" className="btn">Get In Touch</a>
              <a href={resumePdf} download="Kuber_Resume.pdf" className="btn btn-secondary">Download Resume</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;