import { useForm } from "react-hook-form";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import "./index.scss";

export default function ContactPage() {
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
    <div className="mx-16 my-8 rounded-lg bg-[#587ba3]/50 py-12 backdrop-blur-sm">
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-6 text-center text-6xl font-bold text-[#f0eded]">
          Contact
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <input
            type="hidden"
            value="f62f1850-3440-43a2-bbbd-0d24bf74322f"
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

          <button type="submit" id="submit" >
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
}
