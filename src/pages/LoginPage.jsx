import "../styles/LoginPage.css";
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { useNavigate } from "react-router";
import { useState } from "react";
import Input from "../components/Input.jsx";
import SubmitButton from "../components/SubmitButton.jsx";

function LoginPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (username.trim() && password.trim()) {
            navigate("/landing", {state: { username } });
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
                        label="Username"
                        icon={CiUser} 
                        id="username"
                        name="username"
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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