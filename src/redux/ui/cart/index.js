import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {},
    reducers: {
        addToCart: (state, { payload }) => {
            state[payload] = (state[payload] || 0) + 1;
        },
        removeFromCart: (state, { payload }) => {
            if(!state[payload]) {
                return state;
            }

            state[payload] = state[payload] - 1;

            if (state[payload] <= 0) {
                delete state[payload]; 
            }
        },
    },
    selectors: {
        selectCartItems: (state) => Object.keys(state).reduce((acc, id) => {
            acc.push({ id, amount: state[id] })

            return acc;
        }, []),
        selectAmountById: (state, id) => state[id] || 0,
    }
});

console.log(cartSlice);
console.log(cartSlice.actions.addToCart);




// const map = {
//     "argumentValue": "returnedValue"
//     "a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2": "result"
// }

// big O
// work speed
// fast speed --------------------------------- low speed
// huge memory usage --------------------------------- low memory usage
 
export const { addToCart, removeFromCart } = cartSlice.actions;
export const { selectCartItems, selectAmountById } = cartSlice.selectors; 