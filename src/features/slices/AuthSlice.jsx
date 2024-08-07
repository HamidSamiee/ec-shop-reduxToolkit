
import { createSlice } from "@reduxjs/toolkit";


export const AuthSlice=createSlice({
    name:'auth',
    initialState:{
        user:{
            username:'',
            password:'',
            authUser:false,
        }
    },
    reducers:{
        login(state,action){
           const userId=action.payload;
           const userValidation = /^[A-Za-z]{4,10}$/i.test(userId.name);
           const passwordValidation =
             /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,10}$/i.test(
               userId.password
             ); 

           state.user=userId;

           if (!userValidation || !passwordValidation) {
            state.user.authUser=false;
           } else {
            state.user.authUser=true;
            const saveState=JSON.stringify(userId);
            sessionStorage.setItem('authUser',saveState)
           }
        },
        logout(state){
           state.user={
            username:'',
            password:'',
            authUser:false,
        }
        sessionStorage.removeItem('authUser');
        },
    }    
})

export const {login,logout}=AuthSlice.actions;

export default AuthSlice.reducer