import { useUser } from "../user-context/use-user";
import styles from "./review.module.css"

export const Review = ({ key, text, rating, user }) => {

  const { auth } = useUser();

  const name = user? user.name : auth.name;

  return (  
    // <p key={key}>
    //   [{rating}] {name} : {text}
    // </p>

    <div key={key} className={styles.review}>
      <div>
        <p className={styles.review__name}>{name}</p>
        <p className={styles.review__comment}>{text}</p>
      </div>
      <div className={styles.review__rating}>{rating}</div>
    </div>
  );
};
