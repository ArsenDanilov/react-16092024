import { useForm } from "./use-form";
import { Button } from "../Button/Button";
import { useAddReviewMutation } from "../../redux/services/api/api";
import styles from "./review-form.module.css"
import { ReviewStars } from "../Review-stars/Review-stars";

export const ReviewForm = ({ restaurantId }) => {
  const { name, text, rating, setText, setRating } =
    useForm();

  const [addReview] = useAddReviewMutation();

  return (
    
    <form className={styles.reviewForm} action="" onSubmit={(e) => e.preventDefault()}>
      <h3 className={styles.reviewForm__title}>Leave your review</h3>
      <div>
        <textarea className={styles.reviewForm__text} name="message" id="" cols="30" rows="3" value={text} onChange={(event) => setText(event.target.value)}></textarea>
      </div>
      <div className={styles.reviewForm__rating}>
        <span>Rating:</span>
        <ReviewStars setRating={setRating} rating={rating}/>
      </div>
      <Button
        onClick={() => addReview({ restaurantId, review: {
          name, 
          text,
          rating,
        } })}
        text={"PUBLISH REVIEW"}
        className={styles.reviewForm__submitBtn}
      />
    </form>
  );
};
