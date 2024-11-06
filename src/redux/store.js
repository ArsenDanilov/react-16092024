import { configureStore } from "@reduxjs/toolkit";
import { restaurantsSlice } from "./Restaurants";
import { cartSlice } from "./ui/cart";
import { dishesSlice } from "./Dishes";
import { reviewsSlice } from "./Reviews";
import { usersSlice } from "./User";


// 1. функция из библиотеки Redux
// 2. В ней обязательно должен быть указан reducer - функция, которая будет менять наше состояние
// 3. Этот store надо подключить в наше приложение: заходим в App и оборачиваем все в <Provider store={store}></Provider>. Не забываем сделать импорт стора и Провайдера    
// 4. Также у Редакса есть свои devtools, которые можно скачать в Chrome
// 5. Redux работает со слайсами данных. Есть два вида данных: 1 - ui данные - данные, связанные с клиентским состоянием. Например, тема нашего приложения , 2 - entities - различные сущности, которые существуют в нашем приложении (они берутся с бэкенда. В примере Кинопоиска это может быть сущность фильма/актера)

export const store = configureStore({
    reducer: {
        [restaurantsSlice.name]: restaurantsSlice.reducer,
        [cartSlice.name]: cartSlice.reducer,
        [dishesSlice.name]: dishesSlice.reducer,
        [reviewsSlice.name]: reviewsSlice.reducer,
        [usersSlice.name]: usersSlice.reducer,
    },
}) 

