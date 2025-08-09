import { useState } from 'react';
import emailjs from "@emailjs/browser"
import { useRef } from 'react';
function Form()
{
  const form = useRef();

  const sendEmail = (e) =>
  {
    e.preventDefault();
    var serviceID = "service_jgbr3xd";
    var templateID = "template_v5ipujf"
    var publicKey = "Izgzh9TcSOtQcWSN-"
    emailjs.sendForm(serviceID,templateID,form.current,publicKey).then(
      ()=>{alert("Message sent successfully");form.current.reset()},
      (e)=>{alert("Message failed to send",e.text)})
  }
  return <form ref={form} onSubmit={sendEmail} class="max-w-md mx-auto">
    <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-[#e6e1e1] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-[#e6e1e1] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-[#e6e1e1] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-[#e6e1e1] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
    </div>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input type="email" name="email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-[#e6e1e1] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-[#e6e1e1] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
    <div class="relative z-0 w-full mb-5 group">
      <input type="text" name="subject" id="floating_subject" class="block py-2.5 px-0 w-full text-sm text-[#e6e1e1] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_subject" class="peer-focus:font-medium absolute text-sm text-[#e6e1e1] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Subject</label>
  </div>
  <div>
  <textarea id="message" name='msg' rows="4" class="bg-transparent block p-2.5 w-full text-sm text-[#e6e1e1] bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Message..." required></textarea>
  </div>
  <br/>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
}

const ContactPage = () =>
{
    const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }
    return <div className="w-full">
      <div className='bg-[#587ba3] mx-16 my-8 absolute inset-0 opacity-50 backdrop-blur-sm rounded-lg'/>
      <div className='relative'>
      <div className='text-center my-16'>
        <h1 className='text-6xl font-extrabold text-[#f0eded]'>Contact</h1>
      </div>
        <br/>
        <Form/>
        </div>

    </div>
}
export default ContactPage;