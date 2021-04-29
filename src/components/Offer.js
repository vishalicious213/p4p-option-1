import '../styles/Offer.css'
import offering1 from '../img/offering-1.jpg'
import offering2 from '../img/offering-2.jpg'
import offering3 from '../img/offering-3.jpg'
import offering4 from '../img/offering-4.jpg'

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
                <Offering img={offering1} title='Diverse Pool of Curated Talent' text='We recruit, screen, and curate skill-matched, mission-driven candidates for you!' />
                <Offering img={offering2} title='A Hiring Partner' text='We commit to working closely with our partners - we’re on your team!' />
                <Offering img={offering3} title='Equity Collaborator' text='Equity and inclusion are at the heart of what we do!' />
                <Offering img={offering4} title='Value of Time' text='Our team runs effective and equitable searches every 90 days!' />
            </div>
        </section>
    )
}

export default Offer