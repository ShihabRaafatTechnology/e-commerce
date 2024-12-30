import { TProduct } from "@customTypes/product";
import { createAsyncThunk } from "@reduxjs/toolkit"
import { RootState } from "@store/index";
import axios from "axios";
type TResponse = TProduct[];

const actGetProductsByItems = createAsyncThunk("cart/actGetProductsByItems", async (_, thunkAPI) => {
    const {rejectWithValue, fulfillWithValue, getState} = thunkAPI;
    const {cart} = getState() as RootState;
    const itemsID = Object.keys(cart.items);
    const concatenatedIDs = itemsID.map((item) => `id=${item}`).join("&");

    if(!itemsID.length){
        return fulfillWithValue([]);
    }
    try {
        const reponse = await axios.get<TResponse>(`/products?${concatenatedIDs}`);
        return reponse.data;
    } catch (error) {
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data.message || error.message)
        }else{
            return rejectWithValue("An unexpected error")
        }
    }
})

export default actGetProductsByItems