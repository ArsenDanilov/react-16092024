import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishesIds } from ".";

export const getDishes = createAsyncThunk("dishes/getDishes",
    async (_, { dispatch, getState, rejectWithValue }) => {
        console.log('cb in get-dishes');

        const response = await fetch("http://localhost:3001/api/dishes");

        const result = await response.json();

        if (!result.length) {
            rejectWithValue("no data");
            return;
        }
        console.log(result);

        return result;
    },
    {
        condition: (_, { getState }) => {
            return selectDishesIds(getState()).length === 0;
        },
    }
);