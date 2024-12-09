import Button from "./atoms/Button"
import Cards from "./molecules/Cards"
import { BsArrowRight } from "react-icons/bs"
import { motion } from 'framer-motion';

const Ourservicescomp = () => {

 
  return (
    <motion.div 
    
    className="bg-black py-4 md:mt-14">
        <div>
          <div>
            <div className="text-[13px] md:text-[20px] text-center text-white underline decoration-2 decoration-bpyellowdark underline-offset-8 mb-3"><span>Our Services</span></div>
            <div className="text-[1.25rem] md:text-[2.25rem] text-center text-white"><span>We offer services that would take your <br /> Business to the next level</span></div>
          </div>
            <div className="">
                <Cards/>
            </div>
            <div className="grid place-content-end pr-2 "><Button className="px-6 py-2 flex items-center gap-1">See all <BsArrowRight/> </Button></div>
        </div>  
    </motion.div>
  )
}

export default Ourservicescomp