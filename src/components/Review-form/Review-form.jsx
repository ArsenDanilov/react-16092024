import { Counter } from "../Counter/Counter";
import { useForm } from "./use-form";
import { Button } from "../Button/Button";
import { useAddReviewMutation } from "../../redux/services/api/api";
import styles from "./review-form.module.css"
import buttonStyles from "../Button/button.module.css"

export const ReviewForm = ({ restaurantId }) => {
  const { name, text, rating, setText, setRating, setClear } =
    useForm();

  const increaseHandler = () => {
    if (rating < 5) {
      setRating(rating + 1);
    }
  };
  const decreaseHandler = () => {
    if (rating > 0) {
      setRating(rating - 1);
    }
  };


  const [addReview] = useAddReviewMutation();

  return (
    
    <form className={styles.reviewForm} action="" onReset={() => setClear()} onSubmit={(e) => e.preventDefault()}>
      <h3 className={styles.reviewForm__title}>Leave your review</h3>
      <div>
        <textarea className={styles.reviewForm__text} name="message" id="" cols="30" rows="3" value={text} onChange={(event) => setText(event.target.value)}></textarea>
      </div>
      <div className={styles.reviewForm__rating}>
        <span>Rating:</span>
        <Counter
          value={rating}
          increase={increaseHandler}
          decrease={decreaseHandler}
          className={buttonStyles.button__counter}
        />
      </div>
      <Button onClick={() => setClear} type={"reset"} text={"Clear"} />
      <Button
        onClick={() => addReview({ restaurantId, review: {
          name, 
          text,
          rating,
        } })}
        text={"Submit"}
      />
    </form>
  );
};
