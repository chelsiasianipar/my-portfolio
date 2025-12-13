import React, { useEffect, useRef, useState } from 'react'
import '../css/SkillsSection.css'

const SKILLS_DATA = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: '💻',
    tags: ['React.js', 'HTML', 'CSS', 'JavaScript', 'Responsive Design']
  },
  {
    id: 'backend',
    title: 'Backend & Database',
    icon: '⚙️',
    tags: ['Node.js', 'PHP', 'Laravel', 'MySQL', 'PostgreSQL', 'MongoDB']
  },
  {
    id: 'design',
    title: 'Design',
    icon: '🎨',
    tags: ['Figma', 'UI/UX Design', 'Wireframing', 'Prototyping', 'User Research', 'Balsamic', 'BPMN']
  },
  {
    id: 'testing',
    title: 'Testing & Quality Assurance',
    icon: '🧪',
    tags: [
      'Manual Testing', 'Selenium WebDriver', 'Cypress', 'Katalon Studio', 'Postman (API Testing)', 
      'JUnit', 'Test Case Design', 'Bug Reporting', 'Regression Testing'
    ]
  },
  {
    id: 'tools',
    title: 'Expert Tools',
    icon: '🛠️',
    tags: [
      'Git & GitHub', 'VS Code', 'Trello', 'StarUML', 'Minitab',
      'Visual Paradigma', 'Bizagi', 'Postman', 'Enterprise Architect', 'Power Designer'
    ]
  },
  {
    id: 'softskills',
    title: 'Soft Skills',
    icon: '🤝',
    tags: [
      'Problem Solving', 'Team Collaboration', 'Communication', 'Attention to Detail', 
      'Time Management', 'Adaptability', 'Documentation', 'Stakeholder Analysis'
    ]
  }
]

export default function SkillsSection() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // ===== INTERSECTION OBSERVER - Trigger animations on scroll =====
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    // ===== PARALLAX/MAGNETIC EFFECT - Cards move away from cursor =====
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return

      const panels = document.querySelectorAll('.skill-panel')
      panels.forEach((panel) => {
        const rect = panel.getBoundingClientRect()
        const panelX = rect.left + rect.width / 2
        const panelY = rect.top + rect.height / 2
        const distance = Math.hypot(e.clientX - panelX, e.clientY - panelY)

        // Magnetic repulsion effect
        if (distance < 400) {
          const angle = Math.atan2(e.clientY - panelY, e.clientX - panelX)
          const force = (400 - distance) / 400
          const moveX = Math.cos(angle + Math.PI) * force * 8
          const moveY = Math.sin(angle + Math.PI) * force * 8
          
          panel.style.transform = `translate(${moveX}px, ${moveY}px)`
        } else {
          panel.style.transform = 'translate(0, 0)'
        }
      })
    }

    // ===== STAGGERED ANIMATION ON VISIBILITY =====
    if (isVisible) {
      const panels = document.querySelectorAll('.skill-panel')
      panels.forEach((panel, index) => {
        setTimeout(() => {
          panel.style.opacity = '1'
          panel.style.transform = 'translateY(0)'
        }, index * 100)
      })
    }

    // ===== ICON ROTATION ON PANEL HOVER =====
    const panels = document.querySelectorAll('.skill-panel')
    panels.forEach((panel) => {
      const icon = panel.querySelector('.skill-icon')
      
      panel.addEventListener('mouseenter', () => {
        if (icon) {
          icon.style.transform = 'rotate(-10deg) scale(1.1)'
        }
      })
      
      panel.addEventListener('mouseleave', () => {
        if (icon) {
          icon.style.transform = 'rotate(0deg) scale(1)'
        }
      })
    })

    // ===== RIPPLE EFFECT ON PANEL CLICK =====
    panels.forEach((panel) => {
      panel.addEventListener('click', function(e) {
        const ripple = document.createElement('span')
        ripple.classList.add('ripple-effect')
        
        const rect = this.getBoundingClientRect()
        const size = Math.max(rect.width, rect.height)
        const x = e.clientX - rect.left - size / 2
        const y = e.clientY - rect.top - size / 2
        
        ripple.style.width = ripple.style.height = size + 'px'
        ripple.style.left = x + 'px'
        ripple.style.top = y + 'px'
        
        this.appendChild(ripple)
        
        setTimeout(() => ripple.remove(), 600)
      })
    })

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isVisible])

  return (
    <section 
      id="skills" 
      className={`skills-section ${isVisible ? 'visible' : ''}`}
      ref={sectionRef}
      aria-label="Skills"
    >
      <div className="skills-container">
        {/* Header */}
        <div className="skills-header">
          <h2 className="section-title">My Skills & Expertise</h2>
          <p className="section-sub">
            Comprehensive technical skills focused on Quality Assurance and Full-Stack Development
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-main">
          {SKILLS_DATA.map((group) => (
            <article 
              key={group.id} 
              className="skill-panel" 
              tabIndex={0} 
              aria-labelledby={`skill-${group.id}-title`}
              style={{ 
                opacity: 0, 
                transform: 'translateY(30px)',
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {/* Panel Header */}
              <div className="skill-header">
                <div className="skill-icon" aria-hidden="true">
                  {group.icon}
                </div>
                <div>
                  <div id={`skill-${group.id}-title`} className="skill-title">
                    {group.title}
                  </div>
                </div>
              </div>

              {/* Skills List */}
              <ul className="skill-list">
                {group.tags.map((tag) => (
                  <li key={tag} className="skill-item">
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}