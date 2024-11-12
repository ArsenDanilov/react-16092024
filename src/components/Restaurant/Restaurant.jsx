import { useSelector } from "react-redux";
import { DishCounter } from "../DishCounter/DishCounter";
import { ReviewForm } from "../Review-form/Review-form";
import { useUser } from "../user-context/use-user";
import { selectRestaurantById } from "../../redux/Restaurants";
import { selectDishes } from "../../redux/Dishes";
import { selectReviews } from "../../redux/Reviews";
import { Review } from "../Review/Review";
import { MenuTab } from "../Menu-tab/Menu-tab";
import { Outlet } from "react-router-dom";
import { ReviewsTab } from "../Reviews-tab/Reviews-tab";


export const Restaurant = ({ id }) => {

  return (
    <div>
      <MenuTab />
      <ReviewsTab />
      <Outlet />
    </div>
  );
};

