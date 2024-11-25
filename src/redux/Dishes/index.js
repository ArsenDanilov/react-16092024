import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishes } from "./get-dishes";

const entityAdapter = createEntityAdapter();

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';


export const dishesSlice = createSlice({
    name: "dishes",
    initialState: entityAdapter.getInitialState({ requestStatus: "idle" }),
    selectors: {
        selectDishesIds: (state) => state.ids,
        selectDishes: (state) => state.entities,
        selectDishById: (state, id) => state.entities[id],
        selectDishesRequestStatus: (state) => state.requestStatus,
    },
    extraReducers: (builder) => builder
        .addCase(getDishes.pending, (state) => {
            state.requestStatus = PENDING;
        })
        .addCase(getDishes.fulfilled, (state, { payload }) => {
            entityAdapter.setAll(state, payload);
            state.requestStatus = FULFILLED;
        })
        .addCase(getDishes.rejected, (state) => {
            state.requestStatus = REJECTED;
        })
});

export const { selectDishesIds, selectDishes, selectDishById, selectDishesRequestStatus } = dishesSlice.selectors;
