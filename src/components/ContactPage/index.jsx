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
      headers: {
     'Content-Type': 'application/json',
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    }).then((res) => res.json());
  }

return (
<>
  <div className="mx-16 my-8 rounded-lg bg-[#587ba3]/50 py-12 backdrop-blur-sm">
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-6 text-center text-6xl font-bold text-[#f0eded]">
        Contact
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col"
        method='POST'
      >
        <input type="hidden" name="access_key" value="f62f1850-3440-43a2-bbbd-0d24bf74322f"/>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
        <textarea
          id="message"
          name="message"
          placeholder="Write message here :)"
          required
        />
        <button id="submit" type="submit">
          Submit Form
        </button>
        <br/><br/>
        <HCaptcha
          reCaptchaCompat={false}
          onVerify={onHCaptchaChange}
          sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
        />
      </form>
    </div>
  </div>
</>
)}