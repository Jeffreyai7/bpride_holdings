import Slider from "react-slick";
import Button from "../atoms/Button";
import Circle from "../atoms/Circle";
import { Link } from "react-router-dom";

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
        <div className="bg-cover bg-center bg-digital py-5">
                      <div className="flex justify-center  md:w-[75%] w-full px-10 pt-20" >
                            <div className="flex items-end ml-[4.75rem]">
                                <div className="flex flex-col gap-2">
                                <Circle className="bg-bpyellowdark">1</Circle>
                                <Circle className="bg-white">2</Circle>
                                <Circle className="bg-white">3</Circle>
                                <Circle className="bg-white">4</Circle>
                                </div>
                            </div>
                            <div className="text-center md:text-left flex flex-col gap-2 py-8 ml-[2.5rem] ">
                                {/* <div><span className="text-[1.5rem] text-bpyellowdark font-bold underline decoration-2 underline-offset-8 ">...innovations and inventions that rule the world</span></div> */}
                                <h1><span className="text-headingTextM md:text-headingTextD font-semibold text-white bg-bpdarklight">We are the leading</span><br />
                                <span className="md:text-[3rem] text-bigHeadingtextM text-bpyellowdark font-semibold underline decoration-4 decoration-bpyellowdark underline-offset-8">Digital Agency.</span></h1>
                                <div className="w-[70%] mx-auto md:mx-0 md:w-[50%] text-paragtextM md:text-paragtextD  text-white bg-bpdarklight">From SEO to social media, we deliver measurable results that transform your online presence into a growth engine.</div>
                                <div className="flex justify-center md:justify-start"><Link  to={"/services"}><Button className="h-[26px] md:h-[46px] w-40 md:w-80 md:text-paragtextD text-paragtextM">View our Services</Button></Link></div>
                            </div>
                      </div>
          </div>
        <div className="bg-cover bg-center bg-realestate py-5">
                      <div className="flex justify-center md:w-[75%] w-full px-10 pt-20" >
                            <div className="flex items-end ml-[4.75rem]">
                                <div className="flex flex-col gap-2">
                                <Circle className="bg-white">1</Circle>
                                <Circle className="bg-bpyellowdark">2</Circle>
                                <Circle className="bg-white">3</Circle>
                                <Circle className="bg-white">4</Circle>
                                </div>
                            </div>
                            <div className="text-center md:text-left flex flex-col gap-2 py-8 ml-[2.5rem]">
                                {/* <div><span className="text-[1.5rem] text-bpyellowdark font-semibold underline decoration-2 underline-offset-8 ">...innovations and inventions that rule the world </span></div> */}
                                <h1><span className="text-headingTextM md:text-headingTextD font-semibold text-white bg-bpdarklight">We provide services in </span><br />
                                <span className="md:text-[3rem] text-bigHeadingtextM text-bpyellowdark font-semibold underline decoration-4 decoration-bpyellowdark underline-offset-8">Real Estate.</span></h1>
                                <div className="w-[70%] mx-auto md:mx-0 md:w-[50%] text-paragtextM md:text-paragtextD  text-white bg-bpdarklight">Discover exceptional properties, trusted agents, and tailored solutions for buying, selling, or renting.</div>
                                <div className="flex justify-center md:justify-start text-paragtextM md:text-paragtextD"><Link  to={"/services"}><Button className="h-[26px] md:h-[46px] w-40 md:w-80 md:text-paragtextD text-paragtextM">View our Services</Button></Link></div>
                            </div>
                      </div>
          </div>
        <div className="bg-cover bg-center bg-academy  py-5">
                      <div className="flex justify-center md:w-[75%] w-full px-10 pt-20" >
                            <div className="flex items-end ml-[4.75rem]">
                                <div className="flex flex-col gap-2">
                                <Circle className="bg-white">1</Circle>
                                <Circle className="bg-white">2</Circle>
                                <Circle className="bg-bpyellowdark">3</Circle>
                                <Circle className="bg-white">4</Circle>
                                </div>
                            </div>
                            <div className="text-center md:text-left flex flex-col gap-2 py-8 ml-[2.5rem]">
                                {/* <div><span className="text-[1.5rem] text-bpyellowdark font-semibold underline decoration-2 underline-offset-8 ">...innovations and inventions that rule the world </span></div> */}
                                <h1><span className="text-headingTextM md:text-headingTextD font-semibold text-white bg-bpdarklight">We offer an effective</span><br />
                                <span className="md:text-[3rem] text-bigHeadingtextM text-bpyellowdark font-semibold underline decoration-4 decoration-bpyellowdark underline-offset-8">Academy.</span></h1>
                                <div className="w-[70%] mx-auto md:mx-0 md:w-[50%] text-paragtextM md:text-paragtextD text-white bg-bpdarklight">Whether you're upskilling, reskilling, or exploring new passions, our academy is your gateway to success.</div>
                                <div className="flex justify-center md:justify-start"><Link  to={"/services"}><Button className="h-[26px] md:h-[46px] w-40 md:w-80 md:text-paragtextD text-paragtextM">View our Services</Button></Link></div>
                            </div>
                      </div>
          </div>
        <div className="bg-cover bg-center bg-web py-5">
                      <div className="flex justify-center md:w-[75%] w-full px-10 pt-20" >
                            <div className="flex items-end ml-[4.75rem]">
                                <div className="flex flex-col gap-2">
                                <Circle className="bg-white">1</Circle>
                                <Circle className="bg-white">2</Circle>
                                <Circle className="bg-white">3</Circle>
                                <Circle className="bg-bpyellowdark">4</Circle>
                                </div>
                            </div>
                            <div className="text-center md:text-left flex flex-col gap-2 py-8 ml-[2.5rem]">
                                {/* <div><span className="text-[1.5rem] text-bpyellowdark font-semibold underline decoration-2 underline-offset-8">...innovations and inventions that rule the world </span></div> */}
                                <h1><span className="text-headingTextM md:text-headingTextD font-semibold text-white bg-bpdarklight">We also offer services in</span><br />
                                <span className="md:text-[3rem] text-bigHeadingtextM text-bpyellowdark font-semibold underline decoration-4 decoration-bpyellowdark underline-offset-8">Web Hosting.</span></h1>
                                <div className="w-[70%] mx-auto md:mx-0 md:w-[50%] text-paragtextM md:text-paragtextD text-white bg-bpdarklight">Whether you're launching your first website or scaling to millions of visitors, weve got you covered.</div>
                                <div className="flex justify-center md:justify-start"><Link  to={"/services"}><Button className="h-[26px] md:h-[46px] w-40 md:w-80 md:text-paragtextD text-paragtextM">View our Services</Button></Link></div>
                            </div>
                      </div>
          </div>
    </Slider>
  ) 
}

export default Sliders