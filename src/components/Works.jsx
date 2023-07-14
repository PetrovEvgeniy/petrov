import { useState } from 'react';
import {Tilt} from 'react-tilt';
import { motion } from 'framer-motion';

import {styles } from '../styles';
import {github,visit} from '../assets';
import { SectionWrapper } from '../hoc';
import {moreProjects, projects} from '../constants'
import { fadeIn,textVariant } from '../utils/motion';


const ProjectCard = ({index, name, description, tags, image, source_code_link, deployment_link, animate}) => {

  if(animate){
    return (
      <motion.div
      variants={fadeIn("up","spring",index * 0.5, 0.75)}
      >
        <Tilt
        options={{
          max:45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[300px] w-full"
        >
          <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          {deployment_link && (
            <div className="absolute inset-0 flex justify-start m-3 card-img_hover">
              <div 
              onClick={() => window.open(deployment_link,"_blank")} 
              className="flex justify-center items-center w-10 h-10 z-50 rounded-full black-gradient cursor-pointer opacity-70">
              <img
                src={visit}
                alt="visit"
                className="w-3/4 h-3/4 object-contain"
              />
              </div>
           </div>)}
            
  
          {source_code_link && (
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div 
              onClick={() => window.open(source_code_link,"_blank")} 
              className="flex justify-center items-center w-10 h-10 z-50 rounded-full black-gradient cursor-pointer opacity-70">
              <img
                src={github}
                alt="github"
                className="w-3/4 h-3/4 object-contain"
              />
              </div>
           </div>   
          )}
         
          </div>
  
          <div className="mt-5">
            <h3 className="text-white text-[24px] font-bold">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>
  
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p 
              key={tag.name} 
              className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    )
  }
  else{
    return (
      <div>
        <Tilt
        options={{
          max:45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[300px] w-full"
        >
          <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          {deployment_link && (
            <div className="absolute inset-0 flex justify-start m-3 card-img_hover">
              <div 
              onClick={() => window.open(deployment_link,"_blank")} 
              className="flex justify-center items-center w-10 h-10 z-50 rounded-full black-gradient cursor-pointer opacity-70">
              <img
                src={visit}
                alt="visit"
                className="w-3/4 h-3/4 object-contain"
              />
              </div>
           </div>)}
            
  
          {source_code_link && (
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div 
              onClick={() => window.open(source_code_link,"_blank")} 
              className="flex justify-center items-center w-10 h-10 z-50 rounded-full black-gradient cursor-pointer opacity-70">
              <img
                src={github}
                alt="github"
                className="w-3/4 h-3/4 object-contain"
              />
              </div>
           </div>   
          )}
         
          </div>
  
          <div className="mt-5">
            <h3 className="text-white text-[24px] font-bold">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>
  
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p 
              key={tag.name} 
              className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </div>
    )
  }
}




const Works = () => {

  const [showExtraWorks, setShowExtraWorks] = useState(false);

  return (
   <>
      <motion.div
      variants={textVariant()}
      >
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("","",0.1,1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Here, you'll find a collection of my showcased software projects. From intuitive mobile applications to efficient web platforms. Each project reflects my passion and expertise for creating user-centric software tailored to specific needs and developing innovative solutions.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project,index) => (
              <ProjectCard
              key={`project-${index}`}
              index={index}
              animate={true}
              {...project}
            />)
        )}
      </div>

      {showExtraWorks && <div className="mt-20 flex flex-wrap gap-7">
        {moreProjects.map((project,index) => (
              <ProjectCard
              className="z-10"
              key={`project-${index}`}
              index={index}
              animate={false}
              {...project}
            />)
        )}
      </div>}

      <div className="w-full flex justify-center">
          
        <button 
        type="button"
        
        className={`${showExtraWorks ? "hidden" : "flex"} z-30 mt-10 py-4 px-8 outline w-fit text-white rounded-lg  hover:scale-105 transform transition-all duration-200 ease-in-out `}
        onClick={() => setShowExtraWorks(!showExtraWorks)}
        >
        {!showExtraWorks ? "Show more..." : ""}
      </button>
      </div>

      
     
   </>
  )
}

export default SectionWrapper(Works,"work")