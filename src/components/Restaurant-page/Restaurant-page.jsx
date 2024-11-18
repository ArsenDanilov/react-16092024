import { useParams } from "react-router-dom";
import { Restaurant } from "../Restaurant/Restaurant";

export const RestaurantPage = () => {
  const { restaurantId } = useParams();


  return <Restaurant id={restaurantId} />;
};
