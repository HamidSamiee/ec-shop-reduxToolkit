import { createSlice } from "@reduxjs/toolkit";
import { sliderData } from "../../assets/data/dummydata";


export const SliderSlice=createSlice({
    name:"slider",
    initialState:{
        value:0,
        length:sliderData.length,
    },
    reducers:{
        nextSlide(state,action) {
            console.log("state",state);
            console.log("action",action.payload);
            state.value=action.payload >= state.length ? 0 : action.payload;
        },
        prevSlide(state,action) {
            console.log("state",state);
            console.log("action",action.payload);
            state.value= action.payload < 0  ? state.length - 1 : action.payload ;
        },
        dotSlide(state,action) {
            const slide=action.payload;
            state.value = slide;     
        },
    }
})

export const {nextSlide,prevSlide,dotSlide} = SliderSlice.actions;

export default SliderSlice.reducer;