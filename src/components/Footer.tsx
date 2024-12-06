import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="bg-bpblack text-white font-semibold py-8 text-[0.6rem] md:text-[1rem]" >
      <div className="grid text-center md:grid-cols-2 md:text-left gap-3  lg:grid-cols-3 w-[90%] mx-auto">
        <div>
          <div className="flex justify-center md:justify-start">
          <img className="w-[71px] md:w-[88px]" src="src\assets\images\blackpridelogo.png" alt="logo" />
          </div>
          <p className="text-center md:text-left">Welcome to Black Pride Digital, your gateway to cutting-edge solutions and unparalleled services.
             We take pride in offering a comprehensive suite of services tailored to meet the diverse needs of 
             businesses striving for excellence in today&#39;s dynamic market.
             With a commitment to quality, creativity, and strategic thinking,
             we are your trusted partner in navigating the ever-evolving landscape of business.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div>
            <span className="text-bpyellowdark">Explore</span>
            <ul>
              <li className="hover:text-bpyellowdark"><Link to='/'>Home</Link></li>
              <li className="hover:text-bpyellowdark"><Link to='/about'>About us</Link></li>
              <li className="hover:text-bpyellowdark"><Link to='/services'>Services</Link></li>
              <li className="hover:text-bpyellowdark"><Link to='/about'>Meet Our Team</Link></li>
              <li className="hover:text-bpyellowdark"><Link to='/contact'>Contact us</Link></li>
              <li className="hover:text-bpyellowdark"><Link to='/privacy'>Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col gap-2 mb-2">
          <span className="text-bpyellowdark">Contact info</span>
          <ul className="flex flex-col gap-5">
            <li>+234 904 551 8531</li>
            <li>info@blackpridedigital.com.ng</li>
            <li>Office Phase, 60, 64, Allen Ave., Ikeja, Lagos, Nigeria</li>
          </ul>
          </div>
          <div className="flex gap-4 ">
            <FaFacebookSquare size={30}/> <FaInstagram size={30}/> <FaLinkedin size={30}/>
          </div>

        </div>
      </div>
        <p className="text-center ">© {new Date().getFullYear()} Black Pride Digital All Rights Reserved Made by Black Pride Digital</p>
    </div>
  )
}

export default Footer