import { useEffect, useRef } from 'react'

const HeroSection = ({ scrollToSection }) => {
  const heroRef = useRef(null)
  const mousePosition = useRef({ x: 0, y: 0 })
  const particlesRef = useRef([])

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY }

      // Update cursor trail
      const cursor = document.querySelector('.custom-cursor')
      if (cursor) {
        cursor.style.left = `${e.clientX}px`
        cursor.style.top = `${e.clientY}px`
      }

      // Parallax effect untuk foto profil
      const profilePhoto = document.querySelector('.profile-photo')
      if (profilePhoto && heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height

        profilePhoto.style.transform = `translate(${x * 20}px, ${y * 20}px) scale(1.05)`
      }

      // Floating elements interaction
      const floatingElements = document.querySelectorAll('.floating-element')
      floatingElements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        const elX = rect.left + rect.width / 2
        const elY = rect.top + rect.height / 2
        const distance = Math.sqrt(
          Math.pow(e.clientX - elX, 2) + Math.pow(e.clientY - elY, 2)
        )

        if (distance < 150) {
          const angle = Math.atan2(e.clientY - elY, e.clientX - elX)
          const force = (150 - distance) / 150
          el.style.transform = `translate(${Math.cos(angle) * force * 30}px, ${Math.sin(angle) * force * 30}px) scale(${1 + force * 0.2})`
        }
      })
    }

    // Create particles
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

    // Initialize particles
    for (let i = 0; i < 30; i++) {
      createParticle()
    }

    const particles = [...particlesRef.current]

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      particles.forEach(particle => {
        if (particle && particle.parentNode) {
          particle.remove()
        }
      })
    }
  }, [])

  return (
    <section id="home" className="section home-section" ref={heroRef}>
      <div className="animated-bg"></div>
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
      <div className="gradient-orb orb-3"></div>

      {/* Floating Elements */}
      <div className="floating-element floating-1"></div>
      <div className="floating-element floating-2"></div>
      <div className="floating-element floating-3"></div>
      <div className="floating-element floating-4"></div>

      <div className="container">
        <div className="home-content">
          <div className="profile-photo-container fade-in">
            <div className="photo-glow"></div>
            <div className="photo-ring"></div>
            <img
              src="/src/assets/profile.jpg"
              alt="Profile"
              className="profile-photo"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            <div className="profile-photo-placeholder" style={{ display: 'none' }}>
              <span>Foto Profil</span>
              <small>Tempatkan foto Anda di: src/assets/profile.jpg</small>
            </div>
          </div>
          <h1 className="home-title fade-in">
            <span className="title-line">Halo, Saya</span>
            <span className="highlight typing-effect">Felix Natanael Butarbutar</span>
          </h1>
          <p className="home-subtitle fade-in">
            <span className="subtitle-text">Full Stack Developer</span>
            <span className="subtitle-separator"> & </span>
          </p>
          <p className="home-description fade-in">
            Passionate and highly motivated developer with strong technical expertise in modern frameworks and emerging technologies. Experienced in managing the full application development lifecycle from planning and system design to implementation, deployment, and maintenance. Consistently deliver reliable, scalable, and high-quality solutions for both web and mobile platforms.
          </p>
          <div className="home-buttons fade-in">
            <button
              className="btn btn-primary pulse-on-hover"
              onClick={() => scrollToSection('projects')}
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
          <div className="scroll-indicator">
            <div className="mouse"></div>
            <div className="scroll-arrow"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection