
import { sliderData } from "../../assets/data/dummydata";
import { nextSlide,prevSlide } from "../../features/slices/SliderSlice"
import { useDispatch , useSelector } from "react-redux"

const Slider = () => {
sliderData.map(slide=>console.log(slide.img))
 const sliderIndex=useSelector((state)=>state.slider.value);
 const dispatch=useDispatch();
  return (
    <section className="h-[850px]">
       <div className="relative w-full">
          {
              sliderData.map((slide)=>{
                <div className="" key={slide.id}>
                    <div className="">
                        <img src={slide.img} alt={slide.text} className="w-full h-[850px]" />
                    </div>
                    <div className="">
                         <p className="">
                          {
                            slide.text
                          }
                         </p>
                    </div>
                </div>
              })
          } 
          <div className="">
            {
              sliderData.map((slide,index)=>{
                <div className="" key={index}>

                </div>
              })
            }
          </div>
          <button onClick={()=>dispatch(nextSlide(sliderIndex + 1))}
            className=""
          >
                  Next
          </button>
          <button onClick={()=>dispatch(prevSlide(sliderIndex  - 1))}
            className=""
          >
                  Prev
          </button>
       </div>
    </section >
  )
}

export default Slider