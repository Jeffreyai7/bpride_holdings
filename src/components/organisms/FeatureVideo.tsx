import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";



const FeatureVideo = () => {

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
    >
      <h1 className="text-[#1F1F1E0D] md:text-[6rem] text-[2.6rem] text-center">Business Services</h1>
        <div className="w-[80%] max-w-[62.5rem] mx-auto pt-24 pb-48">
            <img src="/images/threep.png" alt="play" />
        </div>
    </motion.div>
  )
}

export default FeatureVideo