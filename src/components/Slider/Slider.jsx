
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { sliderData } from "../../assets/data/dummydata";
import { dotSlide, nextSlide,prevSlide } from "../../features/slices/SliderSlice"
import { useDispatch , useSelector } from "react-redux"
import { useEffect } from "react";

const Slider = () => {

 const sliderIndex=useSelector((state)=>state.slider.value);
 const dispatch=useDispatch();
 
useEffect(() => {
  
  setTimeout(() => {
    dispatch(nextSlide(sliderIndex + 1))
  }, 8000);

}, [dispatch,sliderIndex])


  return (
    <section className="h-[850px] relative mb-4 ">
          <div  className="">
                {
                    sliderData.map((slide)=>{
                      return<div className={` ${parseInt(slide.id) === sliderIndex ? 'opacity-100 duration-700 scale-100 ease-in-out' : 'opacity-0 duration-700 scale-95 ease-in-out'}`} key={slide.id}>
                          <div className="absolute w-full ">
                              {
                                parseInt(slide.id) === sliderIndex &&
                                <img src={slide.img} alt={slide.text} className="w-full h-[850px]" />
                              }
                          </div>
                          <div className="absolute top-44 mx-auto inset-x-1/4">
                              <p className="text-white text-4xl tracking-normal leading-none font-bold font-sans">
                                {
                                  parseInt(slide.id) === sliderIndex && 
                                  slide.text
                                }
                              </p>
                          </div>
                      </div>
                    })
                }
          </div>
           {/* dot slider  */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center justify-center gap-x-3">
            {
              sliderData.map((dot,index)=>{
                return<div onClick={()=>dispatch(dotSlide(index))} className='' key={dot.id}>
                       <div className={ `cursor-pointer ${sliderIndex === index ? ' p-2 rounded-full bg-green-400' : ' p-2 rounded-full bg-white'} `}></div>
                </div>
              })
            }
          </div>
          {/* next and prev button */}
          <div className="">
                <button onClick={()=>dispatch(nextSlide(sliderIndex + 1))}
                  className="absolute top-1/2 -translate-y-1/2 right-4 bg-white rounded-full p-2 flex items-center justify-center hover:bg-green-100"
                >
                        <MdArrowForwardIos className="w-3 h-3" />
                </button>
                <button onClick={()=>dispatch(prevSlide(sliderIndex - 1))}
                  className="absolute top-1/2 -translate-y-1/2 left-4 bg-white rounded-full p-2 flex items-center justify-center hover:bg-green-100"
                >
                        <MdArrowBackIos className='pl-1' />
                </button>
          </div>
    </section >
  )
}

export default Slider