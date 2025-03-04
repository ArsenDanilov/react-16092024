import { Tab } from "../Tab/Tab";
import { useNavigate } from "react-router-dom";

export const MenuTab = () => {

  const navigate = useNavigate();

  const isActive = location.pathname.endsWith('menu');

  return <Tab title={'Menu'} onClick={() => navigate('menu')} isActive={isActive}/>;
};
