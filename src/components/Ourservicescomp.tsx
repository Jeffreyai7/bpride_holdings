import Button from "./atoms/Button"
import Cards from "./molecules/Cards"

const Ourservicescomp = () => {
  return (
    <div className="bg-black py-4 md:mt-14">
        <div>
          <div>
            <div className="text-[13px] md:text-[20px] text-center text-white"><span>Our Services</span></div>
            <div className="text-[1.25rem] md:text-[2.25rem] text-center text-white"><span>We offer services that would take your <br /> Business to the next level</span></div>
          </div>
            <div className="">
                <Cards/>
            </div>
            <div className="grid place-content-end pr-2 "><Button className="px-5">See all</Button></div>
        </div>  
    </div>
  )
}

export default Ourservicescomp