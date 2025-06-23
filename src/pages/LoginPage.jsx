import "../styles/LoginPage.css";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { useNavigate } from "react-router";
import { useState } from "react";
import Input from "../components/Input.jsx";
import SubmitButton from "../components/SubmitButton.jsx";

function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (email.trim() && password.trim()) {
            navigate("/landing");
        } else {
            alert("Please fill in both fields.");
        }
    }

    return (
        <>

            <div className='login-container'>
                
                <h2 id='title'>Welcome back</h2>
                <p id='subtitle'>Sign in to your account to continue</p>

                <form onSubmit={handleSubmit}>
                    <Input
                        label="Email Address"
                        icon={CiMail} 
                        id="email-address"
                        name="email-address"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <br />

                    <Input
                        label="Password"
                        icon={CiLock} 
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <br />

                    <SubmitButton label="Login"/>
                </form>
                
                
            </div>
            
        </>
    )
}

export default LoginPage;