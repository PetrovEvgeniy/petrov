import React from 'react';
import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';

import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';

import { SectionWrapper } from '../hoc';


const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
    <motion.div
    variants={fadeIn("right","spring",0.5 * index,0.75)}
    className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
    <div
    options={{
      max:25,
      scale:1,
      speed:450
    }}
    className="bg-tertiary py-5 px-12 rounded-[20px] min-h-[280px] flex justify-evenly items-center flex-col"
    >
      <img src={icon} alt={`${title} illustration image`} className="w-16 h-16 object-contain"/>
      <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
    </div>
    </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div
      variants={textVariant()}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About me.</h2>
      </motion.div>

      <motion.p
      variants={fadeIn("","",0.1,1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
      I'm a 22 years old Computer Science student from Bulgaria, who is inspired by technology and innovation. Always ready to learn new things and experiment with new innovative projects. Its my pleasure to deliver value to people by developing various kinds of web and mobile applications.  I strive to ensure that these programs not only enable people to showcase their work, but also empower them to bring their online business ideas to life or transform their creative concepts into practical solutions for the wider public.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => 
          <ServiceCard key={service.title} index={index} {...service}/>
        )}
      </div>
    </>
  )
}


export default SectionWrapper(About, "about")