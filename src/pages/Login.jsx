import React from 'react'
import '../styles/Login.css'

function Login() {
  return (
    <div>
      <h3>Login into your account</h3>
      <form className='login-form'>
        <input type="text" name='username' placeholder='Username' />
        <input type="password" name='password' placeholder='Password' />
        <input type="submit" value='Login' />
      </form>
      <hr />
      <p>Don't have an account? <button>Register</button></p>
    </div>
  )
}

export default Login