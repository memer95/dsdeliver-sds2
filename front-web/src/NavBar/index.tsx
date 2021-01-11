import './styles.css';
import { ReactComponent as Logo } from './logo.svg';
//import { Link } from 'react-router-dom';
function NavBar (){
    return(
        <nav className="main-navbar">
            <Logo />
            <a href="/" className="logo-text">DS Delivery</a>
        </nav>
    )
}

export default NavBar;