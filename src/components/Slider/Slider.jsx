
import { nextSlide,prevSlide } from "../../features/slices/SliderSlice"
import { useDispatch , useSelector } from "react-redux"

const Slider = () => {

 const sliderState=useSelector((state)=>state.slider.value);
 const dispatch=useDispatch();
  return (
    <section className="">
       <button onClick={()=>dispatch(nextSlide(sliderState + 1))}
       className=""
       >
              Next
       </button>
       <button onClick={()=>dispatch(prevSlide(sliderState  - 1))}
        className="">
              Prev
       </button>
    </section >
  )
}

export default Slider