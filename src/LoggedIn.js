import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function LoggedIn(props) {
    const token = useSelector((state) => state.token)

    if (!token) {
        return <Navigate to="/login"/>
    }

    return props.children
}

export default LoggedIn
