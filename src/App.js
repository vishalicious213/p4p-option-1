import './styles/App.css'
import Offer from './components/Offer'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import signInImg from './img/logo.png'
import p4p from './img/P4P-animated.gif'

function App() {
  return (
    <div className="App">
      <main>
        <div id='main-text'>
          <h2 id='hero-h1'>PLACE <span id='hero-span'>FOR</span> PURPOSE</h2>
          <p className='hero-text'>is a service that connects talented community members facing challenges finding employment in the social impact sector with organizations that have taken an internal and external commitment to equity and racial justice.</p>
        </div>

        <div id='sign-in'>
          <img id='sign-in-img' src={signInImg} alt='logo' />
          <p>Create an account or log in to create a Baltimore Corps community profile. Get access to job opportunities and development opportunities in the Baltimore Corps network.</p>
          <button>LOG IN / SIGN UP</button>
        </div>
      </main>

      <Carousel />
      <Offer />
      <div id='p4p-container'>
        <img id='p4p-animated' src={p4p} alt='' />
      </div>
      <Footer />
    </div>
  );
}

export default App;
