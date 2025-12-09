import React from 'react'
import '../css/SkillsSection.css' // pastikan path ini sesuai struktur proyekmu
// Redesigned SkillsSection as a single-file React component
// CSS is embedded so you can drop this file directly into your project

const SKILLS_DATA = [
  {
    id: 'programming',
    title: 'Programming Languages',
    icon: 'Code',
    tags: ['Python', 'Javascript', 'PHP', 'Dart', 'C#', 'TypeScript', 'Golang', 'C']
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Libraries',
    icon: 'Stack',
    tags: ['Laravel', 'FastAPI', 'React.js', 'Flutter', 'Flask', 'Node.js', 'Next.js', 'Streamlit']
  },
  {
    id: 'testing',
    title: 'Testing Tools',
    icon: 'Test',
    tags: ['Manual Testing', 'Selenium', 'Katalon', 'Cypress']
  },
  {
    id: 'database',
    title: 'Database Management',
    icon: 'DB',
    tags: ['MySQL', 'PostgreSQL', 'MongoDB']
  },
  {
    id: 'cloud',
    title: 'Cloud Services',
    icon: 'Cloud',
    tags: ['Amazon Web Services', 'Google Cloud']
  },
  {
    id: 'others',
    title: 'Others',
    icon: 'Tools',
    tags: [
      'Git', 'GitHub', 'Trello', 'SDLC', 'BPMN', 'Bizagi', 'Figma', 'Balsamic', 'CRISP-DM', 'Business Model Canvas',
      'Market Analysis', 'Stakeholder Analysis', 'Creative Thinking', 'Entrepreneurial Thinking'
    ]
  }
]

export default function SkillsSection() {
  return (
    <section id="skills" className="skills-section" aria-label="Skills">

      <div className="skills-container">
        <h2 className="section-title">Skills</h2>
        <p className="section-sub">Toolbox lengkap dari low level sampai cloud & product thinking</p>

        {SKILLS_DATA.map((group) => (
          <article key={group.id} className="skill-panel" tabIndex={0} aria-labelledby={`skill-${group.id}-title`}>
            <div className="skill-header">
              <div className="skill-icon" aria-hidden>{group.icon}</div>
              <div>
                <div id={`skill-${group.id}-title`} className="skill-title">{group.title}</div>
                <div className="skill-sub">{group.tags.length} items</div>
              </div>
            </div>

            <div className="skill-tags" aria-hidden={false}>
              {group.tags.map((t) => (
                <span key={t} className="skill-tag" title={t}>{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
