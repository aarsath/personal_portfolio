import HeroImg from '../assets/arsath.jfif';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero({ profile }) {
  return (
    <section className="hero-section" id="Hero">
      <div className="hero-copy">
        <p className="eyebrow">{profile.role}</p>
        <h1>Hi, I&apos;m <span>{profile.name}</span> — I build thoughtful web experiences.</h1>
        <p className="hero-role">Based in India, creating clean and useful digital products.</p>
        <div className="hero-actions">
          <a className="btn hero-primary" href="#Projects">View work</a>
          <a className="btn hero-secondary" href="#Contact">Get in touch</a>
        </div>
        <div className="hero-socials">
          <a href={profile.github} className="social-link" aria-label="GitHub"><FaGithub size={22} /></a>
          <a href={profile.linkedin} className="social-link" aria-label="LinkedIn"><FaLinkedin size={22} /></a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-visual-bar" aria-hidden="true"><span></span><span></span><span></span></div>
        <img className="hero-image" src={profile.image || HeroImg} alt={`Portrait of ${profile.name}`} />
        
      </div>
    </section>
  );
}
