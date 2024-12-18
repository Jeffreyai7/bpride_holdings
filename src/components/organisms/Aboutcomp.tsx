import Button from '../atoms/Button'
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";

const Aboutcomp = () => {
 
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation once when it enters the viewport
    threshold: 0.5, // Trigger when 50% of the component is in view
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1 }}
     className='relative z-10 flex flex-col md:flex-row gap-40 md:gap-4 pt-4 pb-32 bg-white'>
        <div className=' flex-1 flex items-center justify-center overflow-x-clip'>
        <div className='relative  '>
            <div><img className='h-72 w-[280px] md:w-[431px] md:h-[440px]' src="/images/people.png" alt="" /></div>
            <div className='absolute top-20 md:top-[150px] -left-[46px] md:-left-[72px] flex w-36 h-9 md:w-56 md:h-14 items-center gap-1 bg-white p-1 shadow-sm border-[2px] rounded-2xl '>
            <img className='w-6 h-6 md:w-10 md:h-10' src="/images/Ellipseimg.png" alt="" />
            <div className='flex flex-col'>
                <span className='text-[7.7px] md:text-[12px]'>Our happy Customer</span>
                <div className='flex items-center'><img className='h-[10px] w-[9px] md:h-4 md:w-4' src="/images/Star.png" alt="" /><span className='text-[6.4px] md:text-[10px]'><b>4.8</b>{`(feedback received)`}</span></div>
            </div>
            <div className='absolute left-[200px] -top-[-80px]  md:left-[310px] md:-top-[-100px]  bg-white w-44 h-56 md:w-[269px] md:h-[336px] border-white border-[10px] rounded-[10px] md:rounded-[14px]'><img className='w-full'  src="/images/man.png" alt="" /></div>
            </div>
        </div>
        </div>
        <div className='flex-1 grid place-content-end'>
        <div className='flex flex-col gap-4'>
            <h1 className='text-center text-responsive font-semibold underline decoration-4 decoration-bpyellowdark underline-offset-8'>About Us</h1>
            <p className='text-center text-responsivetext  font-medium md:text-left text-bpdarklight px-2 md:w-[70%] md:mx-auto '>
             Welcome to Black Pride Holdings, 
             your gateway to cutting-edge solutions and
             unparalleled services. We take pride in offering 
             a comprehensive suite of services tailored to meet the
             diverse needs of businesses striving for excellence in today's dynamic market.
             With a commitment to quality, creativity, and strategic thinking,
             we are your trusted partner
             in navigating the ever-evolving landscape of business.
            </p>
            <div className='flex justify-center md:justify-start md:w-[70%] md:mx-auto'>
            <Button className='text-paragtextM w-[139px]  md:w-44 md:text-paragtextD py-2'>Read More</Button>
            </div>
        </div>
        </div>
    </motion.div>
  )
}

export default Aboutcomp