import Slider from "../components/Slider/Slider";
import Header from "../components/Header/Header";


const Layout = (Props) => {

    const {children}=Props;

  return (
    <section>
        <Header />
        <Slider />
        <div className="container px-4">
                {
                children
                }
        </div>   
    </section>
  )
}

export default Layout