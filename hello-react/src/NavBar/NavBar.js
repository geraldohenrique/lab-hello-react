import logoIron from '../images/ironhack-logo-xs.png';
import menuImg from '../images/menu-top-xs.png'
import './NavBar.css'

function NavBar(){

    return(
        <nav> 
            <img src={logoIron} className="ironImg" alt=""></img>
            <img src={menuImg} className="menuImg" alt=""></img>
        </nav>
    )

}

export default NavBar