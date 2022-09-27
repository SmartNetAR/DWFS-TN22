import './TopBar.css';

function TopBar({onNavigate}) {
    return (<nav>
        <span onClick={() => onNavigate("home")}>Home</span>
        <span onClick={() => onNavigate("users")}>Users</span>
        <span onClick={() => onNavigate("contact")}>Contact</span>
        <span onClick={() => onNavigate("about")}>About</span>
    </nav>)
}

export default TopBar;

