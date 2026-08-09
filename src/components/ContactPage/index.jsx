import { useForm } from "react-hook-form";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import "./index.scss";

export default function ContactForm() {
  const { register, handleSubmit, setValue } = useForm();

  const onHCaptchaChange = (token) => {
    setValue("h-captcha-response", token);
  };

  const onSubmit = async (data) => {
    console.log(data);


  const formData = new FormData();

    formData.append("access_key", "INSERT_KEY_HERE");
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);
    formData.append(
      "h-captcha-response",
      data["h-captcha-response"]
    );

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    body: formData,
    });

    const result = await response.json();

    console.log(result);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col"
      >
        <input
          type="hidden"
          {...register("access_key")}
          value="f62f1850-3440-43a2-bbbd-0d24bf74322f"
        />

        <input
          {...register("name")}
          type="text"
          id="name"
          placeholder="Name"
          required
        />

        <input
          {...register("email")}
          type="email"
          id="email"
          placeholder="Email"
          required
        />

        <textarea
          {...register("message")}
          id="message"
          placeholder="Write message here :)"
          required
        />

        <HCaptcha
          reCaptchaCompat={false}
          onVerify={onHCaptchaChange}
          sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
        />

        <button id="submit" type="submit">
          Submit Form
        </button>
      </form>
    </>
  );
}