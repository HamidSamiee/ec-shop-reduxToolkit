import { Button } from "@material-tailwind/react"
import clothes from "../../assets/images/clothes.webp"
import { useDispatch } from "react-redux"
import { filterProducts } from "../../features/slices/ProductsSlice"
import { Link } from "react-router-dom"
const buttons=[
    "T-Shirts","Hoodies","Shoes","Dresses","Jeans","Jackets","Bags","Suits",
]

const NavigationBtn = () => {
 
const dispatch=useDispatch();

    return (
    <section>
        <div className="flex items-center justify-center py-8 overflow-x-auto">
            {
                buttons.map((item,index)=>{
                    return <Link to={`/filteredProducts/${item}`}  key={index} >
                        <Button
                                onClick={()=>dispatch(filterProducts(item))}
                                size="lg" variant="outlined" ripple={true} className="mr-4 hover:bg-green-300 duration-300 ease-in-out">
                                {
                                    item
                                }
                        </Button>
                    </Link>
                })
            }
        </div>
        <div className="w-[55%] rounded-md bg-green-300 p-2 mx-auto">
                    <h3 className="animate-bounce font-medium text-orange-900 text-center text-4xl">
                        SALES UP TO 50%
                    </h3>
        </div>
        <div className="flex items-center justify-center  py-4">
            <img src={clothes} alt="clothes" className="h-[600px] w-[70%] rounded-md shadow-lg shadow-gray-600" />
        </div>
    </section>
  )
}

export default NavigationBtn
