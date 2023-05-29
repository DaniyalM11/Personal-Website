import React from 'react'
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { IconContext } from "react-icons";
import {styles} from '../styles';
import {motion} from 'framer-motion';
import {textVariant} from '../utils/motion';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} mb-16`}>
          Technologies:
        </h2>
      </motion.div>
   
    <div className="flex flex-row flex-wrap
     justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          
          <IconContext.Provider value={{ className: 'react-icons' }}>
             <img src={technology.icon} alt={technology.name} />
          </IconContext.Provider> 
        </div>
      ))}
    </div>   
    </>  
  )
}

export default SectionWrapper(Tech, "");
