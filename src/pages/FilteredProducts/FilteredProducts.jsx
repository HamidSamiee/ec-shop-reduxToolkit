import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import ProductCard from "./ProductCard";
import Slider from "../../components/Slider/Slider";
import NavigationBtn from "../../components/NavigationBtn/NavigationBtn";



const FilteredProducts = () => {
 
  const products=useSelector(state=>state.products.filteredProducts);
  const {type}=useParams();

  // const filterProduct=

  // console.log(products)
  // console.log(type)
  return (
    <section className="">
      <Slider />
      <NavigationBtn />
      <div className="container xl:max-w-screen-xl pt-16 p-4">
          <div className="pl-14">
            <h1 className="text-4xl font-sans font-bold tracking-normal leading-none text-gray-600">
              {type}
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 justify-items-center py-8 gap-12">
                {
                    products.map((product)=>{
                      return <ProductCard key={product.id} product={product} type={type} />
                    })
                }
          </div>
      </div>
    </section>
  )
}

export default FilteredProducts