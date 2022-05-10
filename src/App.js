import { useState } from 'react';
import './App.css';
import Form from "./components/Form"
import StepTwo from "./components/StepTwo"


function App() {

const [name, setName] = useState("");
const [email, setEmail] =  useState("");
const [password, setPassword] =  useState("");
const [confirmPassword, setConfirmPassword] =  useState("");

const [step, setStep] = useState(1);

  return (
    <div className="App">
   {step===1 ? (
   <Form 
   name={name} 
   email={email} 
   password={password} 
   confirmPassword={confirmPassword} 
   setName={setName} 
   setEmail={setEmail} 
   setPassword={setPassword} 
   setConfirmPassword={setConfirmPassword}
   setStep={setStep}
   /> 
   ) : (
   <StepTwo
   name={name} 
   email={email} 
   password={password}
   setStep={setStep}
   />
  )}
  </div>
  );
}

export default App;
