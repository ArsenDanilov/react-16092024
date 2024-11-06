import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../materials/normalized-mock";

const initialState = {
    entities: normalizedRestaurants.reduce((acc, item) => {
        acc[item.id] = item;

        return acc;
    }, {}), // создаем объект, в котором ключами будут айдишники, а значениями - сущности 
    ids: normalizedRestaurants.map(({ id }) => id), // создаем массив айдишников сущностей 
}

export const restaurantsSlice = createSlice({
    name: "restaurants",
    initialState,
    selectors: { // селектор - функция, которая выбирает небольшой кусочек этих данных
        selectRestaurantsIds: (state) => state.ids,
        selectRestaurantById: (state, id) => state.entities[id],
    },
});

export const { selectRestaurantsIds,  selectRestaurantById} = restaurantsSlice.selectors;