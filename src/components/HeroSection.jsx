import { useEffect, useRef } from 'react'
import '../css/HeroSection.css' // pastikan path ini sesuai

const HeroSection = ({ scrollToSection }) => {
  const heroRef = useRef(null)
  const mousePosition = useRef({ x: 0, y: 0 })
  const particlesRef = useRef([])

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY }

      // Custom cursor (jika kamu punya .custom-cursor di DOM)
      const cursor = document.querySelector('.custom-cursor')
      if (cursor) {
        cursor.style.left = `${e.clientX}px`
        cursor.style.top = `${e.clientY}px`
      }

      // Parallax profile photo
      const profilePhoto = document.querySelector('.profile-photo')
      if (profilePhoto && heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height
        profilePhoto.style.transform = `translate(${x * 20}px, ${y * 20}px) scale(1.05)`
      }

      // Floating elements repel from cursor
      const floatingElements = document.querySelectorAll('.floating-element')
      floatingElements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        const elX = rect.left + rect.width / 2
        const elY = rect.top + rect.height / 2
        const distance = Math.hypot(e.clientX - elX, e.clientY - elY)

        if (distance < 150) {
          const angle = Math.atan2(e.clientY - elY, e.clientX - elX)
          const force = (150 - distance) / 150
          el.style.transform = `translate(${Math.cos(angle) * force * 30}px, ${Math.sin(angle) * force * 30}px) scale(${1 + force * 0.2})`
        } else {
          el.style.transform = 'translate(0, 0) scale(1)'
        }
      })
    }

    const createParticle = () => {
      const particle = document.createElement('div')
      particle.className = 'particle'
      const size = Math.random() * 4 + 2
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`
      particle.style.animationDuration = `${Math.random() * 20 + 10}s`
      particle.style.animationDelay = `${Math.random() * 5}s`
      particle.style.opacity = Math.random() * 0.5 + 0.2

      if (heroRef.current) {
        heroRef.current.appendChild(particle)
        particlesRef.current.push(particle)
      }
    }

    for (let i = 0; i < 30; i++) createParticle()

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      particlesRef.current.forEach(p => p?.remove())
      particlesRef.current = []
    }
  }, [])

  return (
    <section id="home" className="section home-section" ref={heroRef}>
      {/* Background Effects */}
      <div className="animated-bg"></div>
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
      <div className="gradient-orb orb-3"></div>

      {/* Floating Decorative Elements */}
      <div className="floating-element floating-1"></div>
      <div className="floating-element floating-2"></div>
      <div className="floating-element floating-3"></div>
      <div className="floating-element floating-4"></div>

      <div className="container">
        <div className="home-content">
          {/* FOTO KIRI */}
          <div className="hero-left">
            <div className="profile-photo-container fade-in">
              <div className="photo-glow"></div>
              <div className="photo-ring"></div>
              <img
                src="/assets/image/profile1.jpg"
                alt="Chelsia Nadia Sianipar"
                className="profile-photo"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextElementSibling.style.display = 'flex'
                }}
              />
              <div className="profile-photo-placeholder" style={{ display: 'none' }}>
                <span>CN</span>
                <small>Chelsia Nadia</small>
              </div>
            </div>
          </div>

          {/* TEKS KANAN */}
          <div className="hero-right">
            <h1 className="home-title fade-in">
              <span className="title-line title-line-black">Building the future, I'm</span>
              <span className="highlight typing-effect name-big">
                Chelsia Nadia Sianipar
              </span>
            </h1>

            <div className="profession-title fade-in">
              Quality Assurance Engineer
            </div>

            <p className="home-subtitle fade-in">
              Manual & Automation Testing
            </p>

            <div className="home-buttons fade-in">
              <button
                className="btn btn-primary pulse-on-hover"
                onClick={() => scrollToSection('experience')}
              >
                <span>Lihat Projek</span>
                <div className="btn-ripple"></div>
              </button>
              <button
                className="btn btn-secondary pulse-on-hover"
                onClick={() => scrollToSection('contact')}
              >
                <span>Hubungi Saya</span>
                <div className="btn-ripple"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
