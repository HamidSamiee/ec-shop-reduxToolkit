import { createSlice } from "@reduxjs/toolkit";


export const CartSlice=createSlice({
    name:'cart',
    initialState:{
        totalPrice:0,
        totalAmount:0,
        cart:[],
    },
    reducers:{
        addToCart(state,action){
            const product=action.payload;
            try {
                const exist = state.cart.find(p=>p.id === product.id && p.size === product.size && p.color === product.color );
                if(exist){
                    state.totalPrice += exist.price ;
                    state.totalAmount++ ;
                    exist.amount++;
                    exist.totalPrice += exist.price
                }else{
                    state.cart.push({
                        id: product.id,
                        name: product.name,
                        size: product.size ,
                        img: product.img,
                        text: product.text,
                        color: product.color,
                        price: product.price,
                        amount: 1,
                        totalPrice: product.price,
                    })
                    state.totalAmount++;
                    state.totalPrice += product.price;
                    
                }
            } catch (error) {
                return error
            }
        },
        removeFromCart(state,action){
            const product=action.payload;
            try {
                const exist = state.cart.find(p=>p.id === product.id && p.size === product.size && p.color === product.color );
                if( exist.amount > 1){
                    state.totalPrice -= exist.price ;
                    state.totalAmount-- ;
                    exist.amount--;
                    exist.totalPrice -= exist.price;
                }else{
                    state.totalPrice -= exist.price ;
                    state.totalAmount-- ;
                    state.cart = state.cart.filter(p=>p.id !== product.id);
                }
            } catch (error) {
                return error
            }
        },
    }    
})

export const {addToCart,removeFromCart}=CartSlice.actions;

export default CartSlice.reducer