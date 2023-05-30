import React from 'react'
import { Link } from 'react-router-dom'


const Register = () => {
  return (
    <div className="Sign up">
    <form>
      <label htmlFor="chk" aria-hidden="true">Sign up</label>
      <input type="text" name="txt" placeholder="User name" required />
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="pswd" placeholder="Password" required />
      <Link to='/'><button>

        Sign up
      </button>
      </Link>
    </form>
  </div>
  )
}

export default Register
