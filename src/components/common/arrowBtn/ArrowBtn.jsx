import { Link } from "react-router-dom";
import style from './arrowbtn.module.css';
import arrow from '../../../assets/arrow.png';

const ArrowBtn = ({ path,content }) =>{
    return(
        <span className={style.arrowbtn}>
            <Link to={`/${path}`}>
                { content }
                <img src={arrow} alt="arrowToPortfolio"/>
             </Link>
        </span>
    )
}


export default ArrowBtn;