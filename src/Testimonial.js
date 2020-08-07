import React from 'react';
import 'tachyons' ;
import './Testimonial.css';
const Testiomonial=()=>{
   return(<div className='main4-container'>
                         <h1 className='tc f1 lh-title'>Testimonial</h1>
                <div className="testimonials-container  ">
                       
                        <div className="centered-items">
                            <img className="logo" src="https://homepages.cae.wisc.edu/~ece533/images/cat.png" width='100' alt="logo" />
                            <div className="user-details">
                                <h4 className="username f2 lh-title">John Doe</h4>
                                <p className="role f3 lh-title">A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.
                                </p>
                            </div>
                        </div>
                        <div className="centered-items">
                            <img className="logo" src="https://homepages.cae.wisc.edu/~ece533/images/goldhill.png" width='100' alt="logo" />
                            <div className="user-details">
                                <h4 className="username f2 lh-title">Abc Mno</h4>
                                <p className="role f3 lh-title">A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.
                                </p>
                            </div>
                        </div>
                </div>
        </div>
 
    );



}

export default Testiomonial;
