import { SlBadge } from "react-icons/sl";
import { HiOutlineLightBulb } from "react-icons/hi";
import { TbMapSearch } from "react-icons/tb";
import Button from "./atoms/Button";
import Circle from "./atoms/Circle";

const Corevalues = () => {
  return (
    <div className="pb-10">
        <h1 className="text-responsive font-semibold text-center" >Our core values</h1>
        <div className="card-container gap-6 p-6">
            <div className="card gap-4 p-4  w-[18.125rem] md:w-[23.5rem] justify-center">
                <div>
                <div className="relative">
                    <Circle className="bg-bpyellowdark">
                    <TbMapSearch size={30} className="w-16" />
                    </Circle>
                </div>
                <h1 className="font-semibold">Curiosity</h1>
                <p className="text-[#1E1E1E]">we are always curious about what is going on in the mind of our audience, because we want to stay on top of it.</p>
                </div>
            </div>
            <div className="card gap-4  p-4 w-[18.125rem] md:w-[23.5rem] justify-center ">
                <div>
                <div>
                    <Circle className="bg-bpyellowdark">
                    <SlBadge size={30} className="w-16" />
                    </Circle>
                </div>
                <h1 className="font-semibold">Customer-focused</h1>
                <p className="text-[#1E1E1E]">our customers drive our decisions every step of the way. We pay close attention to their needs and ensure to satisfy them maximally.</p>
                </div>
            </div>
            <div className="card gap-4 p-4 w-[18.125rem]  md:w-[23.5rem] justify-center">
                <div>
                <div className="relative">
                    <Circle className="bg-bpyellowdark">
                    <HiOutlineLightBulb size={30} className="w-16"/>
                    </Circle>
                </div>
                <h1 className="font-semibold">Understanding</h1>
                <p className="text-[#1E1E1E]">our first call is to seek understanding of what our clients need and what their prospects want. This positions us to deliver a more customer-centric solution.</p>
                </div>
            </div>
        </div>
        <div className="grid place-content-end pr-2 "><Button className="px-5">See all</Button></div>
    </div>
  )
}

export default Corevalues