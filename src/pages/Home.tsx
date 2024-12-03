import Aboutcomp from "../components/Aboutcomp"
import Choose from "../components/Choose"
import Corevalues from "../components/Corevalues"
import Herosection from "../components/Herosection"
import MessageCom from "../components/MessageCom"
import Ourservicescomp from "../components/Ourservicescomp"

const Home = () => {
  return (
    <div className="">
      <Herosection/>
      <Aboutcomp/>
      <Ourservicescomp/>
      <MessageCom/>
      <Corevalues/>
      <Choose/>
    </div>
  )
}

export default Home