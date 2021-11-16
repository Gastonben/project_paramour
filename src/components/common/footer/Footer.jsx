import style from './footer.module.css';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import ArrowBtn from '../arrowBtn/ArrowBtn';

const Footer = () =>{
    return (
        <footer className={style.foot}>
            <div>
                <i><img src={logo} alt="logo" /></i>
            </div>
            <div>
                <Link to='/portfolio'>Portfolio</Link>
                <Link to='/aboutus'>About Us</Link>
                <Link to='/contact'>Contact</Link>
            </div>
            <ArrowBtn path='portfolio' content='see our portfolio'/>
        </footer>
    )
}

export default Footer;