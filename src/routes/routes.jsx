
import FilteredProducts from "../pages/FilteredProducts/FilteredProducts"
import NotFound from "../components/NotFound/NotFound"
import Home from "../pages/Home/Home"
import SingleProduct from "../pages/FilteredProducts/SingleProduct"
import Login from "../components/Login/Login"

const routes=[
    {path:'/' ,element:<Home />},
    {path:'/login' ,element:<Login />},
    {path:'/filteredProducts/:type' ,element:<FilteredProducts />},
    {path:'/filteredProducts/:type/:id' ,element:<SingleProduct />},
    {path:'*' ,element:<NotFound />},
]
export default routes 