import { useRef, useState } from 'react';
import './register.scss'

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value);
    }

    const handleFinish = () => {
        setPassword(passwordRef.current.value);
    }

    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img src="https://cdn.vox-cdn.com/thumbor/Yq1Vd39jCBGpTUKHUhEx5FfxvmM=/39x0:3111x2048/1200x800/filters:focal(39x0:3111x2048)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png" alt="" className="logo" />
                
                    <button className="loginButton">Sign In</button>
                </div>
            </div>

            <div className="container">
                <h1>Unlimited movies, TV shows, anime and more.</h1>
                <h2>Watch anywhere, anytime. Cancel anytime.</h2>

                <p>
                    Ready to watch? Enter your email address to create or restart your membership.
                </p>

                {!email ?
                    (
                        <div className="input">
                            <input type="email" placeholder='Enter your email address' ref={emailRef}/>
        
                            <button className="registerButton" onClick={handleStart}>Get Started</button>
                        </div>
                    )
                    :
                    (
                        <form className='input'>
                            <input type="password" placeholder='Enter your password' ref={passwordRef}/>
        
                            <button className="registerButton" onClick={handleFinish}>Start</button>
                        </form>
                    )
                }


            </div>
        </div>
    );
}
 
export default Register;