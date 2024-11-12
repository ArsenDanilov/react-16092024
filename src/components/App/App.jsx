import { createContext } from "react";
import { Layout } from "../Layout/Layout";
import { RestaurantsPage } from "../Restaurants-page/Restaurants-page";
import { ThemeContextProvider } from "../theme-context/theme-context";
import { UserContextProvider } from "../user-context/user-context";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RestaurantPage } from "../Restaurant-page/Restaurant-page";
import { MenuTab } from "../Menu-tab/Menu-tab";
import { Menu } from "../Menu/Menu";
import { Reviews } from "../Reviews/Reviews";

export const ThemeContext = createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "restaurants",
        element: <RestaurantsPage title='Cuisines'/>,
        children: [
          {
            path: ":restaurantId",
            element: <RestaurantPage />,
            children: [{
              path: "menu",
              element: <Menu />,
            },
            {
              path: "reviews",
              element: <Reviews />,
            }]
          },
        ],
      },
      {
        path: "/about",
        element: <div>about</div>,
      },
    ],
  },
]);

export const App = ({ title }) => {
  return (
    <div>
      <Provider store={store}>
        <ThemeContextProvider>
          <UserContextProvider>
            <RouterProvider router={router}>
              <Layout>
                <h1>{title}</h1>
                <RestaurantsPage title={"Cuisines"} />
              </Layout>
            </RouterProvider>
          </UserContextProvider>
        </ThemeContextProvider>
      </Provider>
    </div>
  );
};
