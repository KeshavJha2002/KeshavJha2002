import BallCanvas from "./canvas/Ball";
import SectionWrapper from "../hoc/SectionWrapper";
import { technologies_languages, technologies_framework_and_libraries, technologies_databases, technologies_tools } from "../constants";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <>
      <motion.div id="tech" variants={textVariant()}>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center pb-[16px]">
          Tools
        </h2>
      </motion.div>
    <div className="flex flex-col gap-[1.6rem]">
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies_languages.map((technologies_language) => (
          <div style={{height: '5rem', width: "5rem"}} key={technologies_languages.name}>
            <BallCanvas icon={technologies_language.icon} />
          </div>
        ))}
      </div>

      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies_framework_and_libraries.map((technologies_framework_and_library) => (
          <div style={{height: '5rem', width: "5rem"}} key={technologies_framework_and_library.name}>
            <BallCanvas icon={technologies_framework_and_library.icon} />
          </div>
        ))}
      </div>

      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies_databases.map((technologies_database) => (
          <div style={{height: '5rem', width: "5rem"}} key={technologies_database.name}>
            <BallCanvas icon={technologies_database.icon} />
          </div>
        ))}
      </div>

      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies_tools.map((technologies_tool) => (
          <div style={{height: '5rem', width: "5rem"}} key={technologies_tool.name}>
            <BallCanvas icon={technologies_tool.icon} />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");