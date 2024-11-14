import { useSelector } from "react-redux";
import { ReviewForm } from "../Review-form/Review-form";
import { useUser } from "../user-context/use-user";
import { selectRestaurantById } from "../../redux/Restaurants";
import { selectReviews } from "../../redux/Reviews";
import { Review } from "../Review/Review";
import { useParams } from "react-router-dom";

export const Reviews = () => {
  const { restaurantId } = useParams();

  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  const reviewsInfo = useSelector((state) => selectReviews(state));

  const { reviews } = restaurant || {};

  const currentReviews = reviews.map((id) => reviewsInfo[id]);

  if (!reviews.length) {
    return null;
  }

  const { auth } = useUser();
  const { isAuthorized } = auth;

  return (
    <div>
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
