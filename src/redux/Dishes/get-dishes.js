import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishById, selectDishesIds } from ".";
import { selectRestaurantById } from "../Restaurants";

// export const getDishes = createAsyncThunk("dishes/getDishes",
//     async (restaurantId, { dispatch, getState, rejectWithValue }) => {

//         const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`);

//         const result = await response.json();

//         if (!result.length) {
//             return rejectWithValue("no data");
//         }

//         return result;
//     },
//     {
//         condition: (restaurantId, { getState }) => {
//             const restaurant = selectRestaurantById(getState(), restaurantId);

//             const { menu } = restaurant;

//             menu.forEach(menuId => {
//                 console.log(menuId);
//                 if (!selectDishById(getState(), menuId)) {
//                     return true;
//                 } else {
//                     return false;
//                 }
//             });

//         },
//     }
// );


export const getDishes = createAsyncThunk("dishes/getDishes",
    async (_, { dispatch, getState, rejectWithValue }) => {

        const response = await fetch("http://localhost:3001/api/dishes");

        const result = await response.json();

        if (!result.length) {
            rejectWithValue("no data");
            return;
        }

        return result;
    },
    {
        condition: (_, { getState }) => {
            return selectDishesIds(getState()).length === 0;
        },
    }
);