
import FilteredProducts from "../pages/FilteredProducts/FilteredProducts"
import NotFound from "../components/NotFound/NotFound"
import Home from "../pages/Home/Home"
import SingleProduct from "../pages/FilteredProducts/SingleProduct"

const routes=[
    {path:'/' ,element:<Home />},
    {path:'/filteredProducts/:type' ,element:<FilteredProducts />},
    {path:'/filteredProducts/:type/:id' ,element:<SingleProduct />},
    {path:'*' ,element:<NotFound />},
]
export default routes 