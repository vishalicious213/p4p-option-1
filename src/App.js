import './styles/App.css'
import Navbar from './components/Navbar'
import Offer from './components/Offer'
import Carousel from './components/Carousel'
import Process from './components/Process'
import Footer from './components/Footer'
// import signInImg from './img/logo.png'
// import p4p from './img/P4P-animated.gif'
import baltimore from './img/carousel/baltimore.jpg'

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <main>
        <div id='main-text'>
          <div id='sign-in'>
            <h2 id='hero-h1'>PLACE <span id='hero-span'>FOR</span> PURPOSE</h2>
            <p className='hero-text'>is a service that connects talented community members facing challenges finding employment in the social impact sector with organizations that have taken an internal and external commitment to equity and racial justice.</p>
            {/* <img id='sign-in-img' src={signInImg} alt='logo' /> */}
            <p>Create an account or log in to create a Baltimore Corps community profile. Get access to job opportunities and development opportunities in the Baltimore Corps network.</p>
            <button>LOG IN / SIGN UP</button>
          </div>
        </div>
      </main>

      <Process />
      <Carousel />
      <Offer />
      {/* <div id='p4p-container'>
        <img id='p4p-animated' src={p4p} alt='' />
      </div> */}
      <div className='program'>
        <h4>Baltimore Corps</h4>
        <div className='img-box'><a href='https://www.baltimorecorps.org/public-allies'><img className='carousel-img' src={baltimore} alt='' /></a></div>
        <p>Baltimore Corps hosts initiatives that intentionally seek to build socioeconomic equity throughout Baltimore, via social impact careers, leadership training, community engagement, social entrepreneurship, and small business support programs.</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
