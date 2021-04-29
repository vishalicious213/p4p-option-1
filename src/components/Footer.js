import '../styles/App.css'
import '../styles/Footer.css'

function Footer() {
    return (
        <footer>
            <div id='footer-container'>
                <div id='switch2'>
                    <div id='social'>
                        <a href='http://www.facebook.com/baltimorecorps'><i className="fab fa-facebook"></i></a>
                        <a href='https://www.linkedin.com/company/baltimore-corps'><i className="fab fa-linkedin-in"></i></a>
                        <a href='http://twitter.com/BaltimoreCorps'><i className="fab fa-twitter"></i></a>
                        <a href='http://instagram.com/baltimorecorps/'><i className="fab fa-instagram"></i></a>
                        <a href='http://medium.com/baltimore-corps'><i className="fab fa-medium"></i></a>
                        <a href='http://youtube.com/channel/UC2zwpPPmuJQEpmvXbh7YsJA'><i className="fab fa-youtube"></i></a>
                    </div>
                </div>

                <div id='switch'>
                    <div id='links'>
                        <div><a href='https://www.baltimorecorps.org/contact'>CONTACT US</a></div>
                        <div><a href='https://www.baltimorecorps.org/donate-1'>DONATE</a></div>
                        <div><a href='https://www.baltimorecorps.org/internal'>INTERNAL</a></div>
                        <div><a href='https://app.baltimorecorps.org/static/media/services-terms.7ef9c69b.pdf'>TERMS</a></div>
                        <div><a href='https://www.baltimorecorps.org/privacy-policy'>PRIVACY</a></div>
                    </div>

                    <div id='address'>
                        <p className='no-low name'>BALTIMORE CORPS</p>
                        <p className='no-low no-top'>2401 Liberty Heights Ave #2730</p>
                        <p className='no-top'>Baltimore, MD 21215</p>
                        <p className='no-low no-top'>(443) 640-8904</p>
                        <p className='no-top'>hello@baltimorecorps.org</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer