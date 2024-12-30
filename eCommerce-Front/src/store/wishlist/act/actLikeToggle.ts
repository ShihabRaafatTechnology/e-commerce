import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actLikeToggle = createAsyncThunk("wishlist/actLikeToggle", async (id:number, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    console.log("ActLikeToggle: " + id);
    
    try {
        const isLike = await axios.get(`/wishlist?userId=1&productId=${id}`);
        if (isLike.data.length > 0) {
            await axios.delete(`/wishlist/${isLike.data[0].id}`);
            return { type: "remove", id };
        } else {
            await axios.post("/wishlist", { userId: "1", productId: id });
            return { type: "add", id };
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(
                error.response?.data?.message || error.message || "An error occurred"
            );
        }
        return rejectWithValue("An unexpected error occurred"); // Fallback for non-Axios errors
    }
});
export default actLikeToggle;