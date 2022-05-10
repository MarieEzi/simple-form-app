import React from 'react'
import Footer from './Footer';

function StepTwo({name, email, password, setStep}) {
  return (
    <div>
      <div><h1>Results</h1></div>
      <div className='infos'>
 <p>Name : {name} </p>
 <p>Email : {email} </p>
 <p>Password : {password} </p>
 </div>
 <button className="btn_results" onClick={()=>{
   setStep(1)
 }}>Edit your information </button>
      
      
      <Footer/>
      </div>
  );
};

export default StepTwo;
