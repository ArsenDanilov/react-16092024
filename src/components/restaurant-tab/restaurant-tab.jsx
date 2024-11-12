import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/Restaurants";
import { Tab } from "../Tab/Tab";
import { Link, useNavigate } from "react-router-dom";

export const RestaurantTab = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  const navigate = useNavigate();

  if (!restaurant) {
    return null;
  }

  // return <Link to={id}>{restaurant.name}</Link>;
  return <Tab title={restaurant.name} onClick={() => navigate(id)} />;
};
