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
        I am seasoned Data Engineering, Machine Learning, Analytics and Software Engineering professional. I have a career spanning over 16 years from working as an actuary at AIG to working in senior analytics and engineering roles at Verisk Analytics and Enstar Group to my current role as
        Director of Data Engineering at Everest. In that time I have built and maintained many data applications and systems which have fulfilled business needs. As a reserving actuary at AIG for 9 years I conducted reserve analysis(predictive analysis) to predict ultimate losses and IBNR for calculating
         reserve needs for the company.I try to learn as many software engineering disciplines as I can and in my time away from work, I like building projects in many different domains of technology. My career goals are to have a solid grasp on many engieering displines so I can lead many innovative and
        interdiscplinary engineerng and analytics projects throughout my career. I have a BBA degree in Actuarial Science from Temple university and MSC in Machine Learning from Stevens Institute of Technology.    

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