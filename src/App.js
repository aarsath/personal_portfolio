import './App.css';
import About from './components/About';
import Header from './components/Header';
import Hero from './components/hero';
import Projects from './components/Projects';
import Resume from'./components/Resume';
import Contact from'./components/Contact';
import Footer from './components/Footer';
import Certificate from './components/Certificate';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About/>
      <Projects/>
      <Certificate/>
      <Resume/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
