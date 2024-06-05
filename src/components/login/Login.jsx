import './login.css'

function login() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">CollGram</h3>
                <span className="loginDesc">Connect with friends and world around you.</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder='email' className="loginInput" />
                    <input placeholder='password' className="loginInput" />
                    <button className="loginButton">Login</button>
                    <span className="forgotPass">Forgot Password?</span>
                    <button className="registerButton">Create a new Account</button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default login
