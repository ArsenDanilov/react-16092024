import { Button } from "../Button/Button";
import styles from './tab.module.css'

export const Tab = ({ title, onClick, isActive }) => {
  return (
    <Button isActive={isActive} text={title} onClick={onClick} className={styles.cuisineBtn} />
  );
};
