import logo from '../assets/logo.svg'
import RedButton from './RedButton';
const Navbar = ()=>{
    return (
        <div className='flex justify-between px-20 py-8 bg-blue-800'>
            <div><img src={logo} alt="DIAGNOSIFY"/></div>
            <div className='flex list-none gap-10 items-center text-white font-medium'>
                <li>Home</li>
                <li>About Us</li>
                <li>Our Team</li>
                <li>Contact Us</li>
                <RedButton text="Diagnose Now"/>
            </div>
        </div>
    )
}

export default Navbar;