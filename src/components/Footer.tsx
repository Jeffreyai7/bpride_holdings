import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="" >
      <div>
        <div>
          <img src="" alt="" />
          <p>Welcome to Black Pride Digital, your gateway to cutting-edge solutions and unparalleled services.
             We take pride in offering a comprehensive suite of services tailored to meet the diverse needs of 
             businesses striving for excellence in today’s dynamic market.
             With a commitment to quality, creativity, and strategic thinking,
             we are your trusted partner in navigating the ever-evolving landscape of business.
          </p>
        </div>
        <div>
            <span>Explore</span>
            <ul>
              <li><Link to='/about'>About us</Link></li>
              <li><Link to='/about'>Core Value</Link></li>
              <li><Link to='/about'>About us</Link></li>
              <li><Link to='/about'>About us</Link></li>
              <li><Link to='/about'>About us</Link></li>
              <li><Link to='/about'>About us</Link></li>
              <li><Link to='/about'>About us</Link></li>
            </ul>
        </div>
        <div>
          
        </div>
      </div>
      <div>
        <p>© 2023 Black Pride Digital  All Rights Reserved Made by Black Pride Digital</p>
      </div>
    </div>
  )
}

export default Footer