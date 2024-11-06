import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/Restaurants";
import { Tab } from "../Tab/Tab";

export const RestaurantTab = ({ id, onClick, isActive }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return null;
  }

  return <Tab title={restaurant.name} onClick={onClick} isActive={isActive} />;
};
