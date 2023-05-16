import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import {motion} from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import {styles} from '../styles';
import { education } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';



const EducationCard = ({education}) => {
  <VerticalTimelineElement
    contentStyle={{background: '#1d1836', color:'#fff'}}
  >
    //TODO: Add education card info
  </VerticalTimelineElement>
};


const Education = () => {
  return (
    <>
      <motion.div
      variants={textVariant()}
      >
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Academic Background.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {education.map((education, index) => (
            <EducationCard key={index} education={education}/>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Education,"education")