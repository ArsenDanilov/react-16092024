import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: {},
        totalPrice: 0,
    },
    reducers: {
        addToCart: (state, { payload }) => {
            const { id, price } = payload; 
            state.items[id] = (state.items[id] || 0) + 1; 
            state.totalPrice += price; 
        },
        removeFromCart: (state, { payload }) => {
            const { id, price } = payload; 
            if (!state.items[id]) {
                return state;
            }

            state.items[id] = state.items[id] - 1;
            state.totalPrice -= price;

            if (state.items[id] <= 0) {
                delete state.items[id]; 
            }
        },
    },
    selectors: {
        selectCartItems: (state) => Object.keys(state.items).reduce((acc, id) => {
            acc.push({ id, amount: state.items[id] });

            return acc;
        }, []),
        selectAmountById: (state, id) => state.items[id] || 0,
        selectTotalPrice: (state) => state.totalPrice, 
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const { selectCartItems, selectAmountById, selectTotalPrice } = cartSlice.selectors; 