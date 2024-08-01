import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography,
  } from "@material-tailwind/react";
import { FiMinus, FiPlus, FiTrash } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../features/slices/CartSlice";
import { MdClose } from "react-icons/md";


const Cart = (Props) => {
    
    const {handleOpen,open}=Props;

    const cart=useSelector(state => state.cart.cart);
    const dispatch=useDispatch();

    const totalPrice=useSelector(state => state.cart.totalPrice);
    const totalAmount=useSelector(state => state.cart.totalAmount);

  return (
    <div>
        <Dialog
            open={open}
            handler={handleOpen}
            animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
            }}
        >
            <DialogHeader className="w-full flex items-center justify-between">
                Shopping Bag
                <button onClick={handleOpen}>
                    <MdClose />
                </button>
            </DialogHeader>
              <hr className="bg-gray-200 w-full h-0.5 text-center" />
            
                
                {
                    cart.length > 0 ? 
                    <>
                       <DialogBody className="max-h-96  overflow-y-auto">
                                {
                                    cart.map((product)=>{
                                        return <div key={product.id} className="grid grid-cols-2 gap-2 border-b border-b-gray-200 pb-2 mb-2">
                                                    <div className="h-52  flex flex-col items-start justify-between ">
                                                        <img src={product.img} alt={product.name} className="h-[125px] rounded-md" />
                                                        <h3 className="text-black  text-base font-sans font-bold  tracking-normal leading-none">
                                                                {
                                                                    product.name
                                                                }
                                                        </h3>
                                                        <p className="max-w-xs line-clamp-3 overflow-hidden text-ellipsis text-black text-xs md:text-justify tracking-normal leading-none">
                                                            {
                                                                    product.text
                                                            }
                                                        </p>    
                                                    </div>
                                                    <div className="ml-1 sm:ml-10 flex flex-col items-start justify-between">
                                                        <p className="text-black text-sm  tracking-normal leading-none">
                                                                Selected Size : {product.size}
                                                        </p>
                                                        <p className="w-full flex items-center gap-x-3 text-black text-sm  tracking-normal leading-none">
                                                                Selected Color :  <div className="w-2 h-2 p-2 rounded-full " style={{backgroundColor:`${product.color}`}}></div>
                                                        </p>
                                                        <p className=" text-black text-sm  tracking-normal leading-none">
                                                                Amount : {product.amount}
                                                        </p>
                                                        <p className="text-black text-sm  tracking-normal leading-none">
                                                                Single Item Price : {product.price} $
                                                        </p>
                                                        <p className="text-black text-sm  tracking-normal leading-none">
                                                                Total Item Prices : {product.totalPrice} $
                                                        </p>
                                                        <div className="flex items-center justify-between gap-x-4 p-1.5 border border-gray-200">
                                                            <button onClick={()=>dispatch(removeFromCart(product))} className="">
                                                                        {
                                                                            product.amount > 1 ? <FiMinus className="w-4 h-4" /> : <FiTrash className="text-red-500 w-4 h-4" />
                                                                        }
                                                            </button>
                                                            <span className="text-sm font-bold">
                                                                            {
                                                                                product.amount
                                                                            }
                                                            </span>
                                                            <button onClick={()=>dispatch(addToCart(product))} className="">
                                                                            <FiPlus className="w-4 h-4" />
                                                            </button>
                                                        </div>
                                                    </div>
                                            </div>
                                    })
                                }
                        </DialogBody>
                        <hr className="bg-gray-200 w-full h-0.5 text-center" />
                        <DialogFooter className="w-full flex flex-col items-start md:flex-row md:items-center md:justify-between">
                            <Typography className="text-left">
                                Total Price Of All Products : {totalPrice} $
                            </Typography>
                            <Typography className="text-left">
                                Total Amount : {totalAmount}
                            </Typography>
                            <Button className="w-full mt-2 md:mt-0 md:w-fit " >
                                order
                            </Button>
                        </DialogFooter>
                    </>
                    :
                    <h3 className="text-lg text-center font-bold space-y-5 py-5">
                        🧺 Your Bag Is Empty
                        <p className="animate-pulse">
                            Add Product To Cart
                        </p>
                    </h3>
                }
        </Dialog>
    </div>
  )
}

export default Cart