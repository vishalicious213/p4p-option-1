import '../styles/Offer.css'
import signInImg from '../img/logo.png'

const Offering = (props) => {
    return (
        <div>
            <img src={props.img} alt={props.alt} />
            <h4>{props.title}</h4>
            <p>{props.text}</p>
        </div>
    )
}

function Offer() {
    return (
        <section id='offer'>
            <h3>WHAT WE OFFER...</h3>
            <div id='offerings'>
                <Offering img={signInImg} title='Diverse Pool of Curated Talent' text='We recruit, screen, and curate skill-matched, mission-driven candidates for you!' />
                <Offering img={signInImg} title='A Hiring Partner' text='We commit to working closely with our partners - we’re on your team!' />
                <Offering img={signInImg} title='Equity Collaborator' text='Equity and inclusion are at the heart of what we do!' />
                <Offering img={signInImg} title='Value of Time' text='Our team runs effective and equitable searches every 90 days!' />
            </div>
        </section>
    )
}

export default Offer