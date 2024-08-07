
import './App.css';
import lol from './bro.png';
import one from './face.svg'; 
import two from './twitter.svg'; 
import thr from './linkedin.svg'; 
import four from './insta.svg'; 
import arr from './arrow.svg';
import React, {useState} from 'react';


function App() {

  const [color, setColor] = useState('#f3b214');
  const changeColor = (newColor) => {
    setColor(newColor);
  };
  const openNewPage = () => {
    window.open('https://www.youtube.com/watch?v=iRLnLs0EuAo&list=PL-vLTRIxx-Su-dXIvbXPb8l-qnofCYiEN', '_blank');
  };
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu=()=>{
    setMenuOpen(!menuOpen);
  };

  const [isScaled, setIsScaled] = useState(false);
  
  const handleImageClick=()=>{
    setIsScaled(!isScaled);
  };

  // const [content, setContent] = useState('');

  // useEffect(() => {
  //   fetch('https://cdn.jsdelivr.net/gh/weshaan/weshaan@main/README.md')
  //     .then(response => response.text())
  //     .then(text => {
  //       setContent(marked(text));
  //     });
  // }, []);
  
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (index) => {
    const newBoard = [...board];
    if (calculateWinner(board) || newBoard[index]) {
      return;
    }
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (index) => {
    let className = "square";
    if (board[index] === 'X') {
      className += " x";
    } else if (board[index] === 'O') {
      className += " o";
    }

    return (
      <button className={className} onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };

  const winner = calculateWinner(board);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (board.every((square) => square !== null)) {
    status = 'Draw!';
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  const handleRestart = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  // useEffect(() => {
  //   const gistId = 'weshaan/3a2adbe1eff7668f8e5f2b6aaf18495f';

  //   const script = document.createElement('script');
  //   script.src = `https://gist.github.com/${gistId}.js`;
  //   script.async = true;

  //   document.getElementById('gist-container').appendChild(script);

  //   return () => {
  //     // Cleanup: remove the script when component unmounts
  //     document.getElementById('gist-container').removeChild(script);
  //   };
  // }, []);

  return (
    <>
      <nav>
        <div className="logo" >Eshaan Walia</div>
        <div className="menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen?'open':''}>
          <li><a href="#hero">HOME</a></li>
          <li><a href="#service">SERVICE</a></li>
          <li><a href="#third">PROJECTS</a></li>
          <li><a href="#four">WORK</a></li>
          <li><a href="#">RESUME</a></li>
          <li><a href="https://weshaan.hashnode.dev/" target='_blank'>BLOG</a></li> 
          <li><a href="#">CONTACT</a></li>
        </ul>
      </nav>
      <div className={`scalable-image ${isScaled ? 'fit-hero' : 'hero'}`} id="hero">
      <div className="left">
        <h2>WELCOME!</h2>
      <div className="typeanimate">
        <div className="static">I'm a </div>
        <ul className="dynamic">
          <li><span>Eternal</span></li>
          <li><span>Unborn</span></li>
          <li><span>Primevial</span></li>
          <li><span>Part n Parcel</span></li>
          <li><span>Of Krishna</span></li>
        </ul>
      </div>
      <p className=''>
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
          
          <div className={`scalable-image ${isScaled ? 'spage' : 'circle-two'}`}>
            <div className="game-box">
            <div className="game">
      <div className="game-board">
        <div className="board-row">
          {renderSquare(0)} 
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <div className="game-info">{status}</div>
      {(winner || status === 'Draw!') && (
        <button className="retry-button" onClick={handleRestart}>
          Replay
        </button>
      )}
    </div>
            </div>
            <img src={lol} className="lol" alt="epic person" onClick={handleImageClick}/>
            <div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="service" id="service">
        <h2>MY SERVICES</h2>
        <p className='headpara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat asperiores ad ratione officia, voluptatum eveniet! Aut, neque.</p>
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
      <div className="third" id="third">
        <h2>PROJECTS</h2>
        <div className="bar">
          <ul>
            <li><button onClick={() => changeColor('#f3b214')}>TYPE 1</button></li>
            <li><button onClick={() => changeColor('#A1DD70')}>TYPE 2</button></li>
            <li><button onClick={() => changeColor('lightblue')}>TYPE 3</button></li>
            <li><button onClick={() => changeColor('pink')}>TYPE 4</button></li>
          </ul>
        </div>
      <div className="container3">
        <div className="third-box box1" style={{ backgroundColor: color}}>
          box1
          <div className="overlay">
            <h2>PROJECT NAME</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            <button onClick={openNewPage}><img src={arr} className="over-btn"alt="wow" /></button></div>
        </div>
        <div className="third-box box2" style={{ backgroundColor: color }}>
          box2
          <div className="overlay">
            <h2>PROJECT NAME</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            <button onClick={openNewPage}><img src={arr} className="over-btn"alt="wow" /></button>
            </div>
        </div>
        <div className="third-box box3" style={{ backgroundColor: color }}>
          box3
          <div className="overlay"><h2>PROJECT NAME</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            <button onClick={openNewPage}><img src={arr} className="over-btn"alt="wow" /></button></div>
        </div>
        <div className="third-box box4" style={{ backgroundColor: color }}>
          box4
          <div className="overlay"><h2>PROJECT NAME</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            <button onClick={openNewPage}><img src={arr} className="over-btn"alt="wow" /></button></div>
        </div>
        <div className="third-box box5" style={{ backgroundColor: color }}>
          box5
          <div className="overlay"><h2>PROJECT NAME</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            <button onClick={openNewPage}><img src={arr} className="over-btn"alt="wow" /></button></div>
        </div>
        <div className="third-box box6" style={{ backgroundColor: color }}>
          box6
          <div className="overlay"><h2>PROJECT NAME</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            <button onClick={openNewPage}><img src={arr} className="over-btn"alt="wow" /></button></div>
        </div>
      </div>
      </div>

      <div className="four" id="four">
        <h2>WORK</h2>
      <div className="timeline">
        <div className="line-one"></div>
        <img src={arr} className="logooo g-one"alt="wow" />
        <img src={arr} className="logooo g-two"alt="wow" />
        <img src={arr} className="logooo g-three"alt="wow" />
        <img src={arr} className="logooo g-four"alt="wow" />
        <img src={arr} className="logooo g-five"alt="wow" />
        <img src={arr} className="logooo g-six"alt="wow" />
        <div className="line-two"></div>
        
        <div className="timeline-box">
          <h2>EVENT NAME</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
          </p>
        </div>
        <div className="timeline-box">
          <h2>EVENT NAME</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
          </p>
        </div>
        <div className="timeline-box">
          <h2>EVENT NAME</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
          </p>
        </div>
        <div className="timeline-box">
          <h2>EVENT NAME</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
          </p>
        </div>
        <div className="timeline-box">
          <h2>EVENT NAME</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
          </p>
        </div>
        <div className="timeline-box">
          <h2>EVENT NAME</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
          </p>
        </div>
      </div>
      </div>
      <footer>
        <h2>THANK YOU!</h2>
      </footer>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App;
