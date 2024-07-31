import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummydata";


export const ProductsSlice=createSlice({
    name:"products",
    initialState:{
        filteredProducts:JSON.parse(sessionStorage.getItem('filteredProducts')) || storeData,
        singleProduct:JSON.parse(sessionStorage.getItem('oneProduct')) || storeData,
    },
    reducers:{
        filterProducts(state,action){
            try {
                const filter=storeData.filter(p=>p.type === action.payload)
                state.filteredProducts=filter;

                // console.log(filter)
                const saveState=JSON.stringify(filter);
                sessionStorage.setItem('filteredProducts',saveState)
            } catch (error) {
                return error
            }
        },
        singleProduct(state,action){
            try {
                const product=storeData.filter(p=>p.id === action.payload);
                state.singleProduct=product;

                const savestate=JSON.stringify(product);
                sessionStorage.setItem('oneProduct',savestate)
            } catch (error) {
                return error
            }
        },
    }
})

export const {filterProducts,singleProduct}=ProductsSlice.actions;

export default ProductsSlice.reducer