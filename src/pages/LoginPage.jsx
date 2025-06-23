import '../styles/LoginPage.css';
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";


function LoginPage() {
    return (
        <>

            <div className='login-container'>
                
                <h2 id='title'>Welcome back</h2>
                <p id='subtitle'>Sign in to your account to continue</p>

                <label for="email-address">Email address</label>
                <div className="custom-input">
                    <CiMail className='icon' />
                    <input id="email-address" name="email-address" type="email" placeholder='Enter your email'/>
                </div>
                
                <br />

                <label for="password">Password</label>
                <div className="custom-input">
                    <CiLock className='icon' />
                    <input id="password" name="password" type="password" placeholder='Enter your password'/>
                </div>

                <br />

                <button type="submit">Login</button>
            </div>
            
        </>
    )
}

export default LoginPage;