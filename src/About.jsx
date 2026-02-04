import React from 'react'
import './About.css'
import { useScrollAnimation } from './useScrollAnimation'

function About() {
  const headerRef = useScrollAnimation()
  const education = [
    {
      school: 'Shanaon School',
      board: 'CBSE',
      level: '10th CBSE Board',
      percentage: '66/100',
      year: '2020',
      icon: '🎓'
    },
    {
      school: 'Parul Institute of Engineering and Technology',
      board: 'Diploma',
      level: 'Diploma in Computer Science and Engineering',
      percentage: '7.71/10 CGPA',
      year: '2023',
      icon: '🎯'
    },
    {
      school: 'Parul University – Vadodara, Gujarat',
      board: 'B.Tech',
      level: 'B.Tech (Lateral Entry) in Computer Science and Engineering',
      percentage: '6.79/10 CGPA',
      year: '2023 – 2026',
      icon: '🚀'
    }
  ]

  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-header scroll-animate" ref={headerRef}>
          <h2 className="about-title">About <span className="title-highlight">Me</span></h2>
          <p className="about-subtitle">My journey in education and beyond</p>
        </div>

        {/* Education Section */}
        <div className="education-section">
          <h3 className="section-title">
            <span className="section-icon">📚</span>
            Education
          </h3>
          
          <div className="education-grid">
            {education.map((edu, index) => (
              <div key={index} className="education-card" style={{ '--card-index': index }}>
                <div className="card-icon">{edu.icon}</div>
                
                <div className="card-content">
                  <h4 className="school-name">{edu.school}</h4>
                  <p className="board-name">{edu.board}</p>
                  
                  <div className="education-details">
                    <div className="detail-item">
                      <span className="detail-label">Level:</span>
                      <span className="detail-value">{edu.level}</span>
                    </div>
                    
                    <div className="detail-item">
                      <span className="detail-label">Percentage:</span>
                      <span className="detail-value">{edu.percentage}</span>
                    </div>
                    
                    <div className="detail-item">
                      <span className="detail-label">Year:</span>
                      <span className="detail-value">{edu.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Placeholder for additional sections */}
        <div className="coming-soon">
          <p>More education details and personal information coming soon...</p>
        </div>
      </div>
    </div>
  )
}

export default About
