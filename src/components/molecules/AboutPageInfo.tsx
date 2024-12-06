import { HiOutlineLightBulb } from "react-icons/hi"
import { SlBadge } from "react-icons/sl"
import { TbMapSearch } from "react-icons/tb"
import Circle from "../atoms/Circle"
import { GrDeliver } from "react-icons/gr"

const AboutPageInfo = () => {
  return (
    <div className="">
    <div className="flex flex-col md:flex-row gap-5 p-5">
        <p className=" flex-1 text-responsivetext text-bpdarklight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Autem sequi inventore beatae repellat quibusdam eum natus 
            impedit dolorum doloremque maiores maxime dolor, 
            magni aliquam praesentium harum, cupiditate quaerat est nam!
        </p>
        <div className="flex-1 md:min-w-80">
            <img src="src\assets\images\hero.webp" alt="abouthero" />
        </div>
    </div>
    <div className="pb-10">
        <h1 className="text-responsive font-semibold text-center underline decoration-bpyellowdark decoration-4 underline-offset-8 mb-3" >Our core values</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            <div className="card gap-4 p-4 justify-center">
                <div>
                <div className="relative">
                    <Circle className="bg-bpyellowdark">
                    <TbMapSearch size={30} className="w-16" />
                    </Circle>
                </div>
                <h1 className="font-semibold">Curiosity</h1>
                <p className="text-bpdarklight">we are always curious about what is going on in the mind of our audience, because we want to stay on top of it.</p>
                </div>
            </div>
            <div className="card gap-4  p-4 justify-center ">
                <div>
                <div>
                    <Circle className="bg-bpyellowdark">
                    <SlBadge size={30} className="w-16" />
                    </Circle>
                </div>
                <h1 className="font-semibold">Customer-focused</h1>
                <p className="text-bpdarklight">our customers drive our decisions every step of the way. We pay close attention to their needs and ensure to satisfy them maximally.</p>
                </div>
            </div>
            <div className="card gap-4 p-4 justify-center">
                <div>
                <div className="relative">
                    <Circle className="bg-bpyellowdark">
                    <HiOutlineLightBulb size={30} className="w-16"/>
                    </Circle>
                </div>
                <h1 className="font-semibold">Innovation</h1>
                <p className="text-bpdarklight">Excellence to us is about doing it better than it's ever been done. We are our own competition and we are always getting better.</p>
                </div>
            </div>
            <div className="card gap-4 p-4 justify-center">
                <div>
                <div className="relative">
                    <Circle className="bg-bpyellowdark">
                    <GrDeliver size={30} className="w-16"/>
                    </Circle>
                </div>
                <h1 className="font-semibold">Deliver-on-our-word</h1>
                <p className="text-bpdarklight">we try to do what we say we will do to the very details.</p>
                </div>
            </div>
            <div className="card gap-4 p-4 justify-center">
                <div>
                <div className="relative">
                    <Circle className="bg-bpyellowdark">
                    <GrDeliver size={30} className="w-16"/>
                    </Circle>
                </div>
                <h1 className="font-semibold">Understanding</h1>
                <p className="text-bpdarklight">our first call is to seek understanding of what our clients need and what their prospects want.</p>
                </div>
            </div>
            <div className="card gap-4 p-4 justify-center">
                <div>
                <div className="relative">
                    <Circle className="bg-bpyellowdark">
                    <GrDeliver size={30} className="w-16"/>
                    </Circle>
                </div>
                <h1 className="font-semibold">Effective Communication</h1>
                <p className="text-bpdarklight">we ensure to keep our clients updated with every milestone we hit via our robust communication channels</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AboutPageInfo