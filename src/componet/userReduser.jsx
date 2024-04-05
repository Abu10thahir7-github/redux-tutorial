import { userList } from "./data";
import {createSlice} from '@reduxjs/toolkit'

const userSlice=createSlice({
    name:'users',
    initialState:userList,
    reducers:{
        addUser:(state,action)=>{
            console.log(action.payload);
            state.push(action.payload)
        }
    }
    ,
    editUser:(state,action)=>{
        const {id,name,email}=action.payload
        const uu= state.find(user=>user.id ===  id);
        if(uu){
            uu.name=name;
            uu.email=email
        }
    }
    ,
    deleteUser:(state,action)=>{
        const {id}=action.payload;
        const uu= state.find(user=>user.id === id);
            if(uu){
                return state.filter (f=>f.id !==id)
            }
    }
})

export default userSlice.reducer;
export const { addUser,deleteUser,editUser } = userSlice.actions;