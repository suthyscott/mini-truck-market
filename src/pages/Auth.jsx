import {useState} from 'react'
import '../css/Auth.css'

const Auth = () => {
  const [register, setRegister] = useState(false)
  const [email, setEmail]= useState('')
  const [password, setPassword] = useState('')

  return (
    <main id='auth-container'>
      <h1>Welcome to Mini Truck Market!</h1>
      <form>
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