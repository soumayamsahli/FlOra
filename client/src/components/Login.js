
import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"

const Login = () => {
  return (
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <form>
            <label htmlFor="chk" aria-hidden="true">Sign up</label>
            <input type="text" name="txt" placeholder="User name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="pswd" placeholder="Password" required />
            <Link to='/'><button>

              signup
            </button>
            </Link>
          </form>
        </div>
        <div className="login">
          <form>
            <label htmlFor="chk" aria-hidden="true">Login</label>
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="pswd" placeholder="Password" required />
          <Link to='/'><button>Login</button></Link>
          </form>
        </div>
      </div>
    


  )
}

export default Login
