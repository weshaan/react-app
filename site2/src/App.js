
import './App.css';
import lol from './bro.png';
import one from './face.svg'; 
import two from './twitter.svg'; 
import thr from './linkedin.svg'; 
import four from './insta.svg'; 

function App() {
  return (
    <>
      <nav>
        <div className="logo">Eshaan Walia</div>
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">SERVICE</a></li>
          <li><a href="#">WORK</a></li>
          <li><a href="#">RESUME</a></li>
          <li><a href="#">BLOG</a></li> 
          <li><a href="#">CONTACT</a></li>
        </ul>
      </nav>
      <div className="hero">
      <div className="left">
        <h2>WELCOME!</h2>
      <div className="typeanimate">
        <div className="static">I'm a </div>
        <ul className="dynamic">
          <li><span>Devoloper</span></li>
          <li><span>Soul</span></li>
          <li><span>Part and Parcel</span></li>
          <li><span>Of Krishna</span></li>
          <li><span>Eternally</span></li>
        </ul>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet asperiores modi voluptates laborum expedita dignissimos officia, ad saepe praesentium provident.
      </p>
      <div className="container">
      <button className="btn"><img src={one} alt="b1" className="wow"/></button>
      <button className="btn"><img src={two} alt="b2" className="wow"/></button>
      <button className="btn"><img src={thr} alt="b3" className="wow"/></button>
      <button className="btn"><img src={four} alt="b4" className="wow"/></button>
      </div>
      </div>
      <div className="right">
        <div className="cicle-one">
          
          <div className="circle-two">
            <img src={lol} className="lol" alt="epic person" />
          </div>
        </div>
      </div>
      </div>
      <div className="service">
        <h2>OUR SERVICES</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat asperiores ad ratione officia, voluptatum eveniet! Aut, neque.</p>
        <div className="line"></div>
        <div className="service-box">
          <button className="box">
            <img src={four} alt="epic img" className="ow" />
            <h3>SERVICE-NAME</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti earum tenetur minima.</p>
          </button>
          <button className="box">
            <img src={four} alt="epic img" className="ow" />
            <h3>SERVICE-NAME</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti earum tenetur minima.</p>
          </button>
          <button className="box">
            <img src={four} alt="epic img" className="ow" />
            <h3>SERVICE-NAME</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti earum tenetur minima.</p>
          </button>
          <button className="box">
            <img src={four} alt="epic img" className="ow" />
            <h3>SERVICE-NAME</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti earum tenetur minima.</p>
          </button>
          <button className="box">
            <img src={four} alt="epic img" className="ow" />
            <h3>SERVICE-NAME</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti earum tenetur minima.</p>
          </button>
          <button className="box">
            <img src={four} alt="epic img" className="ow" />
            <h3>SERVICE-NAME</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti earum tenetur minima.</p>
          </button>
          
        </div>
      </div>
      <footer>
      </footer>
    </>
  );
}

export default App;
