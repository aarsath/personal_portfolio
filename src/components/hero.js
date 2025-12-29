import HeroImg from '../assets/hero.png';
import { FaGithub ,FaLinkedin,} from "react-icons/fa";

export default function Hero(){
  const config={
    subtitle:"im a Full Stack Developer",
  }
 return<section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center' id='Hero'>
<div className='md:w-1/2 flex flex-col'>
      <h1 className=' text-white text-6xl font-hero-font '>Hi ,<br/>Im <span className='text-black'> Abdul Arsath</span>
    <p className='2xl'>{config.subtitle}</p></h1>
    <div className='flex py-10 '>
        <a
            href="https://github.com/aarsath"
            className="pr-5 text-black-300 hover:text-white transition-colors cursor-pointer"
            aria-label="GitHub"
          >
            <FaGithub size={40} />
          </a>

          <a
            href="https://www.linkedin.com/in/abdul-arsath-t-9329192a2"
            className="pr-5 text-black-300 hover:text-white transition-colors cursor-pointer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={40} />
          </a>
    </div>
    </div>
    
     <img className='md:w-1/3' src={HeroImg} alt="hero image"/>
 </section>
}