import React from 'react';
import './Home.css'
import 'tachyons' ;


 const Home=({details})=>{

		return(
			
								<div className="tc main1-container">
							    

								    <div className ='pa3'>
									      <ul class="nav">
										  <li class="nav-item">
										    <a class="nav-link" href="./#home">Home</a>
										  </li>
										  <li class="nav-item">
										    <a class="nav-link" href="./#about">About</a>
										  </li>
										  <li class="nav-item">
										    <a class="nav-link" href="./#skills">Skills</a>
										  </li>
										  <li class="nav-item">
										    <a class="nav-link disabled" href="./#project">Projects</a>
										  </li>
										  <li class="nav-item">
										    <a class="nav-link disabled" href="./#testimonial">Testimonials</a>
										  </li>
                                          <li class="nav-item">
										    <a class="nav-link disabled" href="./#contact">Contact Us</a>
										  </li>
										</ul>
								    </div >  
										<div className="vs">
										           <div className='post1'>
										               <h1 className='tc f1 lh-title'>Hey {details[0].name} here</h1>
												       <p1 className='pa3 f3 lh-title'>{details[0].intro}
												       </p1> <br/>
												        <a href="./#about">
												       <button type="button" width ="30">Explore me</button>
												       </a><br/>

														<div className="images">
														

														<a  className="ga" href = {details[0].git}><img src ={require('./fb.png')} alt ="fb" width ="30"/></a> 
														<a  className="ga" href = "https://www.instagram.com/"><img src ={require('./ig.jpg')} alt ="fb" width ="30"/></a> 
														<a  className="ga" href = "https://www.twitter.com/"><img src ={require('./tw.png')} alt ="fb" width ="30"/></a> 
														<a  className="ga" href = "https://www.linkedin.com/"><img src ={require('./linkedin.png')} alt ="fb" width ="30"/></a> 
														
														</div>
							                      </div>
									     </div>
			
							   </div>
			 
			);
}

export default Home;
