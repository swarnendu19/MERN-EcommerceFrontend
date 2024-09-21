import { CartReducerInitialState } from "@/types/reducerTypes";
import { CartItemType } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState : CartReducerInitialState = {
    loading: false,
    cartItems: [],
    subtotal: 0,
    tax: 0,
    shippingCharges: 0,
    discount: 0,
    total: 0,
    shippingInfo:{
        address: "",
        city: "",
        state: "",
        country: "",
        pinCode: "",
    }
}

export const cartReducer = createSlice({
    name: "cartReducer",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItemType>)=>{
             state.loading = true;
             const index = state.cartItems.findIndex(
                (i: any) => i.productId === action.payload.productId
             )
             if(index !== -1 ) state.cartItems[index] === action.payload
             else state.cartItems.push(action.payload);
             state.loading = false;
        },
    }
})