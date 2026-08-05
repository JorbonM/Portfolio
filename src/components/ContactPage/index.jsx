import { useForm } from "react-hook-form";
import HCaptcha from '@hcaptcha/react-hcaptcha';
import './index.scss'

export default function ContactForm() {
  const { register, handleSubmit, setValue } = useForm();
  
  const onHCaptchaChange = (token) => {
    setValue("h-captcha-response", token);
  };
  
  const onSubmit = async (data) => {
    console.log(data);
    
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data
    }).then((res) => res.json());
  }

return (
    <div className="flex items-center justify-center">
       
  <h1 className="text-center font-bold text-[#f0eded] text-6xl">About Me</h1>
  <br/>
  <form onSubmit={handleSubmit(onSubmit)} >
     {/* // other form fields */}
    <input type="text" id='name' name="name" placeholder="Name" required/>
    <br/>
      <input type="email" id='email 'name="email" required placeholder="Email"/>
      <br/>
      <textarea name="message" id='message' required placeholder="Write message here :)"></textarea>
      <br/>
      <button id='submit' type="submit">Submit Form</button>
      <br/>
      <br/>
      <HCaptcha
         sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
         reCaptchaCompat={false}
         onVerify={onHCaptchaChange} 
         /> 

  </form>
  </div>
)}