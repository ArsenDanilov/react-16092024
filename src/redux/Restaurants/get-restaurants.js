import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantsIds } from ".";

export const getRestaurants = createAsyncThunk("restaurants/getRestaurants",
    async (_, { dispatch, getState, rejectWithValue }) => {

        console.log('cb in get-restor');

        const response = await fetch("http://localhost:3001/api/restaurants");

        const result = await response.json();

        if (!result.length) {
            rejectWithValue("no data");
            return;
        }

        return result;
    },
    {
        condition: (_, { getState }) => { // condition - аргумент, который позволяет задать условие выполнение thunk'a. Из этого кондишна мы должны вернуть true или false. При true - thunk будет выполнен, при false - нет. В данном случае, загрузка данных с сервера не произойдет, если эти данные уже выгружены
            return selectRestaurantsIds(getState()).length === 0;
        },
    }
);