import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { textVariant } from "../utils/motion";
import FeedbackCard from "./FeedbackCard";
import { educations } from "../constants";

const Education = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className="bg-tertiary rounded-2xl sm:px-16 px-6 sm:py-16 py-10 min-h-[300px]">
        <motion.div variants={textVariant()}>
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Education Details...</p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Education.</h2>
        </motion.div>
      </div>
      <div className="-mt-20 justify-center pb-14 sm:px-4 px-6 flex flex-wrap gap-7">
        {educations.map((education, index) => (
          <FeedbackCard key={education.name} index={index} {...education} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "education");