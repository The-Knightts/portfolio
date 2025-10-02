import React from 'react';
import '../../styles/Skills.scss';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3/SASS', level: 80 },
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 95 },
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express', level: 95 },
        { name: 'MongoDB', level: 80 },
        { name: 'SQL', level: 85 },
      ]
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Webpack', level: 70 },
        { name: 'Docker', level: 60 },
        { name: 'Figma', level: 75 },
      ]
    }
  ];

  return (
    <section className="skills-section section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div className="skill-category" key={index}>
              <h3>{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div className="skill-item" key={skillIndex}>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;