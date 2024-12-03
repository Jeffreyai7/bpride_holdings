import Aboutcomp from "../components/Aboutcomp"
import Blogcomp from "../components/Blogcomp"
import Choose from "../components/Choose"
import Corevalues from "../components/Corevalues"
import FeatureVideo from "../components/FeatureVideo"
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
      <FeatureVideo/>
      <Blogcomp/>
    </div>
  )
}

export default Home