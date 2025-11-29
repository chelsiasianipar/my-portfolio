import React from "react";
import '../css/ExperienceSection.css' // pastikan path ini sesuai struktur proyekmu

const ExperienceSection = () => {
  const workExperience = {
    badge: "Professional",
    role: "Part-time Web Developer",
    date: "Aug 2025 – Dec 2025",
    title: "PT LPK Mori Silangit",
    company: "North Sumatra",
    description: "Multilingual company profile with integrated student registration system",
    highlights: [
      "Developed company profile website with online student registration platform",
      "Implemented multilingual support (Japanese, English, Indonesian) with dynamic switching",
      "Designed responsive UI layouts aligned with company branding",
      "Collaborated with internal team to deliver production-ready features"
    ],
    tech: ["Laravel", "Vue.js", "MySQL", "i18n"],
    githubUrl: "https://github.com/felixnatanaelbutarbutar/lpk-site.git" // Tambahkan link GitHub di sini
  };

  const projects = [
    {
      role: "Machine Learning Engineer",
      date: "Aug 2024 – Jan 2025",
      title: "IELTS Speaking Evaluation System",
      company: "Web-Based NLP Application",
      description: "Automated evaluation system integrating Whisper, T5-Base, and DeBERTa v3-Base for grammar and coherence analysis",
      highlights: [
        "Integrated Whisper for speech-to-text, T5-Base for grammar correction",
        "DeBERTa v3-Base for semantic coherence evaluation",
        "Deployed with FastAPI backend and Next.js frontend"
      ],
      tech: ["Python", "FastAPI", "Next.js", "Whisper", "PyTorch"],
      githubUrl: "" // Tambahkan link GitHub di sini
    },
    {
      role: "Full Stack Developer",
      date: "Jan 2025 – Jul 2025",
      title: "IT Del Student Information System",
      company: "Institut Teknologi Del",
      description: "Comprehensive campus information system with 24 features and 4 role-based access levels",
      highlights: [
        "Full-stack architecture using Laravel and Inertia.js with React",
        "Secure PostgreSQL database schema for 24 functional features",
        "Implemented RBAC for 4 system roles"
      ],
      tech: ["Laravel", "Inertia.js", "React", "PostgreSQL"],
      githubUrl: "https://github.com/felixnatanaelbutarbutar/PA-II-07-Sistem-Informasi-Kemahasiswaan-IT-DEL.git" // Tambahkan link GitHub di sini
    },
    {
      role: "ML Engineer & Full-Stack Developer",
      date: "Aug 2025 – Dec 2025",
      title: "Student Stress Level Prediction",
      company: "Machine Learning Project",
      description: "Ensemble ML model using 1D-CNN and XGBoost to predict student stress levels",
      highlights: [
        "Data preprocessing, feature engineering, and SMOTE balancing",
        "2-Block 1D-CNN model for embedding extraction",
        "Deployed interactive Streamlit web application"
      ],
      tech: ["Python", "Streamlit", "XGBoost", "TensorFlow"],
      githubUrl: "" // Tambahkan link GitHub di sini
    },
    {
      role: "Mobile Application Developer",
      date: "Aug 2024 – Dec 2024",
      title: "DelCheckIn – Digital Attendance",
      company: "Institut Teknologi Del",
      description: "Mobile app to digitize attendance process for 500+ students and staff",
      highlights: [
        "Complete mobile attendance system for 500+ users",
        "Firebase Authentication and Firestore for real-time data",
        "Reduced attendance processing time by 80%"
      ],
      tech: ["Flutter", "Dart", "Firebase", "Firestore"],
      githubUrl: "https://github.com/felixnatanaelbutarbutar/FLUTTER-ATTENDANCE-APP-USING-FIREBASE.git" // Tambahkan link GitHub di sini
    },
    {
      role: "Backend & Frontend Developer",
      date: "Jan 2024 – May 2024",
      title: "Cinema Ticketing System",
      company: "Desktop Application",
      description: "Desktop cinema management with dynamic seat selection and payment processing",
      highlights: [
        "Dynamic seat selection and validation system",
        "Automated payment calculation and receipt printing",
        "Admin module for movie and showtime management"
      ],
      tech: ["Java", "Java Swing", "PostgreSQL", "JDBC"],
      githubUrl: "https://github.com/felixnatanaelbutarbutar/OOP-JAVA-APLIKASI-TIKET-BIOSKOP-.git" // Tambahkan link GitHub di sini
    },
    {
      role: "Business Concept Strategist",
      date: "Oct 2025 – Dec 2025",
      title: "Toba Essence: Heritage You Can Taste",
      company: "Cultural Tourism Innovation",
      description: "Tourism service concept integrating cultural experiences around Lake Toba",
      highlights: [
        "Market research and business opportunity validation",
        "Comprehensive Business Model Canvas creation",
        "Digital platform prototype design in Figma"
      ],
      tech: ["Figma", "BMC", "Market Analysis", "Strategy"],
      githubUrl: "" // Tambahkan link GitHub di sini (optional untuk business project)
    },
    {
      role: "Web Developer",
      date: "Jan 2024 – May 2024",
      title: "HKBP Church Information System",
      company: "Church Management Platform",
      description: "Digital church management system serving 300+ congregation members",
      highlights: [
        "System architecture and database structure design",
        "Admin dashboard for financial records and announcements",
        "Increased administrative efficiency by 70%"
      ],
      tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
      githubUrl: "https://github.com/felixnatanaelbutarbutar/SISTEM-INFORMASI-HKBP_PEANAJAGAR.git" // Tambahkan link GitHub di sini
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="section-title">Work Experience & Project</h2>

        {/* Work Experience - Full Width Featured */}
        <div className="work-experience-wrapper">
          <div className="category-header">
            <h3 className="category-title">Work Experience</h3>
            <div className="category-line"></div>
          </div>
          
          <article className="work-card featured-work">
            <div className="work-badge">{workExperience.badge}</div>
            <div className="work-header">
              <div className="work-meta">
                <span className="work-role">{workExperience.role}</span>
                <span className="work-date">{workExperience.date}</span>
              </div>
              <h3 className="work-title">{workExperience.title}</h3>
              <p className="work-company">{workExperience.company}</p>
              <p className="work-description">{workExperience.description}</p>
            </div>
            <ul className="work-highlights">
              {workExperience.highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <div className="work-tech">
              {workExperience.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            {workExperience.githubUrl && (
              <a 
                href={workExperience.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="github-link"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
            )}
          </article>
        </div>

        {/* Projects Grid - Asymmetric Layout */}
        <div className="projects-wrapper">
          <div className="category-header">
            <h3 className="category-title">Academic & Personal Projects</h3>
            <div className="category-line"></div>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article 
                key={index} 
                className={`project-card ${index >= 5 ? 'last-row' : ''}`}
              >
                <div className="card-accent"></div>
                <div className="project-meta">
                  <span className="project-role">{project.role}</span>
                  <span className="project-date">{project.date}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-company">{project.company}</p>
                <p className="project-description">{project.description}</p>
                <ul className="project-highlights">
                  {project.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;