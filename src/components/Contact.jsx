import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
// import Alert from "@mui/material/Alert";

import EarthCanvas from "./canvas/Earth";
import SectionWrapper from "../hoc/SectionWrapper";
import { slideIn } from "../utils/motion";
import { MdEmail } from "react-icons/md";

const Contact = () => {

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  // const [alertMessage, setAlertMessage] = useState(null);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        'service_zy2doo8',
        'template_x899ivi',
        {
          from_name: form.name,
          to_name: "Keshav Jha",
          from_email: form.email,
          to_email: "jhak78022@gmail.com",
          message: form.message,
        },
        'UZolERcsJtlEgRBv5',
      )
      .then(
        () => {
          setLoading(false);
          setForm({
            name: "",
            email: "",
            message: "",
          });
          // setAlertMessage({ severity: "success", message: "Thank you. I will get back to you as soon as possible." });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          // setAlertMessage({ severity: "error", message: "Ahh, something went wrong. Please try again." });
        }
      );
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-1">
        <EarthCanvas />
      </motion.div>

      <motion.div whileInView={{ opacity: 1 , transform : 'none'}}
        // variants={slideIn("right", "tween", 0.2, 1)}
        className='flex-[0.85] bg-black-100 p-8 rounded-2xl'>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Get in touch</p>
        <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-3 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-3">Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-3 px-3 placeholder:text-secondary text-white rounded-lg border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your Email id?"
              className='bg-tertiary py-3 px-3 placeholder:text-secondary text-white rounded-lg border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className="bg-tertiary py-3 px-3 placeholder:text-secondary text-white rounded-lg border-none font-medium"
            />
          </label>

          
          <button
            type='submit'
            className="bg-tertiary py-3 px-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary border-[2px] border-solid border-[#49a891]">
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        <div className="mt-5 flex flex-col gap-[1.2rem]">
          <article className="flex flex-row p-[0.6rem] text-center items-center gap-[0.8rem] rounded-[1.2rem] border-[1px] border-white border-solid hover:underline">
            <MdEmail />
            <a href="mailto:jhak78022@gmail.com" target="_blank" className="blue-text-gradient">jhak78022@gmail.com</a>
          </article>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");