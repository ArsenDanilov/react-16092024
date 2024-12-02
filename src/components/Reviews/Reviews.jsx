import { Review } from "../Review/Review";
import { useParams } from "react-router-dom";
import { ReviewForm } from "../Review-form/Review-form";
import { useGetReviewsByRestaurantIdQuery} from "../../redux/services/api/api";
import { useUser } from "../user-context/use-user";


export const Reviews = () => {
  const { restaurantId } = useParams();

  const { data: reviews, isFetching, isError } = useGetReviewsByRestaurantIdQuery(restaurantId);

  const { auth } = useUser();

  if (!reviews?.length) {
    return null;
  }

  if(isFetching) {
    return 'loadingg';
  }

  if (isError) {
    return 'error';
  }


  return (
    <div>
      <h3>Reviews:</h3>
      <ul>
        {reviews?.map((review) => (
          <li key={review.id}>
            <Review
              rating={review.rating}
              text={review.text}
              userId={review.userId}
            />
          </li>
        ))}
      </ul>
      {auth.isAuthorized && (
        <ReviewForm restaurantId={restaurantId} />
      )}
    </div>
  );
};
