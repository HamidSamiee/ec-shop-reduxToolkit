import Slider from "../components/Slider/Slider";
import Header from "../components/Header/Header";
import NavigationBtn from "../components/NavigationBtn/NavigationBtn";


const Layout = (Props) => {

    const {children}=Props;

  return (
    <section>
        <Header />
        <Slider />
        <NavigationBtn />
        <div className="container px-4">
                {
                children
                }
        </div>   
    </section>
  )
}

export default Layout