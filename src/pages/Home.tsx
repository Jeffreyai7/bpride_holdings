import Aboutcomp from "../components/organisms/Aboutcomp"
import Blogcomp from "../components/organisms/Blogcomp"
import Choose from "../components/organisms/Choose"
import Corevalues from "../components/organisms/Corevalues"
import FeatureVideo from "../components/organisms/FeatureVideo"
import Herosection from "../components/organisms/Herosection"
import MessageCom from "../components/organisms/MessageCom"
import Newsletter from "../components/organisms/Newsletter"
import Ourservicescomp from "../components/organisms/Ourservicescomp"


const Home = () => {

  return (
    <div>
      <Herosection/>
      <Aboutcomp/>
      <Ourservicescomp/>
      <MessageCom/>
      <Corevalues/>
      <Choose/>
      <FeatureVideo/>
      <Blogcomp/>
      <Newsletter/>
    </div>
  )
}

export default Home