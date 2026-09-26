export default function Skills({ skills = [] }) {
  return (
    <section className="projects-section skills-page-section" id="Skills">
      <div className="section-heading">
        <p className="eyebrow">Technical toolkit</p>
        <h2>Skills</h2>
        <p>Technologies and tools I use to build web, AI, and automation projects.</p>
      </div>
      <div className="skill-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
    </section>
  );
}
