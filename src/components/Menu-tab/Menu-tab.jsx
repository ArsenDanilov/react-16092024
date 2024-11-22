import { Tab } from "../Tab/Tab";
import { useNavigate } from "react-router-dom";

export const MenuTab = () => {

  const navigate = useNavigate();

  return <Tab title={'Menu'} onClick={() => navigate('menu')} />;
};
