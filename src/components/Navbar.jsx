const Navbar = ({ activeSection, isMenuOpen, toggleMenu, scrollToSection }) => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo" onClick={() => scrollToSection('home')}>
            Portfolio
          </div>
          <button
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          {isMenuOpen && (
            <div className="menu-overlay" onClick={toggleMenu}></div>
          )}
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <a
                href="#home"
                className={activeSection === 'home' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('home')
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeSection === 'about' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('about')
                }}
              >
                Tentang
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={activeSection === 'skills' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('skills')
                }}
              >
                Keahlian
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className={activeSection === 'experience' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('experience')
                }}
              >
                Pengalaman & Projek
              </a>
            </li>
            

            <li>
              <a
                href="#education"
                className={activeSection === 'education' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('education')
                }}
              >
                Pendidikan
              </a>
            </li>
            {/* cek */}
            <li>
              <a
                href="#contact"
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('contact')
                }}
              >
                Kontak
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar