import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../materials/normalized-mock";

const initialState = {
    entities: normalizedUsers.reduce((acc, item) => {
        acc[item.id] = item;

        return acc;
    }, {}), 
    ids: normalizedUsers.map(({ id }) => id), 
}

export const usersSlice = createSlice({
    name: "users",
    initialState,
    selectors: { 
        selectUsersIds: (state) => state.ids,
        selectUsers: (state) => state.ids.map((id) => state.entities[id]),
        selectUserById: (state, id) => state.entities[id],
    },
});

export const { selectUsersIds, selectUsers, selectUserById} = usersSlice.selectors;