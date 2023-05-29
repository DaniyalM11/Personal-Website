import {motion} from 'framer-motion';

import {styles} from '../styles';
import {ComputersCanvas} from './canvas';



const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 max-auto flex flex-row items-start
      gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#5ac0e8]"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className="text-[#5ac0e8]">Hi, I am Daniyal</span>
          </h1>
          <p className={`${styles.heroSubTest} mt-2 text-[#5ac0e8] text-[40px]`}>
            This website showcases a portfolio of my machine learning, software engineering and analytics projects. 
          </p>



        </div>
        <p className={`${styles.heroFooterText}  absolute bottom-10 absolute left-5 text-[#5ac0e8]
        lg:text-[30px] sm:block hidden xs:block hidden block hidden lg:leading-[40px]
        `}>
           Shatter your limits daily 
           
        </p>
        <p className={`${styles.heroFooterText}  absolute bottom-0 absolute left-10 text-[#5ac0e8] 
        lg:text-[21px] sm:block hidden xs:block hidden block hidden lg:leading-[30px]`}>
           - A Wise Man
           
        </p>         

        
      </div>
    
      <ComputersCanvas />

    </section>
  )
}

export default Hero