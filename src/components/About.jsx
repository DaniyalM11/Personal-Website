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
        I am seasoned Machine Learning, Analytics and Software Engineering professional. I started my career at AIG 
        where I worked as an actuarial analyst performing reserve analysis to predict loss reserves for various lines 
        of business. I also built and maintained the databases using a star schema dimensinal model for our department which served up our whole 
        department's IBNR predictions to the financial reporting team to book into the financial ledger. After 
        9 years at AIG my next job was a Verisk Analytics were I joined a start up data initiative within our
        data acquisition team as a Senior Business Data Analyst. We acquired data from our various clients and performed transformations 
        on the data to fit into the format needed for statistical reporting. After spending 3 years doing that I moved to my current role
        as a Data Analyst-Actuarial at Enstar Group where I work on various data initiatives for the team. One of the major
        initatives to highlight development of a Data Warehouse using dimensional modeling along with the end to end design
        and development of how to serve the data to our end users.  

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