import { Button, Tooltip } from "@material-tailwind/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../../features/slices/CartSlice";


const SingleProduct = () => {

    // const {id}=useParams();
    const stateOneProduct=useSelector(state=>state.products.singleProduct);
    // console.log(id,stateOneProduct)
    const defaultSize=stateOneProduct[0].size ? stateOneProduct[0].size[0] : "";
    const defaultColor= stateOneProduct[0].colors[0];
   
    const [size, setSize] = useState(defaultSize)
    const [color, setColor] = useState(defaultColor)

    
    const dispatch=useDispatch()

  return (
    <section className="container xl:max-w-screen-xl p-4 ">
        {
            stateOneProduct.map(product=>{
                return <div className=" flex flex-col md:flex-row items-center justify-between gap-10 py-10" key={product.id}>
                    <div className=" grow-[2]">
                        <img src={product.img} alt={product.name} className="w-full h-[850px] rounded-lg flex-1" />
                    </div>
                    <div className=" grow-[3]">
                        <div className="max-w-lg">
                                <h5 className="text-2xl font-sans font-bold tracking-normal leading-none pb-4">
                                    {
                                        product.name
                                    }
                                </h5>
                                <p className="text-orange-700 text-xl font-sans font-bold tracking-normal leading-none pb-4">
                                    15 % OFF
                                </p>
                                <p className="text-gray-600 text-xl font-sans font-bold tracking-normal leading-none pb-4">
                                    {product.text}
                                </p>
                                <div className="flex flex-col gap-y-2 pb-4">
                                    <label htmlFor="size" className="block mb2 text-sm font-medium text-gray-900">
                                        select your size
                                    </label>
                                    <select name="size" id="size"
                                      value={size}
                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                      onChange={(e)=>setSize(e.target.value)}
                                      disabled={product?.size ? false : true}
                                    >
                                        {   product?.size &&
                                            product?.size.map((s,index)=>{
                                                return<option key={index} value={s}>
                                                            {
                                                                s
                                                            }
                                                </option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="flex flex-col gap-y-2 pb-6">
                                    <label htmlFor="color" className="block mb2 text-sm font-medium text-gray-900">
                                        select your color
                                    </label>
                                    <select name="color" id="color"
                                      value={color}
                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                      onChange={(e)=>setColor(e.target.value)}
                                    >
                                        {
                                            product?.colors.map((c,index)=>{
                                                return<option key={index} value={c}>
                                                            {
                                                                c
                                                            }
                                                </option>
                                            })
                                        }
                                    </select>
                                </div>

                        </div>
                        <Tooltip  content="Add to cart" placement="bottom">
                           <Button
                            color="gray"
                            size="lg"
                            variant="outlined"
                            ripple 
                            fullWidth
                            onClick={()=>dispatch(addToCart({
                                id: product.id,
                                name: product.name,
                                size: size ,
                                color: color,
                                img: product.img,
                                text: product.text,
                                price: product.price,
                                amount: 1,
                                totalPrice: product.price
                            }))}
                           >
                            Add to cart
                           </Button>
                        </Tooltip>                    
                    </div>
                    
                </div>
            })
        }
    </section>
  )
}

export default SingleProduct