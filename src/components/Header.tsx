import Logopanel from "./Logopanel"
import Navbar from "./Navbar"

const Header = () => {
  return (
    <div className="bg-bpblack relative z-50">
      <Logopanel/>
      <Navbar/>
    </div>
  )
}

export default Header