import React from 'react';
import './ContactUs.css';
import 'tachyons' ;
function Redirect() {
	    return(
	    	<div>
<div >
<h1>Thank you!</h1>
<p>Your submission has been received.</p>
</div>
</div>
	    	);
            }

const ContactUs =()=>
{
return( <div className='main5-container' >
	    <div className='vs5'> 
	    


								   <div >
							<h3 className='tc pa3 f1 lh-title'> Contact Me</h3>
							<div className='post-wrapper f4 lh-title post5'>
							<form method = "post">
							<input type = "text" placeHolder='First Name' /> <br/>
							<input type = "text"  placeHolder='Last Name' /> <br/>
							<input type = "email"  placeHolder='Email' /><br/>
							<input type = "text" placeHolder='Message Me'/> <br/>
							<input type="button" value="Send Me!" onclick={Redirect()} />
							<br/>
							</form>
							</div>
							</div>
							  
                             
							   <div className='tc pa3 ra'>
		                                                <a  className="ga1" href = '"https://www.instagram.com/"'><img src ={require('./fb.png')} alt ="fb" width ="30"/></a> 
														<a  className="ga1" href = "https://www.instagram.com/"><img src ={require('./ig.jpg')} alt ="fb" width ="30"/></a> 
														<a  className="ga1" href = "https://www.twitter.com/"><img src ={require('./tw.png')} alt ="fb" width ="30"/></a> 
														<a  className="ga1" href = "https://www.linkedin.com/"><img src ={require('./linkedin.png')} alt ="fb" width ="30"/></a> 
										
							  </div>
		  </div>
		 </div>
		 					       
);
}



export default ContactUs;