import './register.css'

function register() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">CollGram</h3>
                <span className="loginDesc">Connect with friends and world around you.</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder='Username' className="loginInput" />
                    <input placeholder='Email' className="loginInput" />
                    <input placeholder='password' className="loginInput" />
                    <input placeholder='password again' className="loginInput" />
                    <button className="loginButton">Sign up</button>
                    <span className="forgotPass">Forgot Password?</span>
                    <button className="registerButton">Log into your Account</button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default register
