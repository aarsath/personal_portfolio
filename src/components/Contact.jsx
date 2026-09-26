import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Contact({ profile }) {
  const cards = [
    { href: `mailto:${profile.email}`, icon: <FaEnvelope />, title: 'Email', text: profile.email },
    { href: `tel:${profile.phone.replace(/\s/g, '')}`, icon: <FaPhone />, title: 'Phone / WhatsApp', text: profile.phone },
    { href: profile.linkedin, icon: <FaLinkedin />, title: 'LinkedIn', text: 'Connect professionally' },
    { href: profile.github, icon: <FaGithub />, title: 'GitHub', text: 'View my projects' },
    { href: profile.instagram, icon: <FaInstagram />, title: 'Instagram', text: 'Follow for updates' }
  ];

  return (
    <section className="contact-section" id="Contact">
      <div className="contact-inner">
        <div className="section-heading center">
          <p className="eyebrow">Let&apos;s connect</p>
          <h2>Contact</h2>
          <p>Get in touch through any of these platforms</p>
        </div>
        <div className="contact-grid">
          {cards.map((card) => (
            <a className="contact-card" key={card.title} href={card.href} target={card.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
              <span>{card.icon}</span><div><h3>{card.title}</h3><p>{card.text}</p></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
