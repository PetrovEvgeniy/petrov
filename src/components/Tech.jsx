import { useState } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { zoomIn } from "../utils/motion";


const TechCard = ({name, icon}) => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  const paragraphStyle = {
    className: `${isHovered ? "font-bold" : ""} w-full text-center text-[16px] mt-2`,
  };

  return (
  <motion.div 
    className="w-20 h-20 mx-2 my-4"
    variants={zoomIn(0.20,0.75)}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
    
      <img src={icon} alt={name} className="w-full h-full object-contain"/>
      <p className={paragraphStyle.className}>{name}</p>
  </motion.div>
)}

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-5">
      {technologies.map((tech, index) => (
        <TechCard key={`tech-${index}`}{...tech}/>
      ))}

    </div>
  )
}

export default SectionWrapper(Tech,"tech")