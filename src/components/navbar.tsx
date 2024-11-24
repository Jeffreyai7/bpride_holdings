import { FaSearch } from "react-icons/fa"
import Input from "./atoms/Input"
import { links } from "../constant"
import { Link} from "react-router-dom"

const Navbar = () => {
  return (
      <nav className="flex w-[95%] mx-auto gap-2 px-10 rounded-b-[50px] bg-white">
        <ul className=" hidden md:flex items-center justify-between w-[50%]">
          {
            links.map((link) => {
              return (
                <li key={link.name}>
                  <Link className="md:text-paragtextM xl:text-paragtextD font-semibold hover:text-bpyellowdark transition-all" to={link.path}>{link.name}</Link>
                </li>
              )
            })
          }
        </ul> 
        <div className="flex items-center justify-between w-full md:w-[50%]">
          <img className="block md:hidden w-[26px] h-[26px]" src="src\assets\images\hamburg.png" alt="hamburger" />
            <Input name={"Search"} className="rounded-2xl px-4 w-[75%] bg-white py-2" children={<FaSearch size="20px" color="gray" />} />
            <span className="text-[20px] font-semibold">EN</span>
            <img className="hidden md:block w-[26px] h-[26px]" src="src\assets\images\hamburg.png" alt="hamburger" />
        </div>
    </nav>
  )
}

export default Navbar