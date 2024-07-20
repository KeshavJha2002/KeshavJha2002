import SectionWrapper from "../hoc/SectionWrapper";
import { profiles } from "../constants";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <>
      <motion.div id="tech" variants={textVariant()}>
        <h2 className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center`}>
          Profile Section
        </h2>
      </motion.div>
    <div className='mt-[30px] flex flex-wrap items-center text-center justify-center'>
      {profiles.map((profile) => (
        <div className="my-[0] mx-[15px] flex flex-col justify-center items-center" data-aos="fade-up" data-aos-delay="200">
        <div className="transition duration-1000 ease w-[70px] h-[70px] mb-[2rem] flex ">
          <a href={profile.link} target="_blank" className="overflow-hidden hover:scale-110">
            <img src={profile.icon} className="w-[70px] h-[70px]"/>
          </a>
        </div>
      </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Profile, "");