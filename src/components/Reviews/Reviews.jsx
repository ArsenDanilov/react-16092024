import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/Restaurants";
import { selectReviews, selectReviewsRequestStatus } from "../../redux/Reviews";
import { Review } from "../Review/Review";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getReviews } from "../../redux/Reviews/get-reviews";
import { getUsers } from "../../redux/User/get-users";


export const Reviews = () => {
  const { restaurantId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews()); 
    dispatch(getUsers());
  }, [dispatch]);

  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  const reviewsInfo = useSelector((state) => selectReviews(state));

  const requestStatus = useSelector(selectReviewsRequestStatus);

  if (requestStatus === "idle" || requestStatus === "pending"){ 
    return (
      'loading'
    );
  }

  const { reviews } = restaurant || {};

  const currentReviews = reviews.map((id) => reviewsInfo[id]);  

  if (!reviews.length) {
    return null;
  }

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
    </div>
  );
};
