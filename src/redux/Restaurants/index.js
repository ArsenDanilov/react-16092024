import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./get-restaurants";

const entityAdapter = createEntityAdapter();

// const PENDING = 'pending';
// const FULFILLED = 'fulfilled';
// const REJECTED = 'rejected';

export const restaurantsSlice = createSlice({
    name: "restaurants",
    initialState: entityAdapter.getInitialState(),
    selectors: { // селектор - функция, которая выбирает небольшой кусочек этих данных
        selectRestaurantsIds: (state) => state.ids,
        selectRestaurantById: (state, id) => state.entities[id],
        selectRestaurantsRequestStatus: (state) => state.requestStatus,
    },
    extraReducers: (builder) => builder
        .addCase(getRestaurants.fulfilled, (state, { payload }) => {
            entityAdapter.setAll(state, payload);
        }),
});

export const { selectRestaurantsIds, selectRestaurantById, selectRestaurantsRequestStatus } = restaurantsSlice.selectors;