import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../materials/normalized-mock";

const initialState = {
    entities: normalizedDishes.reduce((acc, item) => {
        acc[item.id] = item;

        return acc;
    }, {}), // создаем объект, в котором ключами будут айдишники, а значениями - сущности 
    ids: normalizedDishes.map(({ id }) => id), // создаем массив айдишников сущностей 
}

export const dishesSlice = createSlice({
    name: "dishes",
    initialState,
    selectors: { // селектор - функция, которая выбирает небольшой кусочек этих данных
        selectDishesIds: (state) => state.ids,
        selectDishes: (state) => state.entities,
        selectDishById: (state, id) => state.entities[id],
    },
});

export const { selectDishesIds, selectDishes, selectDishById} = dishesSlice.selectors;
