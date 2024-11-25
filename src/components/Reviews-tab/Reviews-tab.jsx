import { Tab } from "../Tab/Tab";
import { useNavigate } from "react-router-dom";

export const ReviewsTab = () => {

  const navigate = useNavigate();

  return <Tab title={'Reviews'} onClick={() => navigate('reviews')} />;
};
