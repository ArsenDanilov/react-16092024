import styles from "./restaurant-card.module.css";
import { useNavigate } from "react-router-dom";
import { ReviewStars } from "../Review-stars/Review-stars";

export const RestaurantCard = ({
  id,
  name,
  description,
  img,
  reviews,
  rating,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.restaurantCard}
      onClick={() => navigate(`/restaurant/${id}/menu`)}
    >
      <div className={styles.restaurantCard__imgWrapper}>
        <img
          className={styles.restaurantCard__img}
          src={img}
          alt={`${name} restaurant image`}
        />
      </div>
      <div className={styles.restaurantCard__info}>
        <h2 className={styles.restaurantCard__title}>{name}</h2>
        <h3 className={styles.restaurantCard__subtitle}>{description}</h3>
        <div className={styles.restaurantCard__ratingBlock}>
          <ReviewStars rating={rating} />
          <p>({reviews.length})</p>
        </div>
      </div>
    </div>
  );
};
