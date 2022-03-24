import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

/**
 * Ce composant est appelé lorsque le path contient "profile" ou "transactions".
 * Mais ces paths ne doivent être accessibles que lorsque l'on est connecté.
 * Donc, si un token (preuve de connexion) est absent, on est dirigé vers le path "login".
 * Sinon, on est dirigé vers l'enfant de <LoggedIn/>,
 * c'est-à-dire soit le composant <User/>, soit le composant <Transactions/>.
 */
 function LoggedIn(props) {
    const token = useSelector((state) => state.token)

    if (!token) {
        return <Navigate to="/login"/>
    }

    return props.children
}

export default LoggedIn
