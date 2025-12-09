import React from "react";
import '../css/AboutSection.css' // pastikan path ini sesuai struktur proyekmu


/**
 * AboutSection — versi minimal tanpa foto & tanpa Skill Snapshot.
 * Tombol Download CV mengarah ke: /assest/pdf/CV_FelixNatanaelButarbutar.pdf
 * (gunakan path persis yang kamu taruh di folder public)
 */

const IconDownload = ({ className = "" }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M21 15v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 15V3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const AboutSection = () => {
  const cvPath = "/assest/pdf/CV_FelixNatanaelButarbutar.pdf"; // path sesuai yang kamu sebutkan

  return (
    <section id="about" className="about-section">


      <div className="about-wrap">
        <div className="about-grid" role="region" aria-label="Tentang saya">

          {/* LEFT */}
          <div className="about-left">
            <h3 className="about-title">About Me</h3>
            <p className="about-sub">System Analyst • Quality Assurance</p>

            <div className="about-body">
              <p>
              I am interested in <strong>System Analysis</strong> and <strong>Quality Assurance</strong>, with experience in understanding user needs, mapping business processes, and translating them into clear system requirements.
              </p>
              <p>
              I design and execute test cases, document testing results, and ensure that system features function properly and meet user expectations.
              </p>
              <p>
              I am responsible, detail-oriented, and motivated to contribute effectively—both independently and within a team—to support the development of reliable and well-structured systems.
              </p>


            </div>

            {/* CTA: Download CV */}
            <div style={{ marginTop: 18 }}>
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

          {/* RIGHT */}
          <aside className="about-right" aria-label="Kontak dan profil">
            <div className="profile" role="article" aria-label="Profil singkat">
              <div className="profile-meta">
                <div className="profile-name">Chelsia Nadia Sianipar</div>
                <div className="profile-role">System Analyst • Quality Assurance</div>
                <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 6 }}>Focused on System Analyst and Quality Assurance</div>
              </div>
            </div>

            <a className="contact-card" href="tel:+6285142232595">
              <div className="contact-icon" aria-hidden>📞</div>
              <div className="contact-info">
                <div className="contact-label">Telepon</div>
                <div className="contact-value">+62 821-2405-0196</div>
              </div>
            </a>

            <a className="contact-card" href="mailto:felixnatb@gmail.com">
              <div className="contact-icon" aria-hidden style={{ background: "linear-gradient(90deg,#06b6d4,#3b82f6)" }}>✉️</div>
              <div className="contact-info">
                <div className="contact-label">Email</div>
                <div className="contact-value">chelsiasianipar@gmail.com</div>
              </div>
            </a>

              <a className="contact-card" href="https://chelsia.my.id" target="_blank" rel="noreferrer">
              <div className="contact-icon" aria-hidden style={{ background: "linear-gradient(90deg,#111827,#374151)" }}>🔗</div>
              <div className="contact-info">
                <div className="contact-label">Portofolio</div>
                <div className="contact-value">chelsia.my.id</div>
             </div>
            </a>


            <div className="contact-card">
              <div className="contact-icon" aria-hidden style={{ background: "linear-gradient(90deg,#ef4444,#fb923c)" }}>📍</div>
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
