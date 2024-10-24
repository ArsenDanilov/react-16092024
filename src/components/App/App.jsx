import { createContext, useState } from "react";
import { Layout } from "../Layout/Layout";;
import { RestaurantsPage } from "../Restaurants-page/Restaurants-page";
import { Button } from "../Button/Button";
import { ThemeContextProvider } from "../theme-context/theme-context";
import { UserContextProvider } from "../user-context/user-context";

export const ThemeContext = createContext();

export const App = ({ title }) => {

  return (
    <div>
      <ThemeContextProvider>
        <UserContextProvider>
          <Layout>
            <h1>{title}</h1>
            <RestaurantsPage title={"Cuisines"} />
          </Layout>
        </UserContextProvider>
      </ThemeContextProvider>
    </div>
  );
};
