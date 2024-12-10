import Button from "../components/atoms/Button"
import Servicehero from "../components/molecules/Servicehero"
import { serviceposts } from "../constant"

const Services = () => {
  return (
    <div>
      <Servicehero/>
      <div className="grid grid-cols-1 gap-8 p-5">
        {
          serviceposts.map((post) => {
            return (
              <div className="flex flex-col md:flex-row gap-2 items-center">
              <div className="flex-1">
                <h1 className="text-bpyellowdark text-[1.5rem] text-center" >{post.title}</h1>
                <p className="text-responsivetext text-bpdarklight">{post.info}</p>
                <Button className="px-4 py-2 font-normal my-4">Get Started</Button>
              </div>
              <div className="flex-1 rounded"><img src={post.imgurl} alt="img" /></div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Services