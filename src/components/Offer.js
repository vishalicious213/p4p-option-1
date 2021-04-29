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
                <Offering img={signInImg} title='test' text='body' />
            </div>
        </section>
    )
}

export default Offer