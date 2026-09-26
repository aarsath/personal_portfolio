import { FaBuilding, FaRegCalendarAlt } from 'react-icons/fa';

export default function Certificate({ certificates = [] }) {
  const scroll = (amount) => document.querySelector('.certificates-scroll')?.scrollBy({ left: amount, behavior: 'smooth' });

  return (
    <section className="certificate-section" id="Certificate">
      <div className="certificate-header"><h2 className="certificate-title">Certifications</h2></div>
      <div className="certificates-container">
        <button className="scroll-button left" onClick={() => scroll(-300)} aria-label="Scroll certificates left">&#8249;</button>
        <div className="certificates-scroll">
          {certificates.map((cert) => (
            <article key={cert.id} className="certificate-card">
              <div className={`certificate-image${cert.image ? '' : ' certificate-image-placeholder'}`}>
                {cert.image ? <img src={cert.image} alt={`${cert.title} certificate`} /> : <span>{cert.issuer}</span>}
              </div>
              <div className="certificate-content">
                <h3 className="certificate-name">{cert.title}</h3>
                <div className="certificate-issuer"><FaBuilding className="issuer-icon" aria-hidden="true" /><span className="issuer-name">{cert.issuer}</span></div>
                <div className="certificate-date"><FaRegCalendarAlt className="date-icon" aria-hidden="true" /><span className="date-text">{cert.date}</span></div>
              </div>
            </article>
          ))}
        </div>
        <button className="scroll-button right" onClick={() => scroll(300)} aria-label="Scroll certificates right">&#8250;</button>
      </div>
    </section>
  );
}
