import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion'
import {SectionWrapper} from '../hoc'

const ServiceCard = ({ index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5*index,0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px]
        shadow-card'
      >
        <div
          options={{
            max:45,
            scale:1,
            speed:450
          }}
          className="b-tertiary rounded-[20px] py-5 px-12 min-h-[280px]
          flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title}
          className="w-16 h-16 object-contain"/>
          <h3 className="text_white text-[20px] font-bold
          text-center">{title}</h3>
        </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className ={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me:</h2>
      </motion.div>
      <motion.p variants={fadeIn("", ", 0.1, 1")}
      className='mt-4 text-secondary text-[17px] max-w-3X1 leading-[30px]'
      >
        I am a seasoned professional in Data Engineering, Machine Learning and Data Analytics. My career spans over 16 years, beginning as an actuary at AIG, followed by senior analytics and engineering roles at Verisk Analytics and Enstar Group, and lastly as the Director of Data Engineering at Everest. Over this time, I have built and maintained numerous data applications and systems that have successfully addressed business needs. During my nine years as a reserving actuary at AIG, I conducted reserve analyses (predictive analyses) to forecast ultimate losses and Incurred But Not Reported (IBNR) liabilities to calculate the company's reserve requirements.

        I continuously strive to expand my knowledge across various engineering and data analytics disciplines. Outside of work, I enjoy working on projects in diverse technology domains. My career goal is to develop a solid foundation in multiple engineering and analytics disciplines to lead innovative, interdisciplinary engineering and analytics projects throughout my career. I hold a BBA degree in Actuarial Science from Temple University and an MSc in Machine Learning from Stevens Institute of Technology.
      </motion.p>

      <div className = "mt-20 flex flex-wrap gap-10">
        {services.map((service, index)=>(
          <ServiceCard key={service.title} index= {index} {...service} 
          />  
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(About, "About");