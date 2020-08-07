import React,{Component} from 'react';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Testimonial from './Testimonial';
import ContactUs from  './ContactUs';
import {details} from './Information';
class App extends Component{
 render()
  {
   return (
    <div>
         <div id="home">
          <Home details={details} />
     </div>
         <div id="about">
          <About details={details} />
     </div>
         <div id="skills">
          <Skills details={details}/>
     </div>
         <div id="project">
          <Projects details={details}/>
     </div>
        
         <div id="testimonial">
         <Testimonial/>
         </div>
         <div id="contact">
           <ContactUs>
                 
           </ContactUs>
     </div>
        
   </div>
  );
}
}

export default App;
