import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import ProductCard from "./ProductCard";
import Slider from "../../components/Slider/Slider";
import NavigationBtn from "../../components/NavigationBtn/NavigationBtn";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { filterByColor, filterBySize, filterGender, filterProducts, sortByPrice } from "../../features/slices/ProductsSlice";
import Error from "../../components/Error/Error";


const gendersButtons=['male','female'];
const colorsButtons=["black", "red", "brown", "gray", "yellow", "orange", "blue", "green","purple"];
const sizesButtons=["S", "M", "L","XL"]

const FilteredProducts = () => {
 
  const products=useSelector(state=>state.products.filteredProducts);
  const error=useSelector(state=>state.products.error);
  const {type}=useParams();

  const dispatch=useDispatch();
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
          <div className="flex items-center justify-between py-8">
            <div className="flex items-center pl-4 ">
              {
                gendersButtons.map((item,index)=>{
                  return <div className="" key={index}>
                        <Button
                          onClick={()=>dispatch(filterGender(item))}
                          variant="outlined"
                          color="gray"
                          size="lg"
                          ripple
                          className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                        >
                        {item} 
                        </Button> 
                  </div>
                })
              }
              <Button
                onClick={()=>dispatch(sortByPrice())}
                variant="outlined"
                color="gray"
                size="lg"
                ripple
                className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
              >
                High Price
              </Button>
              <Menu placement="bottom">
                <MenuHandler>
                  <Button
                  
                   variant="outlined"
                   color="gray"
                   size="lg"
                   ripple
                   className="text-black  hover:bg-gray-300 duration-300 ease-in-out mr-4"
                  >
                   Select a color
                  </Button>
                </MenuHandler>
                <MenuList>
                  {
                    colorsButtons.map((item,index)=>{
                      return <MenuItem 
                                style={{color:item}} 
                                className="font-outline-2"
                                key={index}
                                onClick={()=>dispatch(filterByColor(item))}
                              >
                                    {item}
                              </MenuItem>
                    })
                  }
                </MenuList>
              </Menu>
              <Menu placement="bottom">
                <MenuHandler>
                  <Button
                   variant="outlined"
                   color="gray"
                   size="lg"
                   ripple
                   className="text-black  hover:bg-gray-300 duration-300 ease-in-out mr-4"
                  >
                   Select a size
                  </Button>
                </MenuHandler>
                <MenuList>
                  {
                    sizesButtons.map((item,index)=>{
                      return <MenuItem  key={index} onClick={()=>dispatch(filterBySize(item))}  >{item}</MenuItem>
                    })
                  }
                </MenuList>
              </Menu>
            </div>
            <div className="pr-4">
                 <Button
                   variant="outlined"
                   color="gray"
                   size="lg"
                   ripple
                   className="text-black  hover:bg-gray-300 duration-300 ease-in-out mr-4"
                   onClick={()=>dispatch(filterProducts(type))}
                 >
                   clear filter
                 </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 justify-items-center py-8 gap-12">
                {
                    products.map((product)=>{
                      return <ProductCard key={product.id} product={product} type={type} />
                    })
                }
          </div>
          {
            error && <Error  />
          }
      </div>
    </section>
  )
}

export default FilteredProducts