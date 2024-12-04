import { Tab } from "../Tab/Tab";
import { useNavigate } from "react-router-dom";

export const RestaurantTab = ({ name, id, isActive }) => {
  
  const navigate = useNavigate();  

  return <Tab title={name} isActive={isActive} onClick={() => navigate(`${id}/menu`)} />;
};
