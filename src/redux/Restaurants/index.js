import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./get-restaurants";

// const initialState = {
//     entities: normalizedRestaurants.reduce((acc, item) => {
//         acc[item.id] = item;

//         return acc;
//     }, {}), // создаем объект, в котором ключами будут айдишники, а значениями - сущности 
//     ids: normalizedRestaurants.map(({ id }) => id), // создаем массив айдишников сущностей 
// }


// const initialState = {
//     entities: {},
//     ids: [],
//     requestStatus: "idle"
// }

const entityAdapter = createEntityAdapter();

export const restaurantsSlice = createSlice({
    name: "restaurants",
    initialState: entityAdapter.getInitialState({ requestStatus: "idle" }),
    selectors: { // селектор - функция, которая выбирает небольшой кусочек этих данных
        selectRestaurantsIds: (state) => state.ids,
        selectRestaurantById: (state, id) => state.entities[id],
        selectRestaurantsRequestStatus: (state) => state.requestStatus,
    },
    extraReducers: (builder) => builder
        .addCase(getRestaurants.pending, (state) => {
            state.requestStatus = "pending";
        })
        .addCase(getRestaurants.fulfilled, (state, { payload }) => {
            // state.entities = payload.reduce((acc, item) => {
            //     acc[item.id] = item;

            //     return acc;
            // }, {}),
            //     state.ids = payload.map(({ id }) => id),
                entityAdapter.setAll(state, payload);
                state.requestStatus = "fulfilled";
        })
        .addCase(getRestaurants.rejected, (state) => {
            state.requestStatus = "rejected";
        }),
});

export const { selectRestaurantsIds, selectRestaurantById, selectRestaurantsRequestStatus } = restaurantsSlice.selectors;