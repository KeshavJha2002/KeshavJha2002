import { BrowserRouter as Router} from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Project from "./components/Project";
import Education from "./components/Education";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Achievement from "./components/Achievement";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StarsCanvas from "./components/canvas/Stars";

const App = () => {  
  return (
    <div>
      <Router>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <Content />
        <Education />
        <Project />
        <Experience />
        <Achievement />
        <Profile/>
        <Tech />
        <div className='relative'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer/>
      </div>
    </Router>
    </div>
  )
}

export default App
