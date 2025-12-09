import "../css/CertificateSection.css";

const CERTIFICATES = [
  {
    id: "qa-training-afteroffice", // Diubah agar sesuai dengan konten (bukan aws-ml)
    title: "Quality Assurance Certified", // Typo "Quss" diperbaiki
    issuer: "AfterOffice",
    date: "2025",
    type: "Intensive Bootcamp",
    description: "Intensive hands-on training focusing on software testing methodologies, creating comprehensive test cases, executing functional tests, and managing the defect lifecycle to ensure product quality.", 
    skills: ["Automation Testing", "Test Case Design", "Bug Tracking", "Functional Testing",],
    logo: "/assets/image/afteroffice-logo.jpeg", 
    credentialUrl: "", 
    badge: "Software Testing" 
  },
  {
    id: "POSTMANT API",
    title: "Postman API Fundamentals Student Expert certification",
    issuer: "POSTMAN Academy",
    date: "2025",
    type: "Course Completion",
    description: "This is a self-paced course designed for students and beginners to introduce them to the world of APIs (Application Programming Interfaces).",
    skills: ["API Foundational", "Tool Mastery", "Basic Automation", "Data Handling"],
    logo: "/assets/image/postman.png", 
    credentialUrl: "", 
    badge: "Programming"
  },
   {
    id: "qa-training-afteroffice",
    title: "Quality Assurance Certified",
    issuer: "AfterOffice",
    date: "2025",
    type: "Intensive Bootcamp",
    description: "A practical bootcamp focused on core QA skills, from API testing to basic automation and essential QA",
    skills: ["Automation Testing", "Test Case Design", "Basic Automation", "Functional Testing"],
    logo: "/assets/image/afteroffice-logo.jpeg", 
    credentialUrl: "", 
    badge: "Software Testing"
  },
//   {
//     id: "cert-3",
//     title: "Your Next Certificate",
//     issuer: "Institution Name",
//     date: "Year",
//     type: "Certification Type",
//     description: "Brief description of the certificate and what you learned",
//     skills: ["Skill 1", "Skill 2", "Skill 3"],
//     logo: "/assets/image/cert-logo.png",
//     credentialUrl: "",
//     badge: "Category"
//   }
];

const CertificateCard = ({ item, index }) => {
  return (
    <article
      className="certificate-card reveal"
      tabIndex={0}
      aria-labelledby={`${item.id}-title`}
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div className="card-left">
        <div className="timeline-marker" aria-hidden="true">
          <span className="marker-dot" />
        </div>

        <div className="cert-logo" aria-hidden="true">
          <img 
            src={item.logo} 
            alt={`Logo ${item.issuer}`}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="cert-logo-placeholder" style={{ display: 'none' }}>
            <span>🎓</span>
          </div>
        </div>

        <div className="meta">
          <div className="cert-date">{item.date}</div>
          <div className="cert-badge">{item.badge}</div>
        </div>
      </div>

      <div className="card-right">
        <div className="cert-header">
          <h3 id={`${item.id}-title`} className="cert-title">{item.title}</h3>
          <span className="cert-type">{item.type}</span>
        </div>
        
        <p className="cert-issuer">{item.issuer}</p>
        <p className="cert-description">{item.description}</p>

        <div className="cert-skills">
          {item.skills.map((skill, i) => (
            <span key={i} className="skill-tag">{skill}</span>
          ))}
        </div>

        {item.credentialUrl && (
          <a 
            href={item.credentialUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="credential-link"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            View Credential
          </a>
        )}
      </div>
    </article>
  );
};

const CertificateSection = () => {
  return (
    <section id="certificates" className="section certificate-section" aria-labelledby="certificate-title">
      <div className="certificate-container">
        <h2 id="certificate-title" className="section-title">Certificates & Training</h2>


        <div className="certificate-grid">
          <div className="timeline-line" aria-hidden="true" />
          {CERTIFICATES.map((item, i) => (
            <CertificateCard item={item} index={i} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;