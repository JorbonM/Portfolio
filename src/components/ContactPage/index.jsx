import { useForm } from "react-hook-form";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import "./index.scss";

export default function ContactForm() {
  const { register, handleSubmit, setValue } = useForm();

  const onHCaptchaChange = (token) => {
    setValue("h-captcha-response", token);
  };

  const onSubmit = async (data) => {
    console.log("Submitting:", data);

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();

    console.log("Web3Forms response:", result);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="hidden"
        value="YOUR_ACCESS_KEY_HERE"
        {...register("access_key")}
      />

      <input
        type="text"
        {...register("name")}
        placeholder="Name"
        required
      />

      <input
        type="email"
        {...register("email")}
        placeholder="Email"
        required
      />

      <textarea
        {...register("message")}
        placeholder="Write message here :)"
        required
      />

      <HCaptcha
        sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
        reCaptchaCompat={false}
        onVerify={onHCaptchaChange}
      />

      <button type="submit">
        Submit Form
      </button>
    </form>
  );
}
