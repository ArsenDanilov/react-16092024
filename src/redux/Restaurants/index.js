import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./get-restaurants";

const entityAdapter = createEntityAdapter();

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

export const restaurantsSlice = createSlice({
    name: "restaurants",
    initialState: entityAdapter.getInitialState({ requestStatus: "idle" }),
    selectors: { // селектор - функция, которая выбирает небольшой кусочек этих данных
        selectRestaurantsIds: (state) => state.ids,
        selectRestaurantById: (state, id) => {
            console.log(state);
            return state.entities[id]
        },
        selectRestaurantsRequestStatus: (state) => state.requestStatus,
    },
    extraReducers: (builder) => builder
        .addCase(getRestaurants.pending, (state) => {
            state.requestStatus = PENDING;
        })
        .addCase(getRestaurants.fulfilled, (state, { payload }) => {
            // state.entities = payload.reduce((acc, item) => {
            //     acc[item.id] = item;

            //     return acc;
            // }, {}),
            //     state.ids = payload.map(({ id }) => id),
                entityAdapter.setAll(state, payload);
                state.requestStatus = FULFILLED;
        })
        .addCase(getRestaurants.rejected, (state) => {
            state.requestStatus = REJECTED;
        }),
});

export const { selectRestaurantsIds, selectRestaurantById, selectRestaurantsRequestStatus } = restaurantsSlice.selectors;