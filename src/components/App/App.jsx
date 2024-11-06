import { createContext } from "react";
import { Layout } from "../Layout/Layout";
import { RestaurantsPage } from "../Restaurants-page/Restaurants-page";
import { ThemeContextProvider } from "../theme-context/theme-context";
import { UserContextProvider } from "../user-context/user-context";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export const ThemeContext = createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "restaurant",
        element: <RestaurantsPage title={"Cuisines"} />,
        children: [
          {
            path: ":restaurantId",
            element: <div>123</div>,
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
      {/* <RouterProvider router={router}>
        <Provider store={store}>
          <ThemeContextProvider>
            <UserContextProvider>
              <Layout>
                <h1>{title}</h1>
                <RestaurantsPage title={"Cuisines"} />
              </Layout>
            </UserContextProvider>
          </ThemeContextProvider>
        </Provider>
      </RouterProvider> */}
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
