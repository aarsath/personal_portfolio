import ResumeImg from '../assets/resume.jpg';
import ResumePDF from '../assets/certificates/ABDUL ARSATH12.pdf'; 

export default function Resume() {
    const handleDownload = () => {
        // Use the imported PDF
        const link = document.createElement('a');
        link.href = ResumePDF;
        link.download = 'ABDUL_ARSATH12.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className='flex flex-col md:flex-row bg-primary px-5 py-12' id='Resume'>
            <div className='container mx-auto max-w-5xl'>
                <div className='flex flex-col md:flex-row items-center gap-8'>
                    {/* Resume Image */}
                    <div className='md:w-1/2 flex justify-center'>
                        <img 
                            className='w-64 md:w-80 rounded-lg shadow-lg' 
                            src={ResumeImg} 
                            alt="My resume"
                        />
                    </div>
                    
                    {/* Content */}
                    <div className='md:w-1/2'>
                        <h1 className='text-3xl text-white border-b-4 border-secondary mb-4 pb-2 font-bold'>
                            My Resume
                        </h1>
                        
                        <p className='text-white mb-6'>
                            Aspiring web developer with hands-on project experience. 
                            Passionate about learning and creating clean, functional websites.
                        </p>
                        
                        <div className='mb-6'>
                            <p className='text-gray-300 mb-2'>Highlights include:</p>
                            <div className='text-white text-sm space-y-1'>
                                <p>✓ Modern web technologies</p>
                                <p>✓ Responsive design projects</p>
                                <p>✓ Continuous learning mindset</p>
                            </div>
                        </div>
                        
                        <button 
                            onClick={handleDownload}
                            className='bg-secondary text-white px-5 py-3 rounded font-medium hover:bg-opacity-90'
                        >
                            Download Resume
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}