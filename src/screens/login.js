import {useRef, useState} from "react";
import {useAuth} from "../contexts/auth-context";
import {Link, useNavigate} from "react-router-dom";

const Login = () => {
  const [error, setError] = useState()
  const emailRef = useRef()
  const passwordRef = useRef()
  const {login} = useAuth()
  const navigate = useNavigate()
  const handleLogin = async () => {
    try {
      await login(emailRef.current.value, passwordRef.current.value)
      navigate('/home')
    } catch (e) {
      // console.log(e.message)
      setError(e.message)
    }
  }
  return(
    <div>
      <h1>Login</h1>
      {
        error &&
          <div className="alert-danger p-2 mb-2">
            {error}
          </div>
      }
      <input ref={emailRef} placeholder="email" className="form-control"/>
      <input ref={passwordRef} placeholder="password" className="form-control"/>
      <button onClick={handleLogin} className="btn btn-primary">Login</button>
      <Link to="/signup">Signup</Link>
    </div>
  )
}
export default Login;