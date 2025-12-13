import { useEffect, useRef } from 'react'

const HeroSection = ({ scrollToSection }) => {
  const heroRef = useRef(null)
  const mousePosition = useRef({ x: 0, y: 0 })
  const particlesRef = useRef([])

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY }

      const cursor = document.querySelector('.custom-cursor')
      if (cursor) {
        cursor.style.left = `${e.clientX}px`
        cursor.style.top = `${e.clientY}px`
      }

      const profilePhoto = document.querySelector('.profile-photo')
      if (profilePhoto && heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height
        profilePhoto.style.transform = `translate(${x * 20}px, ${y * 20}px) scale(1.05)`
      }

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
      <style>{`
        .home-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          background: #ffffff;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInHero 1.2s ease-out forwards;
        }

        @keyframes fadeInHero {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animated-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(240, 240, 240, 0.3), rgba(250, 250, 250, 0.3));
          animation: bgShift 15s ease infinite;
        }

        @keyframes bgShift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, 20px) scale(1.05); }
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.3;
          animation: float 20s ease-in-out infinite;
        }

        .orb-1 {
          width: 400px;
          height: 400px;
          background: #f0f0f0;
          top: -100px;
          left: -100px;
        }

        .orb-2 {
          width: 300px;
          height: 300px;
          background: #e8e8e8;
          bottom: -50px;
          right: -50px;
          animation-delay: -5s;
        }

        .orb-3 {
          width: 250px;
          height: 250px;
          background: #f5f5f5;
          top: 50%;
          right: 10%;
          animation-delay: -10s;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, 30px); }
        }

        .floating-element {
          position: absolute;
          width: 60px;
          height: 60px;
          background: rgba(200, 200, 200, 0.2);
          border-radius: 15px;
          backdrop-filter: blur(10px);
          transition: transform 0.3s ease;
        }

        .floating-1 { top: 15%; left: 10%; animation: floatSlow 8s ease-in-out infinite; }
        .floating-2 { top: 60%; right: 15%; animation: floatSlow 10s ease-in-out infinite; }
        .floating-3 { bottom: 20%; left: 20%; animation: floatSlow 12s ease-in-out infinite; }
        .floating-4 { top: 30%; right: 25%; animation: floatSlow 9s ease-in-out infinite; }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        .particle {
          position: absolute;
          background: rgba(150, 150, 150, 0.3);
          border-radius: 50%;
          pointer-events: none;
          animation: particleFloat linear infinite;
        }

        @keyframes particleFloat {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          width: 100%;
          position: relative;
          z-index: 1;
        }

        .home-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
          flex-wrap: wrap;
        }

        /* Desktop: foto di kiri */
        @media (min-width: 769px) {
          .hero-left {
            flex: 0 0 auto;
            order: 1;
          }
          
          .hero-right {
            flex: 1;
            order: 2;
          }
        }

        /* Mobile: foto di tengah atas */
        @media (max-width: 768px) {
          .home-content {
            flex-direction: column;
            text-align: center;
            gap: 40px;
          }

          .hero-left {
            order: 1;
            width: 100%;
            display: flex;
            justify-content: center;
          }
          
          .hero-right {
            order: 2;
            width: 100%;
          }

          .home-buttons {
            justify-content: center !important;
          }
        }

        .profile-photo-container {
          position: relative;
          width: 300px;
          height: 300px;
        }

        @media (max-width: 768px) {
          .profile-photo-container {
            width: 250px;
            height: 250px;
          }
        }

        @media (max-width: 480px) {
          .profile-photo-container {
            width: 200px;
            height: 200px;
          }
        }

        .photo-glow {
          position: absolute;
          inset: -20px;
          background: linear-gradient(45deg, #667eea, #764ba2, #f093fb);
          border-radius: 50%;
          filter: blur(30px);
          opacity: 0.6;
          animation: glowPulse 3s ease-in-out infinite;
        }

        @keyframes glowPulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }

        .photo-ring {
          position: absolute;
          inset: -10px;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          animation: ringRotate 10s linear infinite;
        }

        @keyframes ringRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .profile-photo {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 5px solid rgba(255, 255, 255, 0.2);
          transition: transform 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .profile-photo-placeholder {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea, #764ba2);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          border: 5px solid rgba(255, 255, 255, 0.2);
        }

        .profile-photo-placeholder span {
          font-size: 48px;
        }

        .profile-photo-placeholder small {
          font-size: 14px;
          opacity: 0.8;
        }

        .home-title {
          font-size: 3rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 20px;
          color: #333333;
        }

        @media (max-width: 768px) {
          .home-title {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .home-title {
            font-size: 1.5rem;
          }
        }

        .title-line-black {
          display: block;
          color: #666666;
          font-size: 1.5rem;
          margin-bottom: 10px;
        }

        @media (max-width: 768px) {
          .title-line-black {
            font-size: 1.2rem;
          }
        }

        .highlight {
          display: block;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s ease-in-out infinite;
        }

        @keyframes shimmer {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.2); }
        }

        .profession-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #444444;
          margin-bottom: 15px;
        }

        @media (max-width: 768px) {
          .profession-title {
            font-size: 1.2rem;
          }
        }

        .home-subtitle {
          font-size: 1.2rem;
          color: #666666;
          margin-bottom: 40px;
          line-height: 1.8;
        }

        @media (max-width: 768px) {
          .home-subtitle {
            font-size: 1rem;
          }
        }

        .home-buttons {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .btn {
          padding: 15px 35px;
          font-size: 1rem;
          font-weight: 600;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        @media (max-width: 480px) {
          .btn {
            padding: 12px 28px;
            font-size: 0.9rem;
          }
        }

        .btn-primary {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
        }

        .btn-secondary {
          background: transparent;
          color: #667eea;
          border: 2px solid #667eea;
        }

        .btn-secondary:hover {
          background: rgba(102, 126, 234, 0.1);
          transform: translateY(-3px);
        }

        .btn-ripple {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
          transform: scale(0);
          opacity: 0;
          pointer-events: none;
        }

        .btn:active .btn-ripple {
          animation: ripple 0.6s ease-out;
        }

        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }

        .fade-in {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }

        .fade-in:nth-child(1) { animation-delay: 0.2s; }
        .fade-in:nth-child(2) { animation-delay: 0.4s; }
        .fade-in:nth-child(3) { animation-delay: 0.6s; }
        .fade-in:nth-child(4) { animation-delay: 0.8s; }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

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
          {/* FOTO */}
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

          {/* TEKS */}
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