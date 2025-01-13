import { Tab } from "../Tab/Tab";
import { useNavigate } from "react-router-dom";

export const ReviewsTab = () => {

  const navigate = useNavigate();

  const isActive = location.pathname.endsWith('reviews');

  return <Tab title={'Reviews'} onClick={() => navigate('reviews')} isActive={isActive}/>;
};
