import { useSelector } from "react-redux"
import { selectUsersById } from "../../redux/User"

export const Review = ({ key, text, rating, userId }) => {

    const user = useSelector((state) => selectUsersById(state, userId));

    return (
        <li key={key}>[{rating}] {user.name} : {text}</li>
    )
}