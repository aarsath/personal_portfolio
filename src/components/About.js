import AboutImg from '../assets/about.png';
export default function About() {
    return <section className='flex flex-col md:flex-row bg-secondary px-5' ID='About'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg}></img> </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center'>
                <h1 className='text-4xl text-white border-b-4 border-primary mb-5 w-[170px] font font-bold '>About me</h1>
               <p className='text-white leading-relaxed'>
  I’m a fresher Web Developer with a strong interest in building 
  responsive, user-friendly web applications. I enjoy transforming 
  ideas into clean, functional, and visually appealing digital 
  experiences using modern web technologies.
  <br /><br />
  I’m constantly learning new tools and improving my skills, with a 
  focus on writing clean code and creating intuitive interfaces. 
  I’m eager to work in fast-paced startup environments where I can 
  grow quickly, take responsibility, and contribute from day one.
</p>

                </div>
            </div>
            
            
            
             </section>



}