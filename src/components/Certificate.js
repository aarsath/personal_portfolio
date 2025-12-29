import CertImg1 from '../assets/certificates/certi1.png';
import CertImg2 from '../assets/certificates/certi2.png';
import CertImg3 from '../assets/certificates/certi3.png';
import CertImg4 from '../assets/certificates/certi4.png';
import CertImg5 from '../assets/certificates/certi5.png';
import CertImg6 from '../assets/certificates/certi6.png';
import CertImg7 from '../assets/certificates/certi7.png';
import CertImg8 from '../assets/certificates/certi8.png';

const Certificate = () => {
  // Parse dates into Date objects for sorting
  const parseDate = (dateStr) => {
    // Parse dates in format "MMM DD YYYY" (e.g., "July 3 2025")
    // Note: Some dates have inconsistent spacing, so we normalize them
    const normalizedStr = dateStr.replace(/\s+/g, ' ').trim();
    return new Date(normalizedStr);
  };

  const certificates = [
    {
      id: 1,
      title: "Master Course in Project Management 2.0",
      issuer: "Udemy",
      date: "July 3 2025",
      image: CertImg1,
      
    },
    {
      id: 2,
      title: "GenAI Powered Data Analystics Job simulation",
      issuer: "Forage",
      date: "June 17 2025",
      image: CertImg2,
      
    },
    {
      id: 3,
      title: "Generative Ai in Action",
      issuer: "IBM",
      date: "October 9 2025",
      image: CertImg3,
      
    },
    {
      id: 4,
      title: "Solution Architecture Job Simulation",
      issuer: "Forage",
      date: "June 17 2025",
      image: CertImg4,
     
    },
    {
      id: 5,
      title: "What is Generative Ai",
      issuer: "LinkedIn Learning",
      date: "October 2 2025",
      image: CertImg5,
     
    },
    {
      id: 6,
      title: "Introduction To Artificial Intelligence",
      issuer: "LinkedIn Learning",
      date: "September 9 2025",
      image: CertImg6,
      
    },
    {
      id: 7,
      title: "Micro-Certification - Welcome-to-ServiceNow",
      issuer: "ServiceNow",
      date: "September 6 2025",
      image: CertImg7,
      
    },
    {
      id: 8,
      title: "Naan Mudhalvan Robatic Process Automation Foundation",
      issuer: "Meta",
      date: "November 7 2024",
      image: CertImg8,
      
    }
  ];

  // Sort certificates by date in descending order (most recent first)
  const sortedCertificates = [...certificates].sort((a, b) => {
    return b.dateObj - a.dateObj; // Newest to oldest
  });

  // Alternative: Sort in ascending order (oldest first)
  // const sortedCertificates = [...certificates].sort((a, b) => {
  //   return a.dateObj - b.dateObj;
  // });

  const scrollLeft = () => {
    const container = document.querySelector('.certificates-scroll');
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.querySelector('.certificates-scroll');
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="certificate-section" id='Certificate'>
      <div className="certificate-header">
        <h2 className="certificate-title">Certifications</h2>
        
      </div>

      <div className="certificates-container">
        <button className="scroll-button left" onClick={scrollLeft}>
          ‹
        </button>
        
        <div className="certificates-scroll">
          {sortedCertificates.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <div className="certificate-image">
                <img src={cert.image} alt={cert.title} />
              </div>
              
              <div className="certificate-content">
                <h3 className="certificate-name">{cert.title}</h3>
                
                <div className="certificate-issuer">
                  <span className="issuer-icon">🏢</span>
                  <span className="issuer-name">{cert.issuer}</span>
                </div>
                
                <div className="certificate-date">
                  <span className="date-icon">📅</span>
                  <span className="date-text">{cert.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="scroll-button right" onClick={scrollRight}>
          ›
        </button>
      </div>
    </section>
  );
};

export default Certificate;