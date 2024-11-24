import Sliders from "./Sliders";


const Herosection = () => {
  

  return (
    <div className="">
        {/* <div className="w-80 h-96 absolute z-10 bg-circle top-0 opacity-100"></div> */}
        <div className="absolute top-0 z-30 opacity-50 w-[16rem] h-[16rem] md:w-[32.5rem] md:h-[32.5rem]"><img src="src\assets\images\Ellipsecir.png" alt=""/></div>
        <div className="absolute top-0 z-10 w-[44.5rem] h-[46rem] md:w-[89.5rem] md:h-[92.3rem]"><img src="src\assets\images\Ellipseb.png" alt="" /></div>
        <div className="absolute top-0 z-20   w-[44.5rem] h-[46rem] md:w-[89.5rem] md:h-[92.3rem]"><img src="src\assets\images\Ellipsesm.png" alt="" /></div>
        <div className="flex gap-2 ml-[2.68rem] mt-20 absolute z-20">
        <img className="w-[17px] h-[14px] md:w-[50px] md:h-[50px]" src="src\assets\images\Polygonw.png" alt="polygon" />
        <img className="justify-start w-[17px] h-[14px] md:w-[46px] md:h-[36px]" src="src\assets\images\Polygonw.png" alt="polygon" />
        <img className="w-[17px] h-[14px] md:w-[46px] md:h-[36px]" src="src\assets\images\Polygoncol.png" alt="polygon" />
        </div>
        <div className="">
        <Sliders/>
        </div>
    </div>
  )
}

export default Herosection;

