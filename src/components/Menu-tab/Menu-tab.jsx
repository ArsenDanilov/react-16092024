import { Tab } from "../Tab/Tab";
import { useNavigate } from "react-router-dom";

export const MenuTab = () => {
//   const restaurant = useSelector((state) => selectRestaurantById(state, id));

  const navigate = useNavigate();

  return <Tab title={'Menu'} onClick={() => navigate('menu')} />;
};
