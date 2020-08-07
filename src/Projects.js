import React from 'react';
import 'tachyons' ;
import './Project.css';
const Projects=({details})=>
{
  return(<div className='main-container tc'>
  	    <h1 className='tc f1 lh-title'>Projects</h1>
  	<div className="post-wrapper ">
		  	    	<div className="post">
		  
								<img className="thumbnail" alt='1' src ={require('./p1.jpg')}/>
								<div className="post-preview">
									<h6 className="post-title">Robo Friends</h6>
									<p className="post-intro">
									Projects are often described and delegated by a manager or executive. They go over their expectations and goals and it's up to the team to manage logistics and execute the project in a timely manner.
									<br/><a target="_blank" rel="noopener noreferrer" href={details[0].PLink1}><h1 className='f4 lh-title'>Open my Project</h1></a>
									</p>
								</div>
					</div>
					<div className="post">
  
						<img className="thumbnail" alt='2'  src ={require('./p2.png')}/>
						<div className="post-preview">
							<h6 className="post-title">Background Generator</h6>
							<p className="post-intro">
							Projects are often described and delegated by a manager or executive. They go over their expectations and goals and it's up to the team to manage logistics and execute the project in a timely manner.
							<br/><a target="_blank" rel="noopener noreferrer" href={details[0].PLink2}><h1 className='f4 lh-title'>Open my Project</h1></a>
							</p>
						</div>
					</div>
					<div className="post">
  
						<img className="thumbnail" alt='3' src ={require('./p3.png')}/>
						<div className="post-preview">
							<h6 className="post-title ">Portfolio</h6>
							<p className="post-intro">
							Projects are often described and delegated by a manager or executive. They go over their expectations and goals and it's up to the team to manage logistics and execute the project in a timely manner.
							<br/><a target="_blank" rel="noopener noreferrer" href={details[0].PLink3}><h1 className='f4 lh-title'>Open my Project</h1></a>
							</p>
						</div>
					</div>
		</div>			
    </div>
	);




}

export default Projects;

