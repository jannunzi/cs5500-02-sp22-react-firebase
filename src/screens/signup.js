import {useRef, useState} from "react";
import {useAuth} from "../contexts/auth-context";
import {Link, useNavigate} from "react-router-dom";

const Signup = () => {
  const [error, setError] = useState()
  const emailRef = useRef()
  const passwordRef = useRef()
  const password2Ref = useRef()
  const {signup} = useAuth()
  const navigate = useNavigate()
  const handleSignup = async () => {
    setError('')
    if(passwordRef.current.value !== password2Ref.current.value) {
      return setError('Passwords must match')
    }
    try {
      await signup(emailRef.current.value, passwordRef.current.value)
      navigate('/')
    } catch (e) {
      setError(e.message)
    }
  }

  return(
    <div>
      <h1>Signup</h1>
      {
        error &&
        <div className="alert-danger p-2 mb-2">
          {error}
        </div>
      }
      <input ref={emailRef} placeholder="email" className="form-control"/>
      <input ref={passwordRef} placeholder="password" className="form-control"/>
      <input ref={password2Ref} placeholder="password" className="form-control"/>
      <button onClick={handleSignup} className="btn btn-primary">Signup</button>
      <Link to="/">Login</Link>
    </div>
  )
}
export default Signup;