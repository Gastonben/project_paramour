import logo from '../../assets/logo.svg';
import logo_hambur from '../../assets/icons/icon-hamburger.svg';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';

const Navbar = () =>{
    return(
        <div className={style.container}>
            <img src={logo} alt="logo" />
            <input type="checkbox" name='switch' id="switch"></input>
            <label htmlFor='switch' className={style.switch_label}>
               <img src={logo_hambur} alt="menu"/>
            </label>
            <nav className={style.boxes}>
                <ul>
                  <Link to="/portfolio"><li>portfolio</li></Link>  
                  <Link to="/aboutus"><li>about us</li></Link> 
                  <Link to="/contact"><li>contact</li></Link> 
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;