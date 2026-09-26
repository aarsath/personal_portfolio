import AboutImg from '../assets/about.png';

export default function About({ profile, skills, showSkills = true }) {
  return <section className="about-section" id="About">
    <div className="about-image-wrap"><img src={AboutImg} alt="About Abdul Arsath" /></div>
    <div className="about-copy">
      <p className="eyebrow">A little context</p>
      <h2>About me</h2>
      <p>{profile.bio}</p>
      {showSkills && <div className="skills-block" id="Skills">
        <p className="eyebrow">Skills I use</p>
        <div className="skill-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
      </div>}
    </div>
  </section>;
}
