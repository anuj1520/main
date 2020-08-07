import React from 'react';
import "./About.css";
const About =({details})=>{
   return(
        <div className='main2-container'>
            <div className='vs2'>
             	<div className=" tc post2">
             	<h1 className='tc f1 lh-title'>About me</h1>
             	<p className='pa3 f3 lh-title' >{details[0].about}
             	</p>
               <h1 className='tc f1 lh-title'>Contact</h1>
             	<h3>Phn no -{details[0].phn}</h3>
             	<h3>Email  -{details[0].email}</h3>
             	<h3>Address-{details[0].address}</h3>
             	<h3>Pincode-{details[0].pincode}</h3>
              </div>
            </div>  
        </div> 
   	)



}

export default About;