import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./get-users";

const entityAdapter = createEntityAdapter();

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

export const usersSlice = createSlice({
    name: "users",
    initialState: entityAdapter.getInitialState({ requestStatus: "idle" }),
    selectors: { 
        selectUsersIds: (state) => state.ids,
        selectUsers: (state) => state.ids.map((id) => state.entities[id]),
        selectUserById: (state, id) => state.entities[id],
        selectUsersRequestStatus: (state) => state.requestStatus,
    },
    extraReducers: (builder) => builder
        .addCase(getUsers.pending, (state) => {
            state.requestStatus = PENDING;
        })
        .addCase(getUsers.fulfilled, (state, { payload }) => {
            entityAdapter.setAll(state, payload);
            state.requestStatus = FULFILLED;
        })
        .addCase(getUsers.rejected, (state) => {
            state.requestStatus = REJECTED;
        })
});

export const { selectUsersIds, selectUsers, selectUserById, selectUsersRequestStatus } = usersSlice.selectors;