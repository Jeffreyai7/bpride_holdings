import Logopanel from "./Logopanel"
import Navbar from "./Navbar"

const Header = () => {
  return (
    <div className="bg-bpblack z-50 sticky top-0 left-0 right-0">
      <Logopanel/>
      <Navbar/>
    </div>
  )
}

export default Header