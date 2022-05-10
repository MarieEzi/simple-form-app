import React from 'react'
import Footer from './Footer';

function Form({name, email, password, confirmPassword, setName, setEmail, setPassword, setConfirmPassword, setStep}) {
  return (
   <form onSubmit={(event) => {
       event.preventDefault();
       if (confirmPassword===password){
    setStep(2)
       }else{
           alert("Vos mots de passe ne sont pas identiques")
       }
   }}>
       <h1>Create account</h1>

<div className='form_infos'> 
       <p>Name</p>
       <input 
       value={name}
       type="text" 
       placeholder="Jean Dupont" 
       onChange={(event)=>{
           setName(event.target.value);
       }} />

       <p>Email</p>
       <input 
       value={email} 
       type="email" 
       placeholder="jean.dupont@mail.com" 
       onChange={(event)=>{
           setEmail(event.target.value);
       }} />

       <p>Password</p>
       <input 
       value={password}
       type="password" 
       placeholder="gfhgfgddxgv"
       onChange={(event)=>{
        setPassword(event.target.value);
    }} />

       <p>Confirm your password</p>
       <input 
       value={confirmPassword}
       type="password" 
       placeholder="gfhgfgddxgv" 
       onChange={(event)=>{
        setConfirmPassword(event.target.value);
    }} />
    </div>
       <br />
       <input className = "register" type="submit" value="Register" />
   

    <Footer /> 
    </form>
  )
}

export default Form;