import styles from "./restaurant-card.module.css"
import { useNavigate } from "react-router-dom";


export const RestaurantCard = ({ id, name, description, img }) => { 

    const navigate = useNavigate(); 

    return (
        <div className={styles.restaurantCard} onClick={() => navigate(`/restaurant/${id}/menu`)}>
            <div className={styles.restaurantCard__imgWrapper}>
                <img className={styles.restaurantCard__img} src={img} alt={`${name} restaurant image`} />
            </div>
            <div className={styles.restaurantCard__info}>
                <h2 className={styles.restaurantCard__title}>{name}</h2>
                <h3 className={styles.restaurantCard__subtitle}>{description}</h3>
            </div>
        </div>
    )
}