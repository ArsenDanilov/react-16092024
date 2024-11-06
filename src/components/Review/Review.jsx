import { useSelector } from "react-redux"
import { selectUserById } from "../../redux/User"

export const Review = ({ key, text, rating, userId }) => {

    const user = useSelector((state) => selectUserById(state, userId));

    return (
        <p>[{rating}] {user.name} : {text}</p>
    )
}