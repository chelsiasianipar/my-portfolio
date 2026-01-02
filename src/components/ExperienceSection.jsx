import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/ExperienceSection.css";

const ExperienceSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const workExperiences = [
    {
      id: "work-1",
      role: "System Analyst and Quality Assurance",
      title: "System Information Tepi Danau Bistro",
      company: "Final Project",
      image: "/assets/image/tepi-danau.png",
      tags: ["System Analyst", "Manual Testing"],
      overview:
        "Analyzed and tested an information system to support business operations at Tepi Danau Bistro.",
      responsibilities: [
        "Analyzed business requirements and system flow",
        "Created test cases based on functional requirements",
        "Performed manual testing and documented bugs",
      ],
      tools: ["Google Docs", "Spreadsheet", "Manual Testing"],
    },
    {
      id: "work-2",
      role: "System Analyst & Quality Assurance",
      title: "IT Del Student Information System",
      company: "Institut Teknologi Del",
      image: "/assets/image/IT Del Student Information.png",
      tags: ["System Analysis", "Manual Testing"],
      overview:
        "Conducted system analysis and functional testing for a multi-role student information system.",
      responsibilities: [
        "Analyzed user roles and access permissions",
        "Validated system features based on requirements",
        "Performed functional testing",
      ],
      tools: ["Documentation", "Manual Testing"],
    },
    {
      id: "work-3",
      role: "Quality Assurance",
      title: "Testing Bookstore",
      company: "Afteroffice",
      image: "/assets/image/bookstore.png",
      tags: ["Katalon", "Automation"],
      overview:
        "Performed manual and automation testing for an e-commerce bookstore application.",
      responsibilities: [
        "Created and executed test cases",
        "Built automation test scripts using Katalon Studio",
        "Reported and verified bugs",
      ],
      tools: ["Katalon Studio", "Postman"],
    },
    {
      id: "work-4",
      role: "UI/UX",
      title: "Redesign Rumah Kreatif Toba",
      company: "Academic Project",
      image: "/assets/image/rumah_kreatif_toba.png",
      tags: ["UI/UX", "Documentation"],
      overview:
        "Redesigned the user interface to improve usability, navigation flow, and visual consistency.",
      responsibilities: [
        "Analyzed existing user flow and interface issues",
        "Redesigned wireframes and layout structure",
        "Documented UI/UX design decisions",
      ],
      tools: ["Figma", "Documentation"],
    },
  ];

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "unset";
  }, [selectedProject]);

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="section-title">Work Experience</h2>

        <div className="work-grid">
          {workExperiences.map((work) => (
            <div key={work.id} className="work-card">
              <div
                className="work-image-card"
                onClick={() => setSelectedProject(work)}
              >
                <div className="work-image-wrapper">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="work-image"
                  />
                </div>

                {/* OVERLAY */}
                <div className="work-overlay">
                  <div className="work-overlay-content">
                    <h3>{work.title}</h3>
                    <p>{work.role}</p>

                    <div className="work-overlay-tags">
                      {work.tags.map((tag, i) => (
                        <span key={i} className="work-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* 🔹 BUTTON VIEW PROJECT DI DEPAN (TAMBAHAN SAJA) */}
                    <Link
                      to={`/projects/${work.id}`}
                      className="view-detail-btn"
                      style={{ marginTop: "20px" }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Project →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL (TIDAK DIUBAH) */}
      {selectedProject && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>

            <h2>{selectedProject.title}</h2>
            <p><strong>Role:</strong> {selectedProject.role}</p>
            <p><strong>Company:</strong> {selectedProject.company}</p>

            <h3>Overview</h3>
            <p>{selectedProject.overview}</p>

            <h3>Responsibilities</h3>
            <ul>
              {selectedProject.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h3>Tools</h3>
            <p>{selectedProject.tools.join(", ")}</p>

            <div style={{ marginTop: "24px", textAlign: "right" }}>
              <Link
                to={`/projects/${selectedProject.id}`}
                className="view-detail-btn"
                onClick={() => setSelectedProject(null)}
              >
                View Full Project →
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExperienceSection;
