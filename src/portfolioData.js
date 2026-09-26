import CertImg2 from './assets/certificates/certi2.png';
import CertImg3 from './assets/certificates/certi3.png';
import CertImg4 from './assets/certificates/certi4.png';
import CertImg6 from './assets/certificates/certi6.png';
import CertImg8 from './assets/certificates/certi8.png';
import ResumePDF from './assets/certificates/ABDUL ARSATH12.pdf';

export const defaultPortfolioData = {
  profile: {
    name: 'Abdul Arsath.T',
    role: 'Full-Stack Developer | AI & ML Enthusiast',
    bio: 'Computer Science Engineering student skilled in full-stack development, AI and machine learning, and UI/UX design. I build responsive web apps, AI-powered systems, and automation projects using React.js, Python, Flask, TensorFlow, and Scikit-learn. I am seeking opportunities as a Full-Stack Developer, Frontend Developer, or AI Developer.',
    email: 'abdularsath79@gmail.com',
    phone: '+91 82207 42297',
    github: 'https://github.com/aarsath',
    linkedin: 'https://www.linkedin.com/in/abdul-arsath-t-9329192a2',
    instagram: 'https://instagram.com/itz__me__arsath'
  },
  skills: [
    'Java', 'Python', 'JavaScript', 'HTML5', 'CSS3', 'React.js', 'Tailwind CSS',
    'Responsive Design', 'Flask', 'REST APIs', 'SQL / MySQL', 'Node.js (basic)',
    'Machine Learning', 'NLP', 'TensorFlow', 'Scikit-learn', 'Hugging Face',
    'Whisper AI', 'Generative AI', 'Git', 'GitHub', 'VS Code', 'Figma',
    'Streamlit', 'UiPath', 'ESP32', 'Arduino', 'Sensors', 'Home Automation'
  ],
  projects: [
    { title: 'Udemy Clone', description: 'Full-stack learning platform with course listings, authentication, and a responsive interface.', tech: 'React.js, Node.js', link: 'https://github.com/aarsath' },
    { title: 'TripAdvisor Clone', description: 'Travel website clone with sticky navigation, sidebar behavior, and interactive responsive layouts.', tech: 'HTML, CSS, JavaScript', link: 'https://github.com/aarsath' },
    { title: 'Greenden E-Commerce Website', description: 'Plant store with a product catalog, cart system, and checkout flow.', tech: 'HTML, CSS, JavaScript', link: 'https://github.com/aarsath' },
    { title: 'Stock Recommendation Chatbot', description: 'AI stock platform using Random Forest and LSTM with Yahoo Finance data for real-time buy, sell, or hold predictions; achieved 87% accuracy.', tech: 'Python, Random Forest, LSTM, Yahoo Finance API', link: 'https://github.com/aarsath' },
    { title: 'SupportTalk Speech-to-Text', description: 'Real-time transcription system using Whisper AI and Wav2Vec2, optimized for low latency.', tech: 'Whisper AI, Wav2Vec2', link: 'https://github.com/aarsath/Project-2-End-To-End.git' },
    { title: 'AI Text Summarizer', description: 'NLP tool that creates concise summaries of long documents.', tech: 'Hugging Face BART, NLP', link: 'https://github.com/aarsath/AI-Powered-Text-Summarizer.git' },
    { title: 'Portfolio Website', description: 'Responsive portfolio showcasing projects and skills.', tech: 'React.js, Tailwind CSS', link: 'https://github.com/aarsath/Protfolio.git' },
    { title: 'Spice Haven Restaurant Website', description: 'Mobile-first restaurant website with a responsive design.', tech: 'HTML, CSS, JavaScript', link: 'https://github.com/aarsath/RESPONSIVE-DESIGN-IMPLEMENTATION.git' },
    { title: 'ALEX IoT Lab Assistant', description: 'ESP32-based smart automation system for a lab environment.', tech: 'ESP32, IoT, Sensors', link: 'https://github.com/aarsath' }
  ],
  education: [
    'B.E. Computer Science Engineering, Anna University — Expected 2026',
    'Diploma in Computer Engineering, DOTE — 79%'
  ],
  certifications: [
    'Generative AI in Action — IBM SkillsBuild',
    'Introduction to Artificial Intelligence — LinkedIn Learning',
    'RPA Foundation — UiPath',
    'Software Engineering Simulation — Forage',
    'GenAI Data Analytics Simulation — Forage',
    'Solutions Architecture Simulation — Forage',
    'TN Skill Certified: Business Intelligence Analysis — 375 hours (2026)'
  ],
  certificates: [
    { id: 'tn-bi', title: 'Business Intelligence Analysis · 375 hours', issuer: 'TN Skill Certified', date: '2026', image: '' },
    { id: 'ibm-genai', title: 'Generative AI in Action', issuer: 'IBM SkillsBuild', date: 'October 9, 2025', image: CertImg3 },
    { id: 'linkedin-ai', title: 'Introduction to Artificial Intelligence', issuer: 'LinkedIn Learning', date: 'September 9, 2025', image: CertImg6 },
    { id: 'forage-genai', title: 'GenAI Data Analytics Simulation', issuer: 'Forage', date: 'June 17, 2025', image: CertImg2 },
    { id: 'forage-architecture', title: 'Solutions Architecture Simulation', issuer: 'Forage', date: 'June 17, 2025', image: CertImg4 },
    { id: 'uipath-rpa', title: 'RPA Foundation', issuer: 'UiPath', date: 'November 7, 2024', image: CertImg8 },
    { id: 'forage-software', title: 'Software Engineering Simulation', issuer: 'Forage', date: 'Date not specified', image: '' }
  ],
  resumeSummary: 'Computer Science Engineering student focused on full-stack development, artificial intelligence, and machine learning. I build responsive web applications, AI-powered tools, and automation projects, and am seeking opportunities in full-stack, frontend, or AI development.',
  resumePdf: ResumePDF
};
