import { cardInfo } from "../../constant"
import Button from "../atoms/Button"

const Cards = () => {
  return (
<div className="card-container">
    {
        cardInfo.map((card) => {
            return (
                <div key={card.id} className="card rounded-[20px] w-[18.125rem] h-[16.875rem] md:w-[23.5rem] md:h-[22rem]">
                    <div className="flex pl-2 gap-2">
                        <div>
                            <img className="bg-[#FEBD2D26] w-[5.5rem] h-[4rem] md:w-[7.13rem] md:h-[5.13rem] " src={card.imglogo} alt="hello" />
                            <span className="text-[1.75rem] md:text-[2.25rem] font-medium text-[#FEBD2D80]"  >{card.id}</span>
                        </div>
                        <div><img className="w-[12.5rem] h-[7.5rem] md:w-[16.4rem] md:h-[9.81rem]"  src={card.imgurl} alt="me" /></div>
                    </div>
                    <div className="flex flex-col gap-4 px-2">
                    <h1 className="text-[1rem] md:text-[1.25rem]">{card.largetext}</h1>
                    <p className="text-[0.56rem] md:text-[0.75rem] text-[#1E1E1E66] leading-relaxed  mb-6">{card.paragraph}</p>
                    <Button className="bg-white text-[#FEBD2D] font-semibold w-[4.4rem] h-[1.5rem] md:w-[5.8rem] md:h-[1.88rem] p-[0.2rem] ">Read More</Button>
                    </div>
                </div>
            )
        })
    }
</div>
  )
}

export default Cards