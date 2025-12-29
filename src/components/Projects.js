import { useEffect } from 'react';
import websiteImg from '../assets/project1.png';
import websiteImg2 from '../assets/project2.png';
import websiteImg3 from '../assets/rest.png';
import websiteImg4 from '../assets/proto.png'
import websiteImg5 from'../assets/longtoshirt.png';
import websiteImg6 from'../assets/sopprt.png';

export default function Projects() {
    const config = {
        Projects: [
            {
                image: websiteImg,
                description: 'Responsive Design Implementation',
                link: 'https://github.com/aarsath/REDESIGN-A-WEBSITE-LANDING-PAGE.git'
            },
            {
                image: websiteImg2,
                description: ' AR–VR Interface Design',
                link: 'https://github.com/aarsath/AR-VR-INTERFACE-DESIGN.git'
            },
            {
                image: websiteImg3,
                description: 'Spice Haven – Responsive Restaurant Website',
                link: 'https://github.com/aarsath/RESPONSIVE-DESIGN-IMPLEMENTATION.git'
            },
            {
                image: websiteImg4,
                description: 'Portfolio website using React.js, Tailwind CSS',
                link: 'https://github.com/aarsath/Protfolio.git'
            },
            {
                image: websiteImg5,
                description: 'AI-Powered Text Summarizer',
                link: 'https://github.com/aarsath/AI-Powered-Text-Summarizer.git'
            },
            {
                image: websiteImg6,
                description: 'SupportTalk – Real-Time Speech-to-Text Transcription System',
                link: 'https://github.com/aarsath/Project-2-End-To-End.git'
            }
            
        ]
    };

    // Scroll functionality for projects
    const scrollLeft = () => {
        const container = document.querySelector('.projects-scroll-container');
        if (container) {
            container.scrollBy({ left: -400, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        const container = document.querySelector('.projects-scroll-container');
        if (container) {
            container.scrollBy({ left: 400, behavior: 'smooth' });
        }
    };

    // Add keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            const container = document.querySelector('.projects-scroll-container');
            if (!container) return;
            
            if (e.key === 'ArrowLeft') {
                scrollLeft();
            } else if (e.key === 'ArrowRight') {
                scrollRight();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <section className="flex flex-col py-20 px-5 justify-center bg-primary text-white" id='Projects'>
            <div className='w-full'>
                <div className="flex flex-col px-10 py-5">
                    <h1 className='text-4xl text-white border-b-4 border-secondary mb-5 w-[140px] font-bold'>Projects</h1>
                    <p className='text-lg mb-6'>Explore my recent projects. Use arrows or scroll horizontally to browse.</p>
                </div>
            </div>
            
            <div className='w-full relative'>
                {/* Left scroll button */}
                <button 
                    onClick={scrollLeft}
                    className='absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-secondary text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all shadow-lg hover:scale-110'
                    aria-label="Scroll projects left"
                >
                    ‹
                </button>
                
                {/* Right scroll button */}
                <button 
                    onClick={scrollRight}
                    className='absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-secondary text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all shadow-lg hover:scale-110'
                    aria-label="Scroll projects right"
                >
                    ›
                </button>

                {/* Scroll hint for mobile */}
                <div className='text-center text-sm text-gray-300 mb-4 md:hidden'>
                    ← Scroll horizontally to view more →
                </div>

                {/* Projects scroll container */}
                <div className='projects-scroll-container overflow-x-auto scrollbar-hide flex px-10 gap-5 pb-6 snap-x snap-mandatory'>
                    {config.Projects.map((project, index) => (
                        <div 
                            key={index} 
                            className='relative group flex-shrink-0 w-[300px] md:w-[350px] snap-start'
                        >
                            <div className='overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 h-full bg-gray-800'>
                                <img 
                                    className='h-[180px] w-full object-cover transition-transform duration-300 group-hover:scale-105' 
                                    src={project.image} 
                                    alt={`Project ${index + 1}: ${project.description}`} 
                                />
                                <div className='p-5'>
                                    <p className='text-center font-medium text-white mb-4'>{project.description}</p>
                                    <div className='flex justify-center'>
                                        <a 
                                            target='_blank' 
                                            rel='noopener noreferrer'
                                            href={project.link} 
                                            className='btn bg-secondary text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors font-medium inline-flex items-center gap-2'
                                        >
                                            <span>View Project</span>
                                            <span>↗</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Scroll indicators */}
                <div className='flex justify-center gap-2 mt-4'>
                    {config.Projects.map((_, index) => (
                        <div 
                            key={index}
                            className='w-2 h-2 rounded-full bg-gray-500'
                            aria-hidden="true"
                        ></div>
                    ))}
                </div>
            </div>

            {/* Add custom CSS for scrollbar styling */}
            <style jsx>{`
                .projects-scroll-container {
                    scrollbar-width: thin;
                    scrollbar-color: #4a5568 #2d3748;
                }
                
                .projects-scroll-container::-webkit-scrollbar {
                    height: 8px;
                }
                
                .projects-scroll-container::-webkit-scrollbar-track {
                    background: #2d3748;
                    border-radius: 4px;
                }
                
                .projects-scroll-container::-webkit-scrollbar-thumb {
                    background: #4a5568;
                    border-radius: 4px;
                }
                
                .projects-scroll-container::-webkit-scrollbar-thumb:hover {
                    background: #718096;
                }
                
                @media (max-width: 768px) {
                    .projects-scroll-container {
                        scroll-padding: 0 20px;
                    }
                }
            `}</style>
        </section>
    );
}