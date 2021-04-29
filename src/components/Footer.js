import '../styles/App.css'
import '../styles/Footer.css'

function Footer() {
    return (
        <footer>
            <div id='footer-container'>
                <div>
                    <i className="fab fa-facebook"></i>
                    <i class="fab fa-linkedin-in"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-medium"></i>
                    <i class="fab fa-youtube"></i>
                </div>
                <div id='links'>
                    <div><a href='https://www.baltimorecorps.org/contact'>CONTACT US</a></div>
                    <div><a href='https://www.baltimorecorps.org/donate-1'>DONATE</a></div>
                    <div><a href='https://www.baltimorecorps.org/internal'>INTERNAL</a></div>
                </div>
                <p>BALTIMORE CORPS | 2401 LIBERTY HEIGHTS AVE #2730 | BALTIMORE, MD</p>
                <p>(443) 640-8904 | HELLO@BALTIMORECORPS.ORG</p>
            </div>
        </footer>
    )
}

export default Footer