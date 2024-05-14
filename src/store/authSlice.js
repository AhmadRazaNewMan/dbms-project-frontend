import {createSlice} from "@reduxjs/toolkit"


const intialState={
    user:[{
        id:1,
        name:"Ali",
        email:"123@gmail.com"
    }],
    
    isLoggin:false
}

const authSlice=createSlice({
    name:"auth",
    initialState:intialState,
    reducers:{
        login(state,action){
            state.isLoggin=true
            state.user=action.payload.user
            
        },

        logout(state,action){
            state.isLoggin=false
            state.user=[]
           
        }
    }})


export const {login,logout}=authSlice.actions
export default authSlice.reducer    