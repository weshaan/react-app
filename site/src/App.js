import './App.css';
import pro from './images/img.png';
import arr from './images/arrow.svg';
import ccl from './images/loop.svg';
import one from './images/1.svg';
import two from './images/2.svg';
import three from './images/3.svg';
import four from './images/4.svg';


function App() {
  return (
    <>
      <div className="bg">
        <div className="hero">
          <div className="left">
          <img src={arr} className="arrow" alt="epic arrow" />
          <img src={ccl} className='loop' alt="epic loop" />
            <h1>Finding a reliable freelancer is really hard. Hiring a full-time designer is too expensive.</h1>
            <h1 className='colored'>Limitless makes email easy.</h1>
            <p>Our high-quality email design service is stress-free and affordable. We give you access to world-class design, unlimited projects, and limitless revisions for one flat monthly fee.</p>
            <button>How it works</button>
          </div>
          <div className="right">
            <img src={pro} alt="epic promotional image" />
          </div>
        </div>
        <div className="box-two">
          <p className="colored he">LIMITLESS SUBSCRIPTION BENEFITS</p>
          <h1 className="head-two">Unlimited creativity. Unbelievable price. Unbeatable turnaround.</h1>
          <button className="btn2">Choose your plan</button>
          <div className="cards">
          <div className="item">
            <img src={one} className="icon" alt="one"/>
            <h2>Unlimited email designs.
            Yes, really unlimited.</h2>
            <p>Keep the requests coming. There are never any limits to how many you can submit.</p>
          </div>
          <div className="item">
            <img src={two} className="icon" alt="two"/>
            <h2>One affordable low monthly price</h2>
            <p>Say goodbye to unexpected costs and hello to unlimited, budget-friendly email template design.</p>
          </div>
          <div className="item">
            <img src={three} className="icon" alt="three"/>
            <h2>World-class design and development</h2>
            <p>We have 15+ years of top-tier email template design and development delivery under our belts.</p>
          </div>
          <div className="item">
            <img src={four} className="icon" alt="four"/>
            <h2>Astonishingly fast turnaround</h2>
            <p>Get your high-quality email design templates within 3-4 business days in most cases.</p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
