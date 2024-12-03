import Slider from "react-slick";
import Button from "./atoms/Button";
import Circle from "./atoms/Circle";

const Sliders = () => {
  const sliderSettings = {
    dots: false, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 5000,
  };

  return (  
    <Slider {...sliderSettings}>
        <div className="bg-cover bg-center bg-digital bg-black bg-opacity-15">
                      <div className="flex md:w-[75%] w-full px-10 pt-20" >
                            <div className="flex items-end ml-[4.75rem]">
                                <div className="flex flex-col gap-2">
                                <Circle className="bg-bpyellowdark">1</Circle>
                                <Circle className="bg-white">2</Circle>
                                <Circle className="bg-white">3</Circle>
                                <Circle className="bg-white">4</Circle>
                                </div>
                            </div>
                            <div className="text-center md:text-left flex flex-col gap-2 py-8 ml-[2.5rem]">
                                <div><span className="text-paragtextD text-bpyellowdark font-semibold ">Crafting Business since 1990</span></div>
                                <h1><span className="text-headingTextM md:text-headingTextD font-semibold text-white">We are the leading</span><br />
                                <span className="md:text-bigHeadingtextD text-bigHeadingtextM text-bpyellowdark font-semibold">Digital Agency.</span></h1>
                                <div className="w-[70%] mx-auto md:mx-0 md:w-[50%] text-paragtextM md:text-paragtextD">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia non excepturi ex.</div>
                                <div className="flex justify-center md:justify-start"><Button className="h-[26px] md:h-[46px] w-44 md:w-80 ">View our Services</Button></div>
                            </div>
                      </div>
          </div>
        <div className="bg-cover bg-center bg-realestate">
                      <div className="flex md:w-[75%] w-full px-10 pt-20" >
                            <div className="flex items-end ml-[4.75rem]">
                                <div className="flex flex-col gap-2">
                                <Circle className="bg-white">1</Circle>
                                <Circle className="bg-bpyellowdark">2</Circle>
                                <Circle className="bg-white">3</Circle>
                                <Circle className="bg-white">4</Circle>
                                </div>
                            </div>
                            <div className="text-center md:text-left flex flex-col gap-2 py-8 ml-[2.5rem]">
                                <div><span className="text-paragtextD text-bpyellowdark font-semibold ">Crafting Business since 1990</span></div>
                                <h1><span className="text-headingTextM md:text-headingTextD font-semibold text-white">We provide services in </span><br />
                                <span className="md:text-bigHeadingtextD text-bigHeadingtextM text-bpyellowdark font-semibold">Real Estate.</span></h1>
                                <div className="w-[70%] mx-auto md:mx-0 md:w-[50%] text-paragtextM md:text-paragtextD">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia non excepturi ex.</div>
                                <div className="flex justify-center md:justify-start"><Button className="h-[26px] md:h-[46px] w-44 md:w-80 ">View our Services</Button></div>
                            </div>
                      </div>
          </div>
        <div className="bg-cover bg-center bg-academy">
                      <div className="flex md:w-[75%] w-full px-10 pt-20" >
                            <div className="flex items-end ml-[4.75rem]">
                                <div className="flex flex-col gap-2">
                                <Circle className="bg-white">1</Circle>
                                <Circle className="bg-white">3</Circle>
                                <Circle className="bg-bpyellowdark">3</Circle>
                                <Circle className="bg-white">4</Circle>
                                </div>
                            </div>
                            <div className="text-center md:text-left flex flex-col gap-2 py-8 ml-[2.5rem]">
                                <div><span className="text-paragtextD text-bpyellowdark font-semibold ">Crafting Business since 1990</span></div>
                                <h1><span className="text-headingTextM md:text-headingTextD font-semibold text-white">We offer an effective</span><br />
                                <span className="md:text-bigHeadingtextD text-bigHeadingtextM text-bpyellowdark font-semibold">Academy.</span></h1>
                                <div className="w-[70%] mx-auto md:mx-0 md:w-[50%] text-paragtextM md:text-paragtextD">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia non excepturi ex.</div>
                                <div className="flex justify-center md:justify-start"><Button className="h-[26px] md:h-[46px] w-44 md:w-80 ">View our Services</Button></div>
                            </div>
                      </div>
          </div>
        <div className="bg-cover bg-center bg-web">
                      <div className="flex md:w-[75%] w-full px-10 pt-20" >
                            <div className="flex items-end ml-[4.75rem]">
                                <div className="flex flex-col gap-2">
                                <Circle className="bg-white">1</Circle>
                                <Circle className="bg-white">2</Circle>
                                <Circle className="bg-white">3</Circle>
                                <Circle className="bg-bpyellowdark">4</Circle>
                                </div>
                            </div>
                            <div className="text-center md:text-left flex flex-col gap-2 py-8 ml-[2.5rem]">
                                <div><span className="text-paragtextD text-bpyellowdark font-semibold ">Crafting Business since 1990</span></div>
                                <h1><span className="text-headingTextM md:text-headingTextD font-semibold text-white">We also offer services in</span><br />
                                <span className="md:text-bigHeadingtextD text-bigHeadingtextM text-bpyellowdark font-semibold">Web Hosting.</span></h1>
                                <div className="w-[70%] mx-auto md:mx-0 md:w-[50%] text-paragtextM md:text-paragtextD">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia non excepturi ex.</div>
                                <div className="flex justify-center md:justify-start"><Button className="h-[26px] md:h-[46px] w-44 md:w-80 ">View our Services</Button></div>
                            </div>
                      </div>
          </div>

    </Slider>
  )
}

export default Sliders