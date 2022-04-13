import {useAuth} from "../contexts/auth-context";
import {Link, useNavigate} from "react-router-dom";
import TuitsList from "../components/tuits-list";
import Media from "./media";

const Home = () => {
  const {currentUser, signout} = useAuth()
  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
      await signout()
      navigate('/')
    } catch (e) {

    }
  }
  return(
    <div>
      <h1>Home</h1>
      Welcome {currentUser.email}
      <br/>
      <button onClick={handleLogout} className="btn btn-danger">
        Logout</button>
      <Link to="/profile">Profile</Link>
      <Media/>
      <TuitsList/>
    </div>
  )
}
export default Home;