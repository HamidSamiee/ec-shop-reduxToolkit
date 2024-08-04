import ProductSection from "../../components/ProductSection/ProductSection"
import Slider from "../../components/Slider/Slider"
import NavigationBtn from "../../components/NavigationBtn/NavigationBtn"

const Home = () => {
  return (
    <>
      <Slider />
      <NavigationBtn />
      <div className="container px-4">
        <ProductSection/>
      </div>
    </>
    
  )
}

export default Home