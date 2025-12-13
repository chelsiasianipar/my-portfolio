import React, { useEffect, useRef, useState } from "react";
import '../css/AboutSection.css'

const IconDownload = ({ className = "" }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M21 15v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 15V3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const AboutSection = () => {
  const sectionRef = useRef(null)
  const profileRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cvPath = "/assest/pdf/Chelsia Sianipar-CV.pdf"

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
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    // ===== PARALLAX EFFECT ON CARDS =====
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return
      
      const rect = sectionRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      
      setMousePosition({ x, y })

      // Parallax for profile card
      const profile = profileRef.current
      if (profile) {
        const moveX = (e.clientX - rect.left - rect.width / 2) / 50
        const moveY = (e.clientY - rect.top - rect.height / 2) / 50
        profile.style.transform = `translate(${moveX}px, ${moveY}px)`
      }

      // Parallax for contact cards
      const contactCards = document.querySelectorAll('.contact-card')
      contactCards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect()
        const cardX = cardRect.left + cardRect.width / 2
        const cardY = cardRect.top + cardRect.height / 2
        const distance = Math.hypot(e.clientX - cardX, e.clientY - cardY)
        
        if (distance < 300) {
          const angle = Math.atan2(e.clientY - cardY, e.clientX - cardX)
          const force = (300 - distance) / 300
          const moveX = Math.cos(angle + Math.PI) * force * 15
          const moveY = Math.sin(angle + Math.PI) * force * 15
          
          card.style.transform = `translate(${moveX}px, ${moveY}px) scale(${1 + force * 0.05})`
        } else {
          card.style.transform = 'translate(0, 0) scale(1)'
        }
      })
    }

    // ===== ANIMATED COUNTER FOR STATS =====
    const animateValue = (element, start, end, duration) => {
      if (!element) return
      
      let startTimestamp = null
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp
        const progress = Math.min((timestamp - startTimestamp) / duration, 1)
        const value = Math.floor(progress * (end - start) + start)
        element.textContent = value + '+'
        if (progress < 1) {
          window.requestAnimationFrame(step)
        }
      }
      window.requestAnimationFrame(step)
    }

    // Trigger counter animation when visible
    if (isVisible) {
      const experienceEl = document.querySelector('.stat-experience')
      const projectsEl = document.querySelector('.stat-projects')
      const certificatesEl = document.querySelector('.stat-certificates')
      
      if (experienceEl) animateValue(experienceEl, 0, 2, 1500)
      if (projectsEl) animateValue(projectsEl, 0, 15, 2000)
      if (certificatesEl) animateValue(certificatesEl, 0, 5, 1800)
    }

    // ===== HOVER EFFECT ON CONTACT ICONS =====
    const contactIcons = document.querySelectorAll('.contact-icon')
    contactIcons.forEach((icon) => {
      icon.addEventListener('mouseenter', () => {
        icon.style.animation = 'iconBounce 0.5s ease'
      })
      icon.addEventListener('animationend', () => {
        icon.style.animation = ''
      })
    })

    // ===== TYPING EFFECT FOR TITLE =====
    const titleElement = document.querySelector('.about-title')
    if (titleElement && isVisible) {
      const text = titleElement.textContent
      titleElement.textContent = ''
      let charIndex = 0
      
      const typeChar = () => {
        if (charIndex < text.length) {
          titleElement.textContent += text.charAt(charIndex)
          charIndex++
          setTimeout(typeChar, 100)
        }
      }
      
      setTimeout(typeChar, 300)
    }

    // ===== RIPPLE EFFECT ON BUTTON =====
    const button = document.querySelector('.btn-primary')
    if (button) {
      button.addEventListener('click', (e) => {
        const ripple = document.createElement('span')
        ripple.classList.add('ripple-effect')
        
        const rect = button.getBoundingClientRect()
        const size = Math.max(rect.width, rect.height)
        const x = e.clientX - rect.left - size / 2
        const y = e.clientY - rect.top - size / 2
        
        ripple.style.width = ripple.style.height = size + 'px'
        ripple.style.left = x + 'px'
        ripple.style.top = y + 'px'
        
        button.appendChild(ripple)
        
        setTimeout(() => ripple.remove(), 600)
      })
    }

    // ===== TILT EFFECT ON PROFILE CARD =====
    if (profileRef.current) {
      profileRef.current.addEventListener('mousemove', (e) => {
        const rect = profileRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        
        const rotateX = ((y - centerY) / centerY) * 5
        const rotateY = ((centerX - x) / centerX) * 5
        
        profileRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      })

      profileRef.current.addEventListener('mouseleave', () => {
        profileRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)'
      })
    }

    // ===== SCROLL REVEAL FOR PARAGRAPHS =====
    const paragraphs = document.querySelectorAll('.about-body p')
    paragraphs.forEach((p, index) => {
      p.style.opacity = '0'
      p.style.transform = 'translateY(20px)'
      
      setTimeout(() => {
        p.style.transition = 'all 0.6s ease'
        p.style.opacity = '1'
        p.style.transform = 'translateY(0)'
      }, 400 + index * 150)
    })

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isVisible])

  return (
    <section 
      id="about" 
      className={`about-section ${isVisible ? 'section-visible' : ''}`}
      ref={sectionRef}
    >
      {/* Background gradient orbs */}
      <div className="bg-orb orb-left"></div>
      <div className="bg-orb orb-right"></div>

      <div className="about-wrap">
        <div className="about-grid" role="region" aria-label="Tentang saya">

          {/* LEFT - Main Content */}
          <div className="about-left">
            <h3 className="about-title">About Me</h3>
            <p className="about-sub">System Analyst • Quality Assurance</p>

            <div className="about-body">
              <p>
                I am interested in <strong>System Analysis</strong> and <strong>Quality Assurance</strong>, 
                with experience in understanding user needs, mapping business processes, and translating them 
                into clear system requirements.
              </p>
              <p>
                I design and execute test cases, document testing results, and ensure that system features 
                function properly and meet user expectations.
              </p>
              <p>
                I am responsible, detail-oriented, and motivated to contribute effectively—both independently 
                and within a team—to support the development of reliable and well-structured systems.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid">
              <div className="stat-box">
                <div className="stat-number stat-experience">2+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-box">
                <div className="stat-number stat-projects">15+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-box">
                <div className="stat-number stat-certificates">5+</div>
                <div className="stat-label">Certificates</div>
              </div>
            </div>

            {/* CTA: Download CV */}
            <div style={{ marginTop: 24 }}>
              <a
                className="btn-primary"
                href={cvPath}
                download
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download CV Chelsia Nadia"
              >
                <IconDownload />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* RIGHT - Profile & Contact */}
          <aside className="about-right" aria-label="Kontak dan profil">
            <div 
              className="profile" 
              role="article" 
              aria-label="Profil singkat"
              ref={profileRef}
            >
              <div className="profile-meta">
                <div className="profile-name">Chelsia Nadia Sianipar</div>
                <div className="profile-role">System Analyst • Quality Assurance</div>
                <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 6 }}>
                  Focused on System Analysis and Quality Assurance
                </div>
              </div>
            </div>

            <a className="contact-card" href="tel:+6282124050196">
              <div className="contact-icon" aria-hidden>📞</div>
              <div className="contact-info">
                <div className="contact-label">Telepon</div>
                <div className="contact-value">+62 821-2405-0196</div>
              </div>
            </a>

            <a className="contact-card" href="mailto:chelsiasianipar@gmail.com">
              <div className="contact-icon" aria-hidden style={{ background: "linear-gradient(90deg,#06b6d4,#3b82f6)" }}>
                ✉️
              </div>
              <div className="contact-info">
                <div className="contact-label">Email</div>
                <div className="contact-value">chelsiasianipar@gmail.com</div>
              </div>
            </a>

            <a className="contact-card" href="https://chelsia.my.id" target="_blank" rel="noreferrer">
              <div className="contact-icon" aria-hidden style={{ background: "linear-gradient(90deg,#111827,#374151)" }}>
                🔗
              </div>
              <div className="contact-info">
                <div className="contact-label">Portofolio</div>
                <div className="contact-value">chelsia.my.id</div>
              </div>
            </a>

            <div className="contact-card">
              <div className="contact-icon" aria-hidden style={{ background: "linear-gradient(90deg,#ef4444,#fb923c)" }}>
                📍
              </div>
              <div className="contact-info">
                <div className="contact-label">Lokasi</div>
                <div className="contact-value">Tapanuli Utara, Indonesia</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;