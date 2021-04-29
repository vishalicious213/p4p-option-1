import Slider from 'react-slick'
import offering1 from '../img/offering-1.jpg'
import offering2 from '../img/offering-2.jpg'
import offering3 from '../img/offering-3.jpg'
import offering4 from '../img/offering-4.jpg'

export default function Carousel() {
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 5000,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };

    return (
        <div className='body'>
            <Slider {...settings}>
                <div>
                    <img src={offering1} alt='BCC event' />
                </div>
                <div>
                    <img src={offering2} alt='BCC basket' />
                </div>
                <div>
                    <img src={offering3} alt='BCC event' />
                </div>
                <div>
                    <img src={offering4} alt='BCC basket' />
                </div>
            </Slider>
        </div>
    )
}