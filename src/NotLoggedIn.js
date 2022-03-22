import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function NotLoggedIn(props) {
    const token = useSelector((state) => state.token)

    if (token) {
        return <Navigate to="/profile"/>
    }

    return props.children
}

export default NotLoggedIn
