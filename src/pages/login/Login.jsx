import './login.scss'

const Login = () => {
    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img src="https://cdn.vox-cdn.com/thumbor/Yq1Vd39jCBGpTUKHUhEx5FfxvmM=/39x0:3111x2048/1200x800/filters:focal(39x0:3111x2048)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png" alt="" className="logo" />
                </div>
            </div>

            <div className="container">
                <form>
                    <h1>Sign In</h1>

                    <input type="email" placeholder='Enter your email address'/>
                    <input type="password" placeholder='Enter your password'/>

                    <button className="loginButton">Sign In</button>

                    <span>New to Webflix? <b>Sign up now.</b></span>

                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn more</b>
                    </small>
                </form>
            </div>
        </div>
    );
}
 
export default Login;