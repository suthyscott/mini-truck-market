import {useState, useContext} from 'react'
import '../css/Auth.css'
import axios from 'axios'
import AuthContext from '../store/authContext'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
  const [register, setRegister] = useState(false)
  const [email, setEmail]= useState('')
  const [password, setPassword] = useState('')
  const authCtx = useContext(AuthContext)
  const navigate = useNavigate()
console.log(authCtx)
  const submitHandler = (e) => {
    e.preventDefault()

    const body = {
      email,
      password
    }

    axios.post(register ? `/api/register` : `/api/login`, body)
      .then(res => {
        authCtx.login(res.data.token, res.data.userId)
        navigate('/')
      })
      .catch(err => console.log(err))

  }

  return (
    <main id='auth-container'>
      <h1>Welcome to Mini Truck Market!</h1>
      <form  onSubmit={e => submitHandler(e)}>
        <h3>Please {register ? 'register' : 'login'} below</h3>
        <input placeholder='Enter your email' onChange={e => setEmail(e.target.value)}/>
        <input placeholder='Enter your password' onChange={e => setPassword(e.target.value)}/>
        <button>Submit</button>
      </form>
      <button onClick={() => setRegister(!register)}>Need to {register? 'login' : 'register'}?</button>
    </main>
  )
}

export default Auth