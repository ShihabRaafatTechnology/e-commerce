import { TCategory } from "@customTypes/category";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosError } from "@utils";

type TResponse = TCategory[];

const actGetCategories = createAsyncThunk("categories/actGetCategories", async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    // Optional: Using AbortController to handle request cancellation
    const controller = new AbortController();
    const { signal } = controller;

    try {
        const response = await axios.get<TResponse>("/categories", {
            signal,
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(axiosError(error))
    }
})

export default actGetCategories;