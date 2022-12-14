import React from 'react'

function Register() {
  return (
    <div>
      <form>
        <input type="text" name='fullname' placeholder='Full Name' />
        <input type="email" name='email' placeholder='Email' />
        <input type="password" name='password' placeholder='Password' />
        <input type="password" name='password' placeholder='Confirm Password' />
        <input type="submit"  value='Register' />
      </form>
      <hr />
      <p>Already have an account? <button>Login</button></p>
    </div>
  )
}

export default Register