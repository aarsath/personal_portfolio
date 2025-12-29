import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Contact() {
    return (
        <section className='bg-secondary px-5 py-20 text-white' id='Contact'>
            <div className='container mx-auto max-w-4xl'>
                <div className='text-center mb-16'>
                    <h1 className='text-4xl font-bold border-b-4 border-primary inline-block pb-2 mb-4'>
                        Contact
                    </h1>
                    <p className='text-gray-300'>
                        Get in touch through any of these platforms
                    </p>
                </div>

                {/* Contact Info */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    {/* Email & Phone */}
                    <div className='space-y-8'>
                        <a 
                            href="mailto:abdularsath@gmail.com"
                            className='flex items-center gap-4 p-6 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all hover:scale-[1.02] group'
                        >
                            <div className='bg-primary/20 p-4 rounded-full group-hover:bg-primary/30'>
                                <FaEnvelope className='text-primary text-2xl' />
                            </div>
                            <div>
                                <h3 className='font-bold text-lg'>Email</h3>
                                <p className='text-gray-300'>abdularsath79@gmail.com</p>
                            </div>
                        </a>

                        <a 
                            href="tel:+918220742297"
                            className='flex items-center gap-4 p-6 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all hover:scale-[1.02] group'
                        >
                            <div className='bg-primary/20 p-4 rounded-full group-hover:bg-primary/30'>
                                <FaPhone className='text-primary text-2xl' />
                            </div>
                            <div>
                                <h3 className='font-bold text-lg'>Phone / WhatsApp</h3>
                                <p className='text-gray-300'>+91 8220742297</p>
                            </div>
                        </a>
                    </div>

                    {/* Social Media */}
                    <div className='space-y-8'>
                        <a 
                            href="https://www.linkedin.com/in/abdul-arsath-t-9329192a2"
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center gap-4 p-6 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all hover:scale-[1.02] group'
                        >
                            <div className='bg-blue-600/20 p-4 rounded-full group-hover:bg-blue-600/30'>
                                <FaLinkedin className='text-blue-400 text-2xl' />
                            </div>
                            <div>
                                <h3 className='font-bold text-lg'>LinkedIn</h3>
                                <p className='text-gray-300'>Connect professionally</p>
                            </div>
                        </a>

                        <a 
                            href="https://github.com/aarsath"
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center gap-4 p-6 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all hover:scale-[1.02] group'
                        >
                            <div className='bg-gray-700/20 p-4 rounded-full group-hover:bg-gray-700/30'>
                                <FaGithub className='text-gray-300 text-2xl' />
                            </div>
                            <div>
                                <h3 className='font-bold text-lg'>GitHub</h3>
                                <p className='text-gray-300'>View my projects</p>
                            </div>
                        </a>

                        <a 
                            href="https://instagram.com/itz__me__arsath"
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center gap-4 p-6 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all hover:scale-[1.02] group'
                        >
                            <div className='bg-pink-600/20 p-4 rounded-full group-hover:bg-pink-600/30'>
                                <FaInstagram className='text-pink-400 text-2xl' />
                            </div>
                            <div>
                                <h3 className='font-bold text-lg'>Instagram</h3>
                                <p className='text-gray-300'>Follow for updates</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}