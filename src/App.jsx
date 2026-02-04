import { useState, useEffect } from 'react' // Rebuild trigger 2
import './App.css'
import './Skills.css'
import './About.css'
import './Contact.css'
import { useScrollAnimation } from './useScrollAnimation'

// Import education data
const educationData = [
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

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const greetingRef = useScrollAnimation()
  const headingRef = useScrollAnimation()
  const socialRef = useScrollAnimation()
  const summaryRef = useScrollAnimation()
  const skillsHeaderRef = useScrollAnimation()
  const aboutHeaderRef = useScrollAnimation()
  const contactHeaderRef = useScrollAnimation()

  // Section Refs for Page Transitions
  const skillsSectionRef = useScrollAnimation()
  const aboutSectionRef = useScrollAnimation()
  const contactSectionRef = useScrollAnimation()

  const greetings = [
    { text: 'Hello', language: 'English' },
    { text: 'Hola', language: 'Spanish' },
    { text: 'Bonjour', language: 'French' },
    { text: 'Hallo', language: 'German' },
    { text: 'Ciao', language: 'Italian' },
    { text: 'Olá', language: 'Portuguese' },
    { text: 'Привет', language: 'Russian' },
    { text: 'こんにちは', language: 'Japanese' },
    { text: '你好', language: 'Chinese (Mandarin)' },
    { text: 'مرحبا', language: 'Arabic' },
    { text: 'नमस्ते', language: 'Hindi' },
    { text: 'Namaste', language: 'Sanskrit' },
    { text: 'Annyeonghaseyo', language: 'Korean' },
    { text: 'สวัสดี', language: 'Thai' },
    { text: 'Xin chào', language: 'Vietnamese' },
    { text: 'Habari', language: 'Swahili' },
    { text: 'Merhaba', language: 'Turkish' },
    { text: 'Olá', language: 'Brazilian Portuguese' },
    { text: 'Aloha', language: 'Hawaiian' },
    { text: 'Bula', language: 'Fijian' },
    { text: 'Gday', language: 'Australian English' },
    { text: 'Howdy', language: 'Texas English' },
    { text: 'Hej', language: 'Swedish' },
    { text: 'Hallo', language: 'Dutch' },
    { text: 'Buna', language: 'Romanian' },
    { text: 'Cześć', language: 'Polish' },
    { text: 'Ahoj', language: 'Czech' },
    { text: 'Helló', language: 'Hungarian' },
    { text: 'Γεια σας', language: 'Greek' },
    { text: 'שלום', language: 'Hebrew' },
    { text: 'Xaleykum', language: 'Somali' },
    { text: 'Halloo', language: 'Norwegian' },
    { text: 'Hej', language: 'Danish' },
    { text: 'Salve', language: 'Latin' },
    { text: 'Kumusta', language: 'Tagalog' },
    { text: 'Sannu', language: 'Hausa' },
    { text: 'Bawon', language: 'Igbo' },
    { text: 'Jambo', language: 'Kenyan' },
    { text: 'Shalom', language: 'Yiddish' },
    { text: 'Përshëndetje', language: 'Albanian' },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)

  // Contact Form State
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    const formData = new FormData(e.target)

    try {
      const response = await fetch("https://formsubmit.co/ajax/faizmansuri066@gmail.com", {
        method: "POST",
        body: formData
      })

      if (response.ok) {
        setSubmitted(true)
      }
    } catch (error) {
      console.error("Form submission error", error)
    } finally {
      setSubmitting(false)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % greetings.length)
        setFadeOut(false)
      }, 500)
    }, 4000)

    return () => clearInterval(interval)
  }, [greetings.length])

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'about', 'contact']
      const scrollPosition = window.scrollY

      for (let section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop - 200 && scrollPosition < offsetTop + offsetHeight - 200) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Skills', id: 'skills' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ]

  const handleNavClick = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const current = greetings[currentIndex]

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-content">
          <div className="nav-logo">FM</div>

          {/* Desktop Navigation */}
          <div className="nav-links desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nav-button ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-links">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`mobile-nav-button ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => {
                  handleNavClick(item.id);
                  setMobileMenuOpen(false);
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>



      {/* HOME SECTION */}
      <div id="home" className="app-container">


        {/* Greetings */}
        <div className="greetings-section scroll-animate-fade" ref={greetingRef}>
          <div className="greeting-wrapper">
            <div className={`greeting-text ${fadeOut ? 'fade-out' : 'fade-in'}`}>
              <h3>{current.text}</h3>
              <p className="language-tag">{current.language}</p>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="main-heading-section scroll-animate-scale" ref={headingRef}>
          <h1 className="main-heading">
            <span className="heading-word">I'M</span>
            <span className="heading-name">Faiz</span>
          </h1>
        </div>

        {/* Social Links */}
        <div className="social-links scroll-animate" ref={socialRef}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link github-link" title="GitHub">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link linkedin-link" title="LinkedIn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.586v-11h3.441v1.506h.049c.77-1.159 2.116-2.383 4.357-2.383 3.021 0 5.362 1.975 5.362 6.218v5.659zM5.337 8.855c-1.144 0-2.083-.931-2.083-2.087 0-1.156.939-2.087 2.083-2.087 1.141 0 2.085.931 2.085 2.087 0 1.156-.944 2.087-2.085 2.087zm1.782 11.597H3.555V9.452h3.564v10.999zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
            LinkedIn
          </a>
        </div>

        {/* Summary */}
        <div className="summary-section scroll-animate" ref={summaryRef}>
          <p className="summary-text">Motivated BTech Computer Science student with a strong problem-solving mindset and a passion for technology. Interested in designing and building web-based solutions that turn ideas into practical digital products. Eager to learn, experiment, and grow through hands-on development</p>
        </div>

        <div className="wind-effect"></div>
      </div>

      <div className="snowflakes" aria-hidden="true">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="snowflake" style={{ '--delay': `${i * 0.1}s` }}></div>
        ))}
      </div>

      {/* Moving People */}
      <div className="people-section" aria-hidden="true">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="person" style={{ '--delay': `${i * 0.3}s`, '--duration': `${15 + i * 2}s` }}></div>
        ))}
      </div>

      {/* SKILLS SECTION */}
      <div id="skills" className="skills-page section-reveal" ref={skillsSectionRef}>
        <div className="skills-container">
          <div className="skills-header scroll-animate" ref={skillsHeaderRef}>
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

      {/* ABOUT SECTION */}
      <div id="about" className="about-page section-reveal" ref={aboutSectionRef}>
        <div className="about-container">
          <div className="about-header scroll-animate" ref={aboutHeaderRef}>
            <h2 className="about-title">About <span className="title-highlight">Me</span></h2>
            <p className="about-subtitle">My journey in education and beyond</p>
          </div>

          <div className="education-section">
            <h3 className="section-title">
              <span className="section-icon">📚</span>
              Education
            </h3>

            <div className="education-grid">
              {educationData.map((edu, index) => (
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

          <div className="coming-soon">
            <p>More education details and personal information coming soon...</p>
          </div>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div id="contact" className="contact-page section-reveal" ref={contactSectionRef}>
        <div className="contact-container">
          <div className="contact-header scroll-animate" ref={contactHeaderRef}>
            <h2 className="contact-title">Contact <span className="title-highlight">Me</span></h2>
            <p className="contact-subtitle">Let's Connect Together</p>
          </div>

          <div className="contact-content-wrapper">
            <div className="contact-info">
              <div className="contact-info-card">
                <div className="info-icon">📞</div>
                <div className="info-details">
                  <h4>Phone</h4>
                  <p>+91 7383155000</p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="info-icon">✉️</div>
                <div className="info-details">
                  <h4>Email</h4>
                  <p>faizmansuri066@gmail.com</p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="info-icon">📍</div>
                <div className="info-details">
                  <h4>Location</h4>
                  <p>Vadodara, Gujarat</p>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              {submitted ? (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <h3>Thank You!</h3>
                  <p>Your message was sent successfully.</p>
                  <button
                    className="submit-btn"
                    onClick={() => setSubmitted(false)}
                    style={{ marginTop: '20px', width: 'auto' }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="contact-form"
                >
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input type="text" name="name" className="form-input" placeholder="Your Name" required disabled={submitting} />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input type="email" name="email" className="form-input" placeholder="Your Email" required disabled={submitting} />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea name="message" className="form-textarea" placeholder="Your Message" required disabled={submitting}></textarea>
                  </div>

                  {/* FormSubmit Configuration */}
                  <input type="hidden" name="_subject" value="New Submission from Portfolio!" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />

                  <button type="submit" className="submit-btn" disabled={submitting}>
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Faiz Mansuri. All Rights Reserved.
          </p>
          <div className="footer-social">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:faizmansuri066@gmail.com">Email</a>
          </div>
          <p className="tagline">Designed & Built with <span className="heart">❤️</span></p>
        </div>
      </footer>
    </>
  )
}

export default App
