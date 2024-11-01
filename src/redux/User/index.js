import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../materials/normalized-mock";

const initialState = {
    entities: normalizedUsers.reduce((acc, item) => {
        acc[item.id] = item;

        return acc;
    }, {}), // создаем объект, в котором ключами будут айдишники, а значениями - сущности 
    ids: normalizedUsers.map(({ id }) => id), // создаем массив айдишников сущностей 
}

export const usersSlice = createSlice({
    name: "users",
    initialState,
    selectors: { // селектор - функция, которая выбирает небольшой кусочек этих данных
        selectUsersIds: (state) => state.ids,
        selectUsers: (state) => state.ids.map((id) => state.entities[id]),
        selectUsersById: (state, id) => state.entities[id],
    },
});

export const { selectUsersIds, selectUsers, selectUsersById} = usersSlice.selectors;