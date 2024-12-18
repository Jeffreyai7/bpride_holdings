import Circle from "../atoms/Circle"

const Choose = () => {
  return (
    <div className="bg-black bg-circle bg-contain bg-left-top  pt-6 pb-20">
        <div>
            <h1 className="text-[0.875rem] md:text-[1.5rem] text-white text-center mb-28 font-medium underline decoration-2 underline-offset-2 decoration-bpyellowdark">Why Choose Black Pride Digital?</h1>
        </div>
        <div className="card-container">
            <div className="card w-[18.125rem] md:w-[23.5rem]  p-8 justify-center ">
                <div>
                <div>
                    <Circle className="bg-bpyellowdark">
                    <img className="ml-4" src="/images/streamline_industry-innovation-and-infrastructure.png" alt="" />
                    </Circle>
                </div> 
                <h1 className="text-[1.2rem] md:text-[1.5rem] font-semibold">Innovation</h1>
                <p className="text-responsivetext text-bpdarklight">We thrive on innovation and constantly explore new ideas and technologies to keep you ahead of the curve.</p>
                </div>
            </div>
            <div className="card w-[18.125rem] md:w-[23.5rem] p-8 justify-center ">
                <div>
                <div>
                    <Circle className="bg-bpyellowdark" >
                    <img className="ml-4"  src="/images/fa-regular_thumbs-up.png" alt="" />
                    </Circle>
                </div>
                <h1 className="text-[1.2rem] md:text-[1.5rem] font-semibold">Quality</h1>
                <p className="text-responsivetext text-bpdarklight">We thrive on innovation and constantly explore new ideas and technologies to keep you ahead of the curve.</p>
                </div>
            </div>
            <div className="card w-[18.125rem] md:w-[23.5rem] p-8 justify-center">
                <div>
                <div>
                    <Circle className="bg-bpyellowdark">
                    <img className="ml-4" src="/images/fa-regular_handshake.png" alt="" />
                    </Circle>
                </div>
                <h1 className="text-[1.2rem] md:text-[1.5rem] font-semibold">Client-First Approach</h1>
                <p className="text-responsivetext text-bpdarklight">Your success is our success. We prioritize clear communication, collaboration, and understanding your business goals to deliver solutions that align with your vision.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Choose