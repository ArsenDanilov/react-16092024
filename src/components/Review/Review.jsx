import { useUser } from "../user-context/use-user";
import styles from "./review.module.css";
import { ReviewStars } from "../Review-stars/Review-stars";

export const Review = ({ key, text, rating, user }) => {
  const { auth } = useUser();

  const name = user ? user.name : auth.name;

  return (
    <div key={key} className={styles.review}>
      <div>
        <p className={styles.review__name}>{name}</p>
        <p className={styles.review__comment}>{text}</p>
      </div>
      <ReviewStars rating={rating}/>
    </div>
  );
};
