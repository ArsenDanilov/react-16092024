import { createContext } from "react";
import { Layout } from "../Layout/Layout";
import { RestaurantsPage } from "../Restaurants-page/Restaurants-page";
import { ThemeContextProvider } from "../theme-context/theme-context";
import { UserContextProvider } from "../user-context/user-context";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

export const ThemeContext = createContext();

export const App = ({ title }) => {
  return (
    <div>
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
    </div>
  );
};
