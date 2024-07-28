import { createSlice } from "@reduxjs/toolkit";


export const SliderSlice=createSlice({
    name:"slider",
    initialState:{
        value:0,
        length:4,
    },
    reducers:{
        nextSlide(state,action) {
            console.log("state",state);
            console.log("action",action.payload);
            state.value=action.payload > state.length ? 0 : action.payload;
        },
        prevSlide(state,action) {
            console.log("state",state);
            console.log("action",action.payload);
            state.value=action.payload < 0 ? state.length : action.payload ;
        },
        dotSlide() {},
    }
})

export const {nextSlide,prevSlide,dotSlide} = SliderSlice.actions;

export default SliderSlice.reducer;