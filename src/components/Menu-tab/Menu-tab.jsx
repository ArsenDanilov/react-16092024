import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/Restaurants";
import { Tab } from "../Tab/Tab";
import { Link, useNavigate } from "react-router-dom";

export const MenuTab = () => {
//   const restaurant = useSelector((state) => selectRestaurantById(state, id));

  const navigate = useNavigate();

  return <Tab title={'Menu'} onClick={() => navigate('menu')} />;
};
