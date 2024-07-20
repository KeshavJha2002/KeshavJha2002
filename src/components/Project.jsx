import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import github from "../assets/project/github.png";
import demo from "../assets/project/demo.png";
import SectionWrapper from "../hoc/SectionWrapper";
import {list} from "../constants"
import { fadeIn, textVariant } from "../utils/motion";
import { cProject, pythonProject, webProject, otherProject } from "../constants";
import ProjectList from "./ProjectList";


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  source_link,
}) => {
  return (
    <motion.div>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='height-[500px] bg-tertiary p-5 rounded-2xl sm:w-[330px] w-full'
      >
        <div className='cursor-pointer relative w-full h-[180px] hover:bg-[#030325]'>
          <img
            src={image}
            alt='project_image'
            className='hover:z-[0] hover:opacity-[0.2] w-full h-full object-cover rounded-2xl z-[1]'
          />

        <div className='absolute inset-0 flex justify-center card-img_hover' style={{alignItems: "center",}}>
          <h3 className='text-black font-bold text-[16px] opacity-0 hover:opacity-[1] hover:z-[1] hover:text-[#fff]'>{name}</h3>
          </div>

          <div className='opacity-0 absolute inset-0 flex justify-end card-img_hover hover:opacity-[1] hover:z-[1]'>
            <div
              onClick={() => window.open(source_link, "_blank")}
              className='black-gradient w-10 h-10 m-2 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={demo}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'/>
            </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 m-2 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>

          </div>          
        </div>

        <div className='content mt-5'>
          <p className='mt-2 text-secondary text-[14px]' style={{textAlign:'justify'}}>{description}</p>
        </div>

        <div className='content mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};
const Project = () => {

  const [selected, setSelected] = useState("python");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "python":
        setData(pythonProject);
        break;
      case "c++":
        setData(cProject);
        break;
      case "web":
        setData(webProject);
        break;
      case "other":
        setData(otherProject);
        break;

      default:
        setData(cProject);
    }
  }, [selected]);

  return (
    <>
      <motion.div id="projects" variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">My work</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-left pl-[10px]">Projects.</h2>
      </motion.div>

      <div className='flex flex-col items-center w-full'>
        <motion.div whileInView={{ opacity: 1 , transform : 'none'}}
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] leading-[30px]'
        >
        <ul className="p-[0] m-[10px] flex justify-center list-none">
        {list.map((item) => (
          <ProjectList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>

      <div className='gap-[1.75rem] mt-20 flex flex-wrap justify-center'>
        {data.map((project, index) => (
          <div>
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          </div>
        ))}
      </div>
      </motion.div>
      </div>

    </>
  );
};

export default SectionWrapper(Project, "project");