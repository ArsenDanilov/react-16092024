import { Button } from "../Button/Button";
import styles from './tab.module.css'

export const Tab = ({ title, onClick, isActive }) => {

  // const navigate = useNavigate();

  // location.pathname.endsWith('menu') ? console.log('Это меню') : console.log('Это не меню');
  

  
  return (
    <Button isActive={isActive} text={title} onClick={onClick} className={styles.cuisineBtn} />
  );
};
