import { CiHeart } from "react-icons/ci"
import { Link } from "react-router-dom"
import logo from '../../assets/logo.png'
import { useState } from "react";
import Cart from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip } from "@material-tailwind/react";
import { FaUserAlt } from "react-icons/fa";
import { logout } from "../../features/slices/AuthSlice";
import { GiExitDoor } from "react-icons/gi";

const Header = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const cart=useSelector(state => state.cart.cart);
    const{authUser}=useSelector(state => state.user.user)
    const user=useSelector(state => state.user.user)
    const dispatch=useDispatch()
    console.log(user.username
    )

  return (
    <header className="">
        <div className="">
                <div className="w-full flex flex-col ">
                    <div className="flex justify-center items-center p-2 bg-black ">
                        <h3 className=" font-bold text-center text-2xl text-white tracking-normal leading-none">Wellcome All</h3>
                    </div>
                    <div className="container xl:max-w-screen-xl flex items-center justify-between">
                        <div className="">
                            <img src={logo} alt="store" className="h-20 w-full" />
                        </div>
                        <nav className="flex items-center gap-x-5">
                                {
                                            authUser ? 
                                            <Tooltip  content="Logout" placement="bottom" >
                                                <button className=""  onClick={()=>dispatch(logout(user))}>
                                                    <GiExitDoor className="text-red-500 w-6 h-6 scale-x-[-1]" />
                                                </button>
                                            </Tooltip>
                                            : 
                                            <Link to='/login' className="text-black font-sans tracking-normal leading-none text-base font-medium text-center mr-4">
                                                    LogIn
                                            </Link>
                                 }
                                <div className="flex items-center gap-x-2">
                                    <CiHeart className="w-6 h-6"/>   <p className="text-black font-sans tracking-normal leading-none text-base font-medium text-center">Whish List</p>
                                </div>
                                {
                                    cart.length > 0 ?
                                    <button onClick={cart.length > 0 && handleOpen  } className="relative flex items-center gap-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                        </svg>
                                        {
                                            cart.length > 0  &&
                                            <div className="absolute top-0 -left-2.5 border border-red-500 w-1 h-1 p-2 bg-gray-200  rounded-full flex items-center justify-center">
                                                <span className="  text-[10px] text-red-500 font-bold">
                                                {
                                                    cart.length
                                                }
                                            </span>
                                            </div>
                                        }
                                    </button >
                                    :
                                    <Tooltip  content="your bag is empty" placement="bottom">
                                        <button  className="relative flex items-center gap-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                            </svg>
                                        </button >
                                    </Tooltip>    
                                }
                                
                                {
                                    authUser &&
                                    <div className="flex items-center gap-x-2">
                                        Hi {user.username} 
                                        <FaUserAlt className="w-5 h-5" />
                                    </div>
                                }
                                
                        </nav>
                    </div>
                    <div className=" bg-black w-full p-4 ">
                        <div className="container xl:max-w-screen-xl flex items-center justify-around">
                            <div className="text-white font-sans tracking-normal leading-none text-base font-medium text-center">
                                50% OFF
                            </div>
                            <div className="text-white font-sans tracking-normal leading-none text-base font-medium text-center">
                                Free Shopping and returns
                            </div>
                            <div className="text-white font-sans tracking-normal leading-none text-base font-medium text-center">
                                Different payment methods
                            </div>
                        </div>
                        
                    </div>
                    {/* cart Modal */}
                    {
                      open && <Cart handleOpen={handleOpen} open={open} />
                     }
                </div>
        </div>
    </header>
  )
}

export default Header