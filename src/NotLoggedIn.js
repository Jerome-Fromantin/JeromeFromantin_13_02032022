import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

/**
 * Ce composant est appelé lorsque le path contient "login".
 * Mais ce path ne doit être accessible que lorsque l'on est déconnecté.
 * Donc, si un token (preuve de connexion) est présent, on est dirigé vers le path "profile".
 * Sinon, on est dirigé vers l'enfant de <NotLoggedIn/>, en l'occurrence le composant <Signin/>.
 */
function NotLoggedIn(props) {
    const token = useSelector((state) => state.token)

    if (token) {
        return <Navigate to="/profile"/>
    }

    return props.children
}

export default NotLoggedIn
