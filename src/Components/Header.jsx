import './Header.css';
import { useState } from 'react';
import menu from '../images/menu.png'
import logo from '../images/logo.png'
function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <>
            <header>
                <nav className="nav">
                    <h1 className="logo"><img src='https://www.shutterstock.com/image-vector/way-logo-negative-space-letter-260nw-2268865555.jpg' className='logo' /></h1>
                    <ul className="links" style={{ display: isOpen ? 'block' : 'none' }}>
                        <li className="home" onClick={() => window.location.pathname = '/home'} >الرئيسية</li>
                        <li className="all-p" onClick={() => window.location.pathname = '/quran'} >القران</li>
                        <li className="accessories" onClick={() => window.location.pathname = '/hadieth'}> الحديث</li>
                        <li className="contact" onClick={() => window.location.pathname = '/sirah'}> السيرة النبوية</li>
                        <li className="fiqh" onClick={() => window.location.pathname = '/fiqh'}>الفقه</li>
                    </ul>
                    <img src={menu} onClick={() => setIsOpen(!isOpen)} className='menu' />
                </nav>
            </header>
        </>
    )

}
export default Header;