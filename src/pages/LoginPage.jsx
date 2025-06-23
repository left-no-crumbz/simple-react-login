import '../styles/LoginPage.css';
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";

function Input(props) {
    const Icon = props.icon;
    return (
        <>
            <label htmlFor={props.id}>{props.label}</label>
            <div className="custom-input">
                <Icon className='icon' />
                <input
                    id={props.id}
                    name={props.name}
                    type={props.type}
                    placeholder={props.placeholder} />
            </div>
        </>
    );
}

function LoginPage() {
    return (
        <>

            <div className='login-container'>
                
                <h2 id='title'>Welcome back</h2>
                <p id='subtitle'>Sign in to your account to continue</p>

                
                <Input
                    label="Email Address"
                    icon={CiMail} 
                    id="email-address"
                    name="email-address"
                    type="email"
                    placeholder="Enter your email"
                />

                <br />

                <Input
                    label="Password"
                    icon={CiLock} 
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                />

                <br />

                <button type="submit">Login</button>
            </div>
            
        </>
    )
}

export default LoginPage;