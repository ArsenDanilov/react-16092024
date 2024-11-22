import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviews } from "./get-reviews";

const entityAdapter = createEntityAdapter();

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

export const reviewsSlice = createSlice({
    name: "reviews",
    initialState: entityAdapter.getInitialState({ requestStatus: "idle" }),
    selectors: {
        selectReviewsIds: (state) => state.ids,
        selectReviews: (state) => state.entities,
        selectReviewById: (state, id) => state.entities[id],
        selectReviewsRequestStatus: (state) => state.requestStatus,
    },
    extraReducers: (builder) => builder
        .addCase(getReviews.pending, (state) => {
            state.requestStatus = PENDING;
        })
        .addCase(getReviews.fulfilled, (state, { payload }) => {
            entityAdapter.setAll(state, payload);
            state.requestStatus = FULFILLED;
        })
        .addCase(getReviews.rejected, (state) => {
            state.requestStatus = REJECTED;
        }),
});

export const { selectReviewsIds, selectReviews, selectReviewById, selectReviewsRequestStatus } = reviewsSlice.selectors;