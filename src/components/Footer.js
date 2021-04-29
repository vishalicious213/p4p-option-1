import '../styles/App.css'
import '../styles/Footer.css'

function Footer() {
    return (
        <footer>
            <div id='footer-container'>
                <div id='social'>
                    <a href='http://www.facebook.com/baltimorecorps'><i className="fab fa-facebook"></i></a>
                    <a href='https://www.linkedin.com/company/baltimore-corps'><i className="fab fa-linkedin-in"></i></a>
                    <a href='http://twitter.com/BaltimoreCorps'><i className="fab fa-twitter"></i></a>
                    <a href='http://instagram.com/baltimorecorps/'><i className="fab fa-instagram"></i></a>
                    <a href='http://medium.com/baltimore-corps'><i className="fab fa-medium"></i></a>
                    <a href='http://youtube.com/channel/UC2zwpPPmuJQEpmvXbh7YsJA'><i className="fab fa-youtube"></i></a>
                </div>

                <div id='address'>
                    <p className='no-low'><b>BALTIMORE CORPS</b></p>
                    <p className='no-low no-top'>2401 LIBERTY HEIGHTS AVE #2730</p>
                    <p className='no-top'>BALTIMORE, MD 21215</p>
                    <p className='no-low'>(443) 640-8904</p>
                    <p className='no-top'>hello@baltimorecorps.org</p>
                </div>

                <div id='links'>
                    <div><a href='https://www.baltimorecorps.org/contact'>CONTACT US</a></div>
                    <div><a href='https://www.baltimorecorps.org/donate-1'>DONATE</a></div>
                    <div><a href='https://www.baltimorecorps.org/internal'>INTERNAL</a></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer