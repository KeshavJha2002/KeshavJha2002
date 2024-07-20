import { useState } from "react";
import { AiOutlineHome,AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { MdMessage } from "react-icons/md";
import {BsPersonWorkspace} from "react-icons/bs"
import Tooltip from '@mui/material/Tooltip'

const Content = () => {
    const [activeNav, setActiveNav] = useState("#");
    return (
      <div className="w-max bg-[#000] opacity-[0.6] z-[200] py-[0.7rem] fixed bottom-[1rem] m-[auto] transform translate-x-1/2 flex gap-[0.8rem] rounded-[3rem] backdrop-blur-md">        
        <Tooltip title="Home">
          <a
            href="#"
            onClick={() => setActiveNav("#")}
            className={`rounded-[50%] ${activeNav === "#" ? "active" : ""} bg-transparent p-[0.9rem] flex text-[1.3rem] text-white hover:bg-[#000] hover:opacity-[0.8] hover:text-white z-[220]`}>
            <AiOutlineHome />
          </a>
        </Tooltip>
        <Tooltip title="Education">
          <a
            href="#education"
            onClick={() => setActiveNav("#education")}
            className={`rounded-[50%] ${activeNav === "#education" ? "active" : ""} bg-transparent p-[0.9rem] flex text-[1.3rem] text-white hover:bg-[#000] hover:opacity-[0.8] hover:text-white active:opacity-[0.5] z-[220]`}>
            <BiBook />
          </a>
        </Tooltip>
        <Tooltip title="Project">
          <a
            href="#project"
            onClick={() => setActiveNav("#project")}
            className={`rounded-[50%] ${activeNav === "#project" ? "active" : ""} bg-transparent p-[0.9rem] flex text-[1.3rem] text-white hover:bg-[#000] hover:opacity-[0.8] active:opacity-[0.5]`}>
            <AiOutlineFundProjectionScreen />
          </a>
        </Tooltip>
        <Tooltip title="Experience">
          <a
            href="#experience"
            onClick={() => setActiveNav("#experience")}
            className={`rounded-[50%] ${activeNav === "#experience" ? "active" : ""} bg-transparent p-[0.9rem] flex text-[1.3rem] text-white hover:bg-[#000] hover:opacity-[0.8] active:opacity-[0.5]`}>
            <BsPersonWorkspace />
          </a>
        </Tooltip>
        <Tooltip title=" Contact Me">
          <a
            href="#contact"
            onClick={() => setActiveNav("#contact")}
            className={`${activeNav === "#contact" ? "active" : ""} rounded-[50%] bg-transparent p-[0.9rem] flex text-[1.3rem] text-white hover:bg-[#000] hover:opacity-[0.8] active:opacity-[0.5]`}>
            <MdMessage />
          </a>
        </Tooltip>
      </div>
    );
  };

export default Content