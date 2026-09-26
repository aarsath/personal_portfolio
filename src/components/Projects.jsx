import websiteImg from '../assets/project1.png';
import websiteImg2 from '../assets/project2.png';
import websiteImg3 from '../assets/rest.png';
import websiteImg4 from '../assets/proto.png';
import websiteImg5 from '../assets/longtoshirt.png';
import websiteImg6 from '../assets/sopprt.png';

export default function Projects({ projects }) {
  const images = [websiteImg, websiteImg2, websiteImg3, websiteImg4, websiteImg5, websiteImg6];
  const scroll = (amount) => document.querySelector('.projects-scroll-container')?.scrollBy({ left: amount, behavior: 'smooth' });

  return (
    <section className="projects-section" id="Projects">
      <div className="section-heading">
        <p className="eyebrow">Selected work</p>
        <h2>Projects</h2>
        <p>A selection of recent projects. Browse with the arrows or scroll horizontally.</p>
      </div>
      <div className="projects-viewport">
        <button className="project-arrow project-arrow-left" onClick={() => scroll(-400)} aria-label="Scroll projects left">&#8249;</button>
        <button className="project-arrow project-arrow-right" onClick={() => scroll(400)} aria-label="Scroll projects right">&#8250;</button>
        <div className="projects-scroll-container">
          {projects.map((project, index) => (
            <article className="project-card" key={`${project.title}-${index}`}>
              <div className="project-card-inner">
                <img className="project-image" src={project.image || images[index % images.length]} alt={`Project ${index + 1}: ${project.description}`} />
                <div className="project-content">
                  <p className="project-title">{project.title || project.description}</p>
                  <small>{project.tech}</small>
                  <a target="_blank" rel="noopener noreferrer" href={project.link} className="btn">View project <span aria-hidden="true">&#8599;</span></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
