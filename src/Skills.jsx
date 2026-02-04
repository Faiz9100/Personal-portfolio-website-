import React from 'react'
import './Skills.css'
import { useScrollAnimation } from './useScrollAnimation'

function Skills() {
  const headerRef = useScrollAnimation()
  const skillsData = [
    {
      category: 'Languages',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      icon: '💻'
    },
    {
      category: 'Frontend',
      skills: ['React.js', 'Bootstrap', 'Responsive Design', 'Frontend Framework'],
      icon: '🎨'
    },
    {
      category: 'Backend',
      skills: ['Node.js Basics', 'Database Management', 'API Integration'],
      icon: '⚙️'
    },
    {
      category: 'Development',
      skills: ['Code Debugging'],
      icon: '🔧'
    }
  ]

  return (
    <div className="skills-page">
      <div className="skills-container">
        <div className="skills-header scroll-animate" ref={headerRef}>
          <h2 className="skills-title">My <span className="title-highlight">Skills</span></h2>
          <p className="skills-subtitle">Crafted through hands-on learning and practical experience</p>
        </div>

        <div className="skills-grid">
          {skillsData.map((skillGroup, index) => (
            <div key={index} className="skill-category-card" style={{ '--card-index': index }}>
              <div className="card-header">
                <span className="category-icon">{skillGroup.icon}</span>
                <h3 className="category-name">{skillGroup.category}</h3>
              </div>
              <div className="skills-list">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item" style={{ '--item-index': skillIndex }}>
                    <span className="skill-dot"></span>
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
