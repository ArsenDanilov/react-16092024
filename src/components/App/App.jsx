import { restaurants } from "../../../materials/mock";
import { Layout } from "../Layout/Layout";
import { Restaurant } from "../Restaurant/Restaurant";
import { RestaurantsPage } from "../Restaurants-page/Restaurants-page";

export const App = ({ title }) => {
  return (
    <div>
      <Layout>
        <h1>{title}</h1>
        <RestaurantsPage title={"Cuisines"} />
      </Layout>
    </div>
  );
};
