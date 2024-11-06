import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../../materials/normalized-mock";

const initialState = {
    entities: normalizedReviews.reduce((acc, item) => {
        acc[item.id] = item;

        return acc;
    }, {}), // создаем объект, в котором ключами будут айдишники, а значениями - сущности 
    ids: normalizedReviews.map(({ id }) => id), // создаем массив айдишников сущностей 
}

export const reviewsSlice = createSlice({
    name: "reviews",
    initialState,
    selectors: { // селектор - функция, которая выбирает небольшой кусочек этих данных
        selectReviewsIds: (state) => state.ids,
        selectReviews: (state) => state.entities,
        selectReviewById: (state, id) => state.entities[id],
    },
});

export const { selectReviewsIds, selectReviews, selectReviewById} = reviewsSlice.selectors;