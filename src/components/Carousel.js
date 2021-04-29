import Slider from 'react-slick'
import baltimore from '../img/carousel/baltimore.jpg'
import fellowship from '../img/carousel/fellowship.jpg'
import mayoral from '../img/carousel/mayoral.jpg'
import purpose from '../img/carousel/purpose.jpg'
// import offering1 from '../img/offering-1.jpg'
// import offering2 from '../img/offering-2.jpg'
// import offering3 from '../img/offering-3.jpg'
// import offering4 from '../img/offering-4.jpg'
import '../styles/App.css'
import '../styles/Carousel.css'

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
                {/* <div>
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
                </div> */}
                <div className='program'>
                  <h4>Baltimore Corps</h4>
                  <img className='carousel-img' src={baltimore} alt='' />
                  <p>Baltimore Corps hosts initiatives that intentionally seek to build socioeconomic equity throughout Baltimore, via social impact careers, leadership training, community engagement, social entrepreneurship, and small business support programs.</p>
                </div>
                <div className='program'>
                  <h4>Baltimore Corps Fellowship</h4>
                  <img className='carousel-img' src={fellowship} alt='' />
                  <p>A year-long program where a cohort of beginning, and mid-career, professionals are placed in community-serving organizations across the city. Fellows participate in race & equity training facilitated by Baltimore Corps simultaneously with their full-time employment at our partner organizations.</p>
                </div>
                <div className='program'>
                  <h4>Mayoral Fellowship</h4>
                  <img className='carousel-img' src={mayoral} alt='' />
                  <p>Local community members with an interest, or experience in,policy and city government participate in summer-long internships, where each Mayoral Fellow is placed at various city agencies to learn the functions of city government, and support city programs.</p>
                </div>
                <div className='program'>
                  <h4>Place for Purpose</h4>
                  <img className='carousel-img' src={purpose} alt='' />
                  <p>A service that connects talented community members facing challenges finding employment in the social impact sector with organizations that have taken an internal and external commitment to equity and racial justice.</p>
                </div>
            </Slider>
        </div>
    )
}