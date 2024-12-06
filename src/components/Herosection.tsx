import Sliders from "./Sliders";


const Herosection = () => {
  

  return (
    <div className="relative left-0 right-0 overflow-hidden ">
        {/* <div className="w-80 h-96 absolute z-10 bg-circle top-0 opacity-100"></div> */}
        <div className="absolute mb-[320px] z-30 opacity-50 w-[12rem] h-[16rem] md:w-[25.5rem] md:h-[32.5rem]"><img src="src\assets\images\Ellipsecir.png" alt=""/></div>
        <div className="absolute bottom-48 z-10 opacity-70 w-[44.5rem] h-[46rem] md:w-[89.5rem] md:h-[92.3rem]"><img src="src\assets\images\Ellipseb.png" alt="" /></div>
        <div className="absolute bottom-48 z-20 opacity-70  w-[44.5rem] h-[46rem] md:w-[89.5rem] md:h-[92.3rem]"><img src="src\assets\images\Ellipsesm.png" alt="" /></div>
        <div className="flex gap-2 ml-[2.68rem] opacity-100 mt-20 absolute z-30">
        <img className="w-[17px] h-[14px] md:w-[50px] md:h-[50px]" src="src\assets\images\Polygonw.png" alt="polygon" />
        <img className="justify-start w-[17px] h-[14px] md:w-[46px] md:h-[36px]" src="src\assets\images\Polygonw.png" alt="polygon" />
        <img className="w-[17px] h-[14px] md:w-[46px] md:h-[36px]" src="src\assets\images\Polygoncol.png" alt="polygon" />
        </div>
        <div className="relative z-10 ">
        <Sliders/>
        </div>
    </div>
  )
}
export default Herosection;

