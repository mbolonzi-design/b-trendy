import React from 'react'

function Login() {
  return (
    <div>
      <form className='login-form'>
        <label htmlFor="username">Username</label>
        <input type="text" name='username' required/>
        <button className="login-btn">Login</button>
      </form>
    </div>
  )
}

export default Login