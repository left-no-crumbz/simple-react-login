import '../styles/LandingPage.css';
import profile from '../assets/my-notion-face-transparent.png';
import SubmitButton from '../components/SubmitButton';
import { useNavigate } from "react-router";
import { useLocation } from "react-router";

function LandingPage(){
    const navigate = useNavigate();
    const location = useLocation();
    const username = location.state?.username || 'Guest';

    function handleLogout() {
        navigate('/login');
    }

    function getGreeting() {
        const hours = new Date().getHours();
        if (hours < 12) {
            return 'Good morning';
        } else if (hours < 18) {
            return 'Good afternoon';
        } else {
            return 'Good evening';
        }
    }

    return (
        <div className='landing-container'>
            <h2>{getGreeting()}, { username }!</h2>
            <img src={profile} alt="Author's profile picture" />
            
            <form onSubmit={handleLogout}> 
                <SubmitButton label="Logout"></SubmitButton>
            </form>
        </div>
    );
}

export default LandingPage;