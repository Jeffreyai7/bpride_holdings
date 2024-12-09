import { FaSearch } from "react-icons/fa"
import Input from "./atoms/Input"
import { links } from "../constant"
import { Link} from "react-router-dom"
import { useEffect, useRef, useState } from "react"

const Navbar = () => {
 const [isMenuOpen, setIsMenuOpen] =  useState(false);
 const menuRef = useRef<HTMLUListElement>(null); // Reference to the mobile menu

 const handleClickOutside = (event: MouseEvent ) => {
  // Check if the click is outside the mobile menu
  if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
    setIsMenuOpen(false);
  }
};


 useEffect(() => {
  // Add event listener when the menu is open
  if (isMenuOpen) {
    document.addEventListener("mousedown", handleClickOutside);
  } else {
    document.removeEventListener("mousedown", handleClickOutside);
  }
  // Cleanup event listener on unmount
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [isMenuOpen]);

  return (
      <nav className="flex w-[95%] mx-auto gap-2 px-10 rounded-b-[50px] bg-white">
        <ul className=" hidden md:flex items-center justify-between w-[50%]">
          {
            links.map((link) => {
              return (
                <li key={link.name}>
                  <Link className="md:text-paragtextM  font-semibold hover:text-bpyellowdark transition-all" to={link.path}>{link.name}</Link>
                </li>
              )
            })
          }
        </ul> 
        <div className="flex items-center justify-between w-full md:w-[50%]">
          <img onClick={() => setIsMenuOpen(!isMenuOpen)} className="block md:hidden w-[26px] h-[26px]" src="src\assets\images\hamburg.png" alt="hamburger" />
          <ul 
          ref={menuRef}
          className={`md:hidden  absolute top-16 left-0 w-full bg-bpblack text-white shadow-lg transform transition-all duration-300 ease-in-out 
          ${isMenuOpen === true ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
          {
            links.map((link) => {
              return (
                <li className="mb-5 pl-3 text-center underline decoration-2 un underline-offset-4 " key={link.name}>
                  <Link className="md:text-paragtextM xl:text-paragtextD font-semibold hover:text-bpyellowdark transition-all" to={link.path}>{link.name}</Link>
                </li>
              )
            })
          }
        </ul>
            <Input name={"Search"} className="rounded-2xl px-4 w-[75%] bg-white py-2" children={<FaSearch size="20px" color="gray" />} />
            <span className="text-[20px] font-semibold">EN</span>
            <img className="hidden md:block w-[26px] h-[26px]" src="src\assets\images\hamburg.png" alt="hamburger" />
        </div>
    </nav>
  )
}

export default Navbar