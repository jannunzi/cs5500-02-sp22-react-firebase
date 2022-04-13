import {Navigate} from "react-router-dom";
import {useAuth} from "../contexts/auth-context";

const ProtectedRoute = ({children}) => {
  const {currentUser} = useAuth()
  if(currentUser)
    return(children)
  else
    return(<Navigate to="/"/>)
}
export default ProtectedRoute