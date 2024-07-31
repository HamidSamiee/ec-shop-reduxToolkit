import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography, 
  } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { singleProduct } from "../../features/slices/ProductsSlice";

const ProductCard = (Props) => {

    const {product,type}=Props
    const {id,text,price,name,colors,img}=product;
    const dispatch=useDispatch();

  return (
    <Link to={`/filteredProducts/${type}/${id}`}>
        <Card className=" w-96 mb-3 bg-blue-gray-50" onClick={()=>dispatch(singleProduct(id))}>
            <CardHeader color="blue" className="relative h-96">
                <img
                src={img}
                alt="card-image"
                className="h-full w-full"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                {name}
                </Typography>
                <Typography>
                {text}
                </Typography>
            </CardBody>
            <CardFooter className="flex items-center justify-between py-3">
                <Typography variant="small">$ {price}</Typography>
                <Typography variant="small" color="gray" className="flex gap-1">
                    {
                        colors.map((color,index)=>{
                            return <i
                                className="fas fa-map-marker-alt fa-sm mt-[3px] p-2 rounded-full mr-3"
                                key={index}
                                style={{backgroundColor:color}}
                            ></i>
                        })
                    }
                </Typography> 
            </CardFooter>
        </Card>
    </Link>
  )
}

export default ProductCard