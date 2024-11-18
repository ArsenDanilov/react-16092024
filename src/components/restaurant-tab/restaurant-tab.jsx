import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/Restaurants";
import { Tab } from "../Tab/Tab";
import { useNavigate } from "react-router-dom";

export const RestaurantTab = ({ id, isActive }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  
  const navigate = useNavigate();  

  if (!restaurant) {
    return null;
  }
  return <Tab title={restaurant.name} isActive={isActive} onClick={() => navigate(`${id}/menu`)} />;
};
