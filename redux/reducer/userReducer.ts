import { UserReducerInitialState } from "@/types/reducer-types";
import { User } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState : UserReducerInitialState = {
    user: null,
    loading: true,
}

export const userReducer = createSlice({
    name: "userReducer",
    initialState,
    reducers:{
        userExist: (state, action : PayloadAction<User>)=>{
            state.loading = false;
            state.user = action.payload;
        },
        userNotExist: (state) =>{
            state.loading =false;
            state.user = null;
        }
    }
})