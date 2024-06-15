import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status=true;
            state.userData = action.payload.userData;
        },
        logout: (state)=>{
            state.status = false;
            state.userData = null;
        }
    }
});

export const {login,logout} = authSlice.actions;

export default authSlice.reducer;
// ye slice wala kaam jo hm krrhe h ye hmara kaam user ki authentication dekhne k lie h
// ye state m humare ye hota h ki hme kya data h initial state m or hm kb upload krrhe h to uploaded data or updated data bhi aa jata h usme and action m payload aata h bs