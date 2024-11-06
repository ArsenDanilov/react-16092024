import { useSelector } from "react-redux";
import { DishCounter } from "../DishCounter/DishCounter";
import { ReviewForm } from "../Review-form/Review-form";
import { useUser } from "../user-context/use-user";
import { selectRestaurantById } from "../../redux/Restaurants";
import { selectDishes } from "../../redux/Dishes";
import { selectReviews } from "../../redux/Reviews";
import { Review } from "../Review/Review";

export const Restaurant = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  const dishes = useSelector((state) => selectDishes(state));
  const reviewsInfo = useSelector((state) => selectReviews(state));

  const { name, menu, reviews } = restaurant || {};

  const currentDishes = menu.map((id) => dishes[id]);

  const currentReviews = reviews.map((id) => reviewsInfo[id]);

  if (!reviews.length) {
    return null;
  }

  if (!menu.length) {
    return null;
  }

  if (!name) {
    return null;
  }

  const { auth } = useUser();
  const { isAuthorized } = auth;

  return (
    <div>
      <h2>Name: {name}</h2>
      <h3>Menu:</h3>
      <ul>
        {currentDishes.map((dish) => (
          <li key={dish.id}>
            {dish.name}
            {auth.isAuthorized && <DishCounter id={dish.id} />}
          </li>
        ))}
      </ul>
      <h3>Reviews:</h3>
      <ul>
        {currentReviews.map((review) => (
          <li key={review.id}>
            <Review
              rating={review.rating}
              text={review.text}
              userId={review.userId}
            />
          </li>
        ))}
      </ul>
      <h3>Review form</h3>
      {auth.isAuthorized && <ReviewForm />}
    </div>
  );
};

//
