import React from "react";

const linkedInUrl = "https://www.linkedin.com/in/madhubani-kora-08ab44320";

const contact = [
  ["Email", "madhubanikora@gmail.com"],
  ["Phone", "7439315876"],
  ["Location", "Kolkata, West Bengal"],
  ["LinkedIn", linkedInUrl],
  ["Portfolio", ""],
];

const skills = [
  "Hand Drawing & Sketching",
  "Painting & Illustration",
  "Visual Communication",
  "Design Thinking",
  "Creative Problem Solving",
];

const software = ["Adobe Fresco", "Adobe Express", "Canva"];
const languages = [
  "English – Professional Proficiency",
  "Bengali – Native Proficiency",
  "Hindi – Professional Proficiency",
  "French – Basic Proficiency",
];

const interests = [
  "UI/UX Design",
  "Branding & Identity Design",
  "Graphic Design",
  "Typography",
  "Reading Books",
  "Visual Storytelling",
  "Digital Illustration",
  "Design Research",
];

const projects = [
  "Temple Monastery Landscape Illustration",
  "Cyanotype Print Series",
  "Relief Block Print",
  "Atmospheric Perspective Painting",
  "Aesop Botanical Campaign",
  "Rusted Cylinder Study",
];

const achievements = [
  "Collaborative Installation Exhibition, College Annual Exhibition | 2026",
  "Collaborative Personal Installation Project | 2026",
  "Collaborative Project Week – Anime India Kolkata | 2026",
];

const certifications = ["Worldbuilding Hackathon – Winning Team | 2026"];

function ContourDecoration() {
  return (
    <svg className="contour-decoration" viewBox="0 0 520 180" aria-hidden="true">
      <path d="M22 132 C78 44 148 28 232 68 C312 106 344 24 448 36 C500 42 514 88 486 132 C452 184 346 156 294 124 C214 74 146 110 96 154 C58 188 26 174 22 132Z" />
      <path d="M64 130 C104 66 166 56 232 86 C300 118 338 56 428 62 C466 66 478 94 456 126 C424 170 340 142 298 116 C226 72 170 102 126 140 C94 168 68 162 64 130Z" />
      <path d="M108 128 C138 90 180 86 230 106 C284 128 326 92 398 92 C422 92 430 106 414 126 C386 158 334 134 296 116 C236 86 194 104 154 132 C130 150 112 148 108 128Z" />
      <path d="M154 126 C178 108 204 108 232 120 C264 134 302 116 356 116 C372 116 376 124 364 136 C342 154 314 136 286 124 C246 106 214 114 184 132 C168 142 156 140 154 126Z" />
    </svg>
  );
}

function Section({ title, children, className = "" }: { title: string; children?: React.ReactNode; className?: string }) {
  return (
    <section className={`resume-section ${className}`}>
      <h2>{title}</h2>
      <div className="section-rule" />
      {children && <div className="section-content">{children}</div>}
    </section>
  );
}

function ContactList() {
  return (
    <dl className="contact-list">
      {contact.map(([label, value]) => (
        <div className="contact-row" key={label}>
          <dt>{label}</dt>
          <dd>
            {label === "LinkedIn" ? (
              <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                linkedin.com/in/madhubani-kora-08ab44320
              </a>
            ) : (
              value || <span className="empty-value">&nbsp;</span>
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function SimpleList({ items }: { items: string[] }) {
  return (
    <ul className="simple-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function Education() {
  return (
    <div className="education-block">
      <p className="institution">École Intuit Lab × Techno India University</p>
      <p>Bachelor of Design (B.Des.) in Digital Product Design</p>
      <p>2025–2029</p>
    </div>
  );
}

export default function App() {
  return (
    <main className="resume-shell">
      <article className="resume-page" aria-label="Madhubani Kora resume">
        <header className="resume-header">
          <ContourDecoration />
          <div className="header-copy">
            <h1>MADHUBANI KORA</h1>
            <p className="student-title">Digital Product Design Student</p>
            <p className="tagline">Aspiring UI/UX Designer &amp; Design Researcher</p>
          </div>
        </header>

        <div className="header-rule" />

        <div className="resume-grid">
          <aside className="left-column" aria-label="Resume details">
            <Section title="Contact">
              <ContactList />
            </Section>
            <Section title="Skills">
              <SimpleList items={skills} />
            </Section>
            <Section title="Software">
              <SimpleList items={software} />
            </Section>
            <Section title="Languages">
              <SimpleList items={languages} />
            </Section>
            <Section title="Interests">
              <SimpleList items={interests} />
            </Section>
          </aside>

          <section className="right-column" aria-label="Resume profile">
            <Section title="About">
              <p>
                First-year Bachelor of Design student specializing in Digital Product Design with a strong foundation in
                traditional art, illustration, and visual communication. Passionate about UI/UX design and human-centred
                problem solving, with a growing interest in design research and creating meaningful digital experiences
                through creativity, curiosity, and continuous learning.
              </p>
            </Section>
            <Section title="Education">
              <Education />
            </Section>
            <Section title="Selected Projects">
              <SimpleList items={projects} />
            </Section>
            <Section title="Achievements">
              <SimpleList items={achievements} />
            </Section>
            <Section title="Certifications">
              <SimpleList items={certifications} />
            </Section>
          </section>
        </div>
      </article>
    </main>
  );
}
