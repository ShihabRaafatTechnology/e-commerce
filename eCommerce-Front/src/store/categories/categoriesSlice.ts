import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./act/actGeCategories";
import { TCategory } from "@customTypes/category";
import { TLoading } from "@customTypes/shared";


export interface ICategoriesState {
    records: TCategory[],
    loading: TLoading,
    error: string | null,
}

const initialState: ICategoriesState = {
    records: [],
    loading: "idle",
    error: null,
};

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        categoriesCleanUp: (state) =>{
            state.records = [];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(actGetCategories.pending, (state)=>{
            state.loading = "pending";
            state.error = null;
        });
        builder.addCase(actGetCategories.fulfilled, (state, action)=>{
            state.loading = "succeeded";
            state.records = action.payload;
        });
        builder.addCase(actGetCategories.rejected, (state, action)=>{
            state.loading ="failed";
            if(action.payload && typeof action.payload === "string") {
                state.error = action.payload;
            }
        });
    }
});

/*export {actGetCategories};*/
export const {categoriesCleanUp} = categoriesSlice.actions;
export default categoriesSlice.reducer;
