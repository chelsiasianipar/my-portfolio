import React from "react";
import "../css/EducationSection.css";

const EDUCATION = [
  {
    id: "itdel",
    title: "Institut Teknologi Del",
    date: "Aug 2023 — Sep 2026 (Expected)",
    score: "IPK 3.35 / 4.00",
    location: "Laguboti, Toba, North Sumatra",
    degree: "Diploma — Information Technology",
    highlights: [
      { icon: "📚", text: "Focus: Software Development & System Design" },
      { icon: "🏆", text: "3rd Winner — Coding Day Competition 2025" }
    ],
    logo: "/assets/image/logo1.jpg",
    chips: ["Diploma (D3)", "Active Student"]
  },
  {
    id: "sma",
    title: "SMA Swasta Bintang Timur 1 Balige",
    date: "Jul 2020 — Apr 2023",
    score: null,
    location: "Balige, Toba, North Sumatra",
    degree: "Science Major",
    highlights: [{ icon: "🔬", text: "Focus: Mathematics & Natural Sciences" }],
    logo: "/assets/image/logo2.png",
    chips: ["High School", "Science Major"]
  }
];

const EducationCard = ({ item, index }) => {
  return (
    <article
      className="education-card reveal"
      tabIndex={0}
      aria-labelledby={`${item.id}-title`}
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div className="card-left">
        <div className="timeline-marker" aria-hidden>
          <span className="marker-dot" />
        </div>

        <div className="school-logo" aria-hidden>
          <img src={item.logo} alt={`Logo ${item.title}`} />
        </div>

        <div className="meta">
          <div className="edu-date">{item.date}</div>
          {item.score && <div className="edu-score">{item.score}</div>}
        </div>
      </div>

      <div className="card-right">
        <h3 id={`${item.id}-title`} className="edu-school">{item.title}</h3>
        <p className="edu-location">{item.location}</p>
        <p className="edu-degree">{item.degree}</p>

        <ul className="education-highlights">
          {item.highlights.map((h, i) => (
            <li key={i} className="highlight-item">
              <span className="highlight-badge" aria-hidden>{h.icon}</span>
              <span className="highlight-text">{h.text}</span>
            </li>
          ))}
        </ul>

        <div className="card-footer">
          {item.chips.map((c, idx) => (
            <span key={idx} className={`chip ${idx === 1 ? "outline" : ""}`}>{c}</span>
          ))}
        </div>
      </div>
    </article>
  );
};

const EducationSection = () => {
  return (
    <section id="education" className="section education-section" aria-labelledby="education-title">
      <div className="education-container">
        <h2 id="education-title" className="section-title">Education</h2>

        <div className="education-grid">
          <div className="timeline-line" aria-hidden />
          {EDUCATION.map((item, i) => (
            <EducationCard item={item} index={i} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
