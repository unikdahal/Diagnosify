import logo from '../assets/logo.svg'
import RedButton from './RedButton';
import { Link } from 'react-router-dom';
const Navbar = ()=>{
    return (
        <div className='flex justify-between px-20 py-8 bg-blue-800'>
            <div><img src={logo} alt="DIAGNOSIFY"/></div>
            <div className='flex list-none gap-10 items-center text-white font-medium'>
                <Link to="/"><li>Home</li></Link>
                <a href="#About-Us">
                <li>About Us</li>
                </a>
                <a href="#our-team">
                <li>Our Team</li>
                </a>
                <a href="#contact">
                <li>Contact Us</li>
                </a>
                <Link to="./diagnose">
                <RedButton text="Diagnose Now"/>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;