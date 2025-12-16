import React, { useState, useEffect } from "react";
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
      fullDescription:
        "This project focused on developing and testing a comprehensive information system for Tepi Danau Bistro restaurant. QA performing manual testing to ensure the system functions correctly and is easy to use.",
    },
    {
      id: "work-2",
      title: "IT Del Student Information System",
      company: "Institut Teknologi Del",
      role: "System Analyst & Quality Assurance",
      image: "/assets/image/IT Del Student Information.png",
      tags: ["System Analysis", "Automation Testing", "Manual Testing"],
      fullDescription:
        "A comprehensive student information system designed to manage academic activities.",
    },
    {
      id: "work-3",
      title: "Testing Bookstore",
      company: "Afteroffice",
      role: "Quality Assurance",
      image: "/assets/image/bookstore.png",
      tags: ["Katalon", "Testing", "QA"],
      fullDescription:
        "Quality assurance and automation testing using Katalon Studio.",
    },
  ];

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "unset";
  }, [selectedProject]);

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="section-title">Work Experience & Projects</h2>

        {/* ================= WORK EXPERIENCE ================= */}
        <div className="work-experience-wrapper">
          <div className="category-header">
            <h3 className="category-title">Work Experience</h3>
            <div className="category-line"></div>
          </div>

          <div className="work-grid">
            {workExperiences.map((work) => (
              <div key={work.id} className="work-card">
                <div 
                  className="work-image-card"
                  onClick={() => setSelectedProject(work)}
                >
                  {/* GAMBAR */}
                  <div className="work-image-wrapper">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="work-image"
                    />
                  </div>

                  {/* OVERLAY MUNCUL SAAT HOVER */}
                  <div className="work-overlay">
                    <div className="work-overlay-content">
                      <h3>{work.title}</h3>
                      <p>{work.role}</p>
                      {work.tags && (
                        <div className="work-overlay-tags">
                          {work.tags.map((tag, index) => (
                            <span key={index} className="work-tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
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
            <p>{selectedProject.fullDescription}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExperienceSection;