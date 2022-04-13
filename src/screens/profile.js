import {Link} from "react-router-dom";
import {useAuth} from "../contexts/auth-context";

const Profile = () => {
  const {currentUser} = useAuth()
  return(
    <div>
      <h1>Profile</h1>
      <Link to="/home">Home</Link>
      <pre>
      {JSON.stringify(currentUser, null, 2)}
      </pre>
    </div>
  )
}
export default Profile;