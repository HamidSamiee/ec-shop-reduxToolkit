
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


const Layout = (Props) => {

    const {children}=Props;

  return (
    <section>
        <Header />
        <div className="">
                {
                children
                }
        </div>
        <Footer />   
    </section>
  )
}

export default Layout