import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn,zoomIn } from "../utils/motion";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-5">
      {technologies.map((tech, index) => (
        <motion.div 
        key={index} 
        className="w-20 h-20 mx-2 my-4"
        variants={zoomIn(0.20,0.75)}
        >
        
          <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain"/>
          <p className="w-full text-center text-[16px] mt-2">{tech.name}</p>
        </motion.div>
        
      ))}

    </div>
  )
}

export default SectionWrapper(Tech,"tech")