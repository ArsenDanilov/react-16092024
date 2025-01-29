import { createContext } from "react";
import { Layout } from "../Layout/Layout";
import { RestaurantsPage } from "../Restaurants-page/Restaurants-page";
import { ThemeContextProvider } from "../theme-context/theme-context";
import { UserContextProvider } from "../user-context/user-context";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { RestaurantPage } from "../Restaurant-page/Restaurant-page";
import { Menu } from "../Menu/Menu";
import { Reviews } from "../Reviews/Reviews";
import { DishPage } from "../Dish-page/Dish-page";
import { Checkout } from "../Checkout/Checkout";
import { ThankYouPage } from "../ThankYouPage/ThankYouPage";

export const ThemeContext = createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/restaurants" replace />,
      },
      {
        path: "restaurants",
        element: <RestaurantsPage title="Cuisines:" />,
      },
      {
        path: "/restaurant/:restaurantId",
        element: <RestaurantPage />,
        children: [
          {
            path: "menu",
            element: <Menu />,
          },
          {
            path: "reviews",
            element: <Reviews />,
          },
        ],
      },
      {
        path: "/dish/:dishId",
        element: <DishPage />,
      },
      {
        path: "/checkout",
        element: <Checkout /> ,
      },
      {
        path: "/thankyou",
        element: <ThankYouPage /> ,
      },
    ],
  },
]);

export const App = () => {
  
  return (
    <div>
      <Provider store={store}>
        <ThemeContextProvider>
          <UserContextProvider>
            <RouterProvider router={router}>
            </RouterProvider>
          </UserContextProvider>
        </ThemeContextProvider>
      </Provider>
    </div>
  );
};
