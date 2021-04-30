import '../styles/Navbar.css'
import home from '../img/home.png'

function Navbar() {
    return (
        <nav>
            <div><a href='https://app.baltimorecorps.org/'><img src={home} alt='home icon' /></a></div>
            <div>LOG IN / SIGN UP</div>
        </nav>
    )
}

export default Navbar