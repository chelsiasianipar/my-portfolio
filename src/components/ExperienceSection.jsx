import React, { useState, useEffect, useRef } from "react";
import '../css/ExperienceSection.css'

const ExperienceSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const workExperience = {
    id: 'work-1',
    badge: "Academic Project",
    role: "System Analyst and Quality Assurance",
    date: "February 2024 – June 2024",
    title: "System Information Tepi Danau Bistro",
    company: "Final Project",
    description: "QA performing manual testing to ensure the system functions correctly and is easy to use.",
    image: "/assets/images/tepi-danau.jpg",
    highlights: [
      "Executed manual test cases for core features",
      "Identified and documented bugs",
      "Validated data accuracy and workflow behavior",
      "Performed regression testing after updates"
    ],
    tech: ["Manual Testing", "Test Case Design", "Bug Reporting"],
    githubUrl: "https://github.com/chelsiasianipar/System-Information-Tepi-Danau-Bistro.git",
    fullDescription: "This project focused on developing and testing a comprehensive information system for Tepi Danau Bistro restaurant. As QA, I performed extensive manual testing to ensure all features worked correctly and provided a seamless user experience.",
    responsibilities: [
      "Created comprehensive test case documentation",
      "Executed functional and regression testing",
      "Collaborated with developers for bug resolution",
      "Ensured data integrity across all modules"
    ]
  };

  const projects = [
    {
      id: 'project-1',
      role: "System Analyst and Quality Assurance",
      date: "Feb 2024 – June 2024",
      title: "IT Del Student Information System",
      company: "Institut Teknologi Del",
      description: "Comprehensive campus information system with 24 features and 4 role-based access levels",
      image: "/assets/images/itdel-system.jpg",
      highlights: [
        "Executed manual end-to-end test scenarios for critical workflows",
        "Documented defects and coordinated fixes with developers"
      ],
      tech: ["Manual Testing", "Test Case Documentation", "Bug Tracking"],
      githubUrl: "https://github.com/felixnatanaelbutarbutar/PA-II-07-Sistem-Informasi-Kemahasiswaan-IT-DEL.git",
      fullDescription: "A comprehensive student information system designed to manage academic activities, student records, and administrative processes at Institut Teknologi Del.",
      responsibilities: [
        "Performed comprehensive testing across 24 different features",
        "Validated role-based access control for 4 user types",
        "Created detailed test documentation",
        "Ensured system security and data protection"
      ]
    },
    {
      id: 'project-2',
      role: "Quality Assurance",
      date: "August 2024 – November 2024",
      title: "Testing Bookstore",
      company: "Afteroffice",
      description: "Quality Assurance for a bookstore web application, focusing on test automation using Katalon Studio.",
      image: "/assets/images/bookstore.jpg",
      highlights: [
        "Created and automated test cases for key bookstore features using Katalon Studio",
        "Executed automated regression tests for critical workflows",
        "Documented defects and collaborated with developers for resolution"
      ],
      tech: ["Katalon Studio", "Test Automation", "Manual Testing", "Bug Tracking"],
      githubUrl: "https://github.com/chelsiasianipar/Pengujian-Automation-Katalon.git",
      fullDescription: "Automated testing project for an online bookstore application. Utilized Katalon Studio to create comprehensive test suites covering shopping cart, checkout process, and inventory management.",
      responsibilities: [
        "Developed automated test scripts using Katalon Studio",
        "Performed API testing for backend services",
        "Created test data and maintained test environments",
        "Generated detailed test reports and metrics"
      ]
    }
  ];

  const allProjects = [workExperience, ...projects];

  // Close modal on ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent body scroll when modal open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="section-title">Work Experience & Project</h2>

        {/* Work Experience - Featured with Image */}
        <div className="work-experience-wrapper">
          <div className="category-header">
            <h3 className="category-title">Work Experience</h3>
            <div className="category-line"></div>
          </div>
          
          <article 
            className="work-card featured-work"
            onClick={() => openModal(workExperience)}
          >
            <div className="featured-image-wrapper">
              <img 
                src={workExperience.image} 
                alt={workExperience.title}
                className="featured-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="featured-image-placeholder">
                <span>{workExperience.title.charAt(0)}</span>
              </div>
              <div className="featured-overlay">
                <span className="view-details">View Details →</span>
              </div>
            </div>

            <div className="featured-content">
              <div className="work-badge">{workExperience.badge}</div>

              <div className="work-header">
                <div className="work-meta">
                  <span className="work-role">{workExperience.role}</span>
                </div>

                <h3 className="work-title">{workExperience.title}</h3>
                <p className="work-company">{workExperience.company}</p>
                <p className="work-date work-date--below">{workExperience.date}</p>
                <p className="work-description">{workExperience.description}</p>
              </div>

              <ul className="work-highlights">
                {workExperience.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="work-tech">
                {workExperience.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          </article>
        </div>

        {/* Projects Grid with Images */}
        <div className="projects-wrapper">
          <div className="category-header">
            <h3 className="category-title">Academic & Personal Projects</h3>
            <div className="category-line"></div>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article 
                key={index} 
                className="project-card"
                onClick={() => openModal(project)}
              >
                <div className="project-image-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="project-image-placeholder">
                    <span>{project.title.charAt(0)}</span>
                  </div>
                  <div className="project-overlay">
                    <span className="view-details">View Details →</span>
                  </div>
                </div>

                <div className="card-accent"></div>

                <div className="project-meta">
                  <span className="project-role">{project.role}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-company">{project.company}</p>
                <p className="project-date project-date--below">{project.date}</p>
                <p className="project-description">{project.description}</p>

                <ul className="project-highlights">
                  {project.highlights.slice(0, 2).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="project-tech">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="tech-badge">{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close modal">
              ✕
            </button>

            <div className="modal-header">
              <button className="back-button" onClick={closeModal}>
                ← Back To Projects
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-hero">
                <h1 className="modal-title">{selectedProject.title}</h1>
                <p className="modal-subtitle">{selectedProject.company}</p>
              </div>

              <div className="modal-image-container">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="modal-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="modal-image-placeholder">
                  <span>{selectedProject.title.charAt(0)}</span>
                </div>
              </div>

              <div className="modal-details">
                <div className="detail-section">
                  <h3>About</h3>
                  <p>{selectedProject.fullDescription}</p>
                </div>

                <div className="detail-section">
                  <h3>Role & Duration</h3>
                  <p><strong>Role:</strong> {selectedProject.role}</p>
                  <p><strong>Duration:</strong> {selectedProject.date}</p>
                </div>

                <div className="detail-section">
                  <h3>Key Responsibilities</h3>
                  <ul>
                    {selectedProject.responsibilities.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="detail-section">
                  <h3>Technologies Used</h3>
                  <div className="tech-tags-modal">
                    {selectedProject.tech.map((tech) => (
                      <span key={tech} className="tech-tag-modal">{tech}</span>
                    ))}
                  </div>
                </div>

                {selectedProject.githubUrl && (
                  <div className="detail-section">
                    <a 
                      href={selectedProject.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="github-link-modal"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View on GitHub
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExperienceSection;