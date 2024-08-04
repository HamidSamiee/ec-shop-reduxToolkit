import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    Button,
  } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/slices/CartSlice";

const ProductSectionItem = (Props) => {

  const {product}=Props;
  const {img,name,text, size, colors}=product;

  const dispatch=useDispatch();

  return (
    <Card shadow  className="w-96 relative">
        <Typography variant="h4" className="font-medium absolute top-9 right-3 -rotate-45 text-red-500 z-10 animate-pulse">
            SALE %
        </Typography>
        <CardHeader floated={false} className=" h-80">
            <img src={img} alt={name} className="object-contain object-center" />
        </CardHeader>
        <CardBody className=" text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
                {name}
            </Typography>
            <Typography color="gray" className="font-medium" textGradient>
                {text}
            </Typography>
            <div className="w-full pt-4 flex items-center justify-between">
            <Typography color="red" className="font-medium" textGradient>
                Size Left :<span className="text-gray-400 text-base font-extralight ml-2">{size && size[0]}</span>
            </Typography>
            <Typography  color="gray" className="font-medium flex items-center gap-x-2 " textGradient>
                color : 
                <div 
                 className="w-2 h-2 p-2  rounded-full"
                 style={{backgroundColor:colors[0]}}   
                >
                </div>
            </Typography>
            </div>
        </CardBody>
        <CardFooter className=" flex justify-center gap-7 pt-2">
            <Tooltip content="Add To Cart" placement='bottom'>
               <Button onClick={()=>dispatch(addToCart(product))} variant="outlined" >
                   Add To Cart
               </Button>
            </Tooltip>
        </CardFooter>
    </Card>
  )
}

export default ProductSectionItem