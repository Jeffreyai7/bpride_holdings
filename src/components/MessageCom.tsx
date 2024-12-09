import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";



const MessageCom = () => {

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
      className="flex flex-col md:flex-row gap-4 px-4 pt-4 pb-16 mb-10">
        <div className="flex-1">
            <h1 className="text-responsive">CEO Message</h1>
            <p className="text-responsivetext text-bpdarklight">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
               sed deiusmod tempor incididunt ut labore et dolore magna aliqua.
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
               reprehenderit in voluptate velit esse
            </p>
            <div>
              <div className="grid place-content-end">
                <span className="text-[1rem] md:text-[1.5rem]  ">Stanley Ojika</span>
                <span className="text-[1rem] md:text-[1.5rem] text-[#FEBD2D]">CEO BlackPride Holdings</span>
              </div>
            </div>
        </div>
        <div className="flex-1 flex justify-center items-baseline">
          <div className="relative w-[20rem]">
            <div>
              <img src="src\assets\images\ceoback.png" alt="" />
            </div>
            <div className="absolute top-0 right-5">
            <img className="w-[17.5rem] md:w-[21.8rem]" src="src\assets\images\ceo.png" alt="ceo" />
            <img className="w-[17.5rem] md:w-[21.8rem]" src="src\assets\images\horibar.png" alt="bar" />
            <img className="relative bottom-10 md:bottom-20 h-[24px] md:h-[58px]" src="src\assets\images\Rectanglehoriyellow.png" alt="b" />
            </div>
          </div>
        </div>
    </motion.div>
  )
}

export default MessageCom