import { motion } from "framer-motion";
import {init} from 'ityped';
import { useEffect , useRef} from "react";
import {AiOutlineGithub } from "react-icons/ai";
import {ImLinkedin} from "react-icons/im";
import personal_pic from "../assets/personal_pic.jpg";

const Hero = () => {

  const textRef=useRef();
  useEffect(()=>
  {
    init(textRef.current, { showCursor: true, strings: [' Summer Intern 2024 at BNY '," Content Writer ",'Web Developer ', " Tech Enthusiast "] })
  },[]);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className="flex">
        <div className={`top-[80px] absolute max-w-7xl mx-auto sm:px-4 px-6 flex flex-row items-start gap-5`}>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>
          <div className="leading-[95px] xl:leading-[110px]">
            <h1 className={`font-black lg:text-[80px] sm:text-[50px] xs:text-[40px] text-[40px] mt-2 text-white`}>
              Hii there, I&apos;m <p className='font-[900] hero-section-body text-[#915EFF]'>Keshav Jha</p>
            </h1>
            <h3>
              <span ref={textRef} className={`text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] mt-2 green-text-gradient`}></span>
            </h3>
            <div className="absolute links leading-[40px] flex w-max bg-[#000] opacity-[0.3] z-[2] rounded-[3rem] gap-[0.8rem]">        
              <a href="https://github.com/KeshavJha2002" target="_blank" className="rounded-[50%] flex bg-transparent p-[0.9rem] text-[2rem] text-[#fff]">
                <AiOutlineGithub style={{color:"white"}}/>
              </a>
              <a href="https://www.linkedin.com/in/keshav-jha-1b4951225/" target="_blank" className="rounded-[50%] flex bg-transparent p-[0.9rem] text-[2rem] text-[#fff]">
                <ImLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="right-[4rem] top-[6rem] lg:w-[400px] lg:h-[400px] rounded-[40%] flex items-center justify-center  absolute violet-gradient w-[300px] h-[300px]">
          <img src={personal_pic} alt="" className="object-contain rounded-[45%] h-[90%]"/>
        </div>
      </div>
      <div className='absolute xs:bottom-10 bottom-32 w-10 flex justify-end items-center'>
        <a href='#education'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;