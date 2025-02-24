import { Review } from "../Review/Review";
import { useParams } from "react-router-dom";
import { ReviewForm } from "../Review-form/Review-form";
import {
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
} from "../../redux/services/api/api";
import { useUser } from "../user-context/use-user";
import { Loader } from "../Loader/Loader";
import styles from "./reviews.module.css";

export const Reviews = () => {
  const { restaurantId } = useParams();

  const {
    data: reviews,
    isFetching,
    isError,
  } = useGetReviewsByRestaurantIdQuery(restaurantId);

  const { auth } = useUser();

  const {
    data: usersArr,
    isLoading: userIsLoading,
    isError: userIsError,
  } = useGetUsersQuery();

  console.log(isFetching);
  console.log(userIsLoading);

  if (isFetching) {
    return <Loader />;
  }

  if (userIsLoading) {
    return <Loader />;
  }

  if (!reviews?.length) {
    return null;
  }

  if (isError) {
    return "error";
  }

  if (!usersArr?.length) {
    return null;
  }

  if (userIsError) {
    return "error";
  }

  return (
    <div className={styles.reviews}>
      <ul>
        {reviews?.map((review) => (
          <li key={review.id}>
            <Review
              rating={review.rating}
              text={review.text}
              user={usersArr.find(
                (findedUser) => findedUser.id === review.userId
              )}
            />
          </li>
        ))}
      </ul>
      {auth.isAuthorized && <ReviewForm restaurantId={restaurantId} />}
    </div>
  );
};
