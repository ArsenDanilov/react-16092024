import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import styles from "./backButton.module.css";


export const BackButton = () => {

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };

    return <Button onClick={handleBackClick} text={'Back'} className={styles.backButton}/>;
}