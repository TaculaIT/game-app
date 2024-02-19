import "./App.css";
import "tailwindcss/tailwind.css";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [filterScary, setFilterScary] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleFilterScary = () => {
    setFilterScary(!filterScary);
  };

  const filteredGameData = filterScary
    ? gameData.filter((game) => !game.isScary)
    : gameData;

  return (
    <div className={`App ${darkMode ? "dark" : "light"}`}>
      <header className={`App-header ${darkMode ? "dark-header" : ""}`}>
        <Topmenu darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Title />
        <Sort toggleFilterScary={toggleFilterScary} filterScary={filterScary} />
        <Search />
        <List gameData={filteredGameData} />
      </header>
    </div>
  );
}

export default App;

function Title() {
  return (
    <div className="">
      <h1 className="text-center">All games</h1>
      <p>
        Lists of games on this site that the CICS Wifi does not block! Enjoy!
        Toggle Switch above switch light mode or dark mode. Switch below filters
        the scary games!
      </p>
    </div>
  );
}

function Topmenu({ darkMode, toggleDarkMode }) {
  return (
    <div className="menubar">
      <div className="topnav">
        <a>Games</a>
        <a>Retro</a>
        <a>Flash</a>
        <div className="topnav-right">
          <a>
            <img src="info.png" alt="info" width={15} height={15}></img>
          </a>
          <label className="switch">
            <input
              type="checkbox"
              onChange={toggleDarkMode}
              checked={darkMode}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
}

function Sort({ toggleFilterScary, filterScary }) {
  return (
    <div className="sortbar">
      <div className="topnav">
        <a>Sort by:</a>
        <a>All</a>
        <a>FNAF</a>
        <a>Moto X3M</a>
        <a>Snail Bob</a>
        <a>Vex</a>
      </div>
      <div className="search-container">
        <input
          className="search-box"
          type="search"
          placeholder="Search for Games(Does not work)"
        ></input>
        <label className="switch">
          <input
            type="checkbox"
            onChange={toggleFilterScary}
            checked={filterScary}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="nav-container">
      <div className="search-container">
        <input
          className="search-box"
          type="search"
          placeholder="Search for Games(Does not work)"
        ></input>
      </div>
    </div>
  );
}

function Game(props) {
  return (
    <div>
      {props.gameObj && (
        <div className="game-tile">
          <img
            className="game-icon"
            src={props.gameObj.photoName}
            alt="Game"
            width={360}
            height={360}
          ></img>
          <div className="game-title">{props.gameObj.title}</div>
        </div>
      )}
      {props.fnafObj && (
        <div className="game-tile">
          <img
            className="game-icon"
            src={props.fnafObj.photoName}
            alt="Game"
            width={360}
            height={360}
          ></img>
          <div className="game-title">{props.fnafObj.title}</div>
        </div>
      )}
    </div>
  );
}

function List({ gameData }) {
  return (
    <div>
      <div className="flex-container">
        {gameData.map((game) => (
          <Game gameObj={game} />
        ))}
      </div>
      <h1 className="text-center">Five Nights At Freddy's Games</h1>
      <div className="flex-container">
        {fnafData.map((fnaf) => (
          <Game fnafObj={fnaf} />
        ))}
      </div>
    </div>
  );
}

const gameData = [
  {
    photoName: "./1v1.png",
    title: "1v1.lol",
    isScary: false,
  },
  {
    photoName: "./baldis-basics.png",
    title: "Baldur's Gate 3",
    isScary: true,
  },
  {
    photoName: "./ducklife.jpg",
    title: "Duck Life",
    isScary: false,
  },
  {
    photoName: "./flappybird.png",
    title: "Flappy Bird",
    isScary: true,
  },
  {
    photoName: "./fruitninja.png",
    title: "Fruit Ninja",
    isScary: false,
  },
  {
    photoName: "./red.png",
    title: "Among us!?",
    isScary: true,
  },
  {
    photoName: "./9007.png",
    title: "9007199254740992",
    isScary: false,
  },
  {
    photoName: "./ages-of-conflict.jpg",
    title: "Age of Conflict",
    isScary: false,
  },
  {
    photoName: "./ball.png",
    title: "Ball Sort Puzzle",
    isScary: false,
  },
  {
    photoName: "./minecraft.png",
    title: "Classic Minecraft",
    isScary: false,
  },
  {
    photoName: "./solitaire.png",
    title: "Solitaire",
    isScary: false,
  },
  {
    photoName: "./temple-run.png",
    title: "Temple Run 2",
    isScary: false,
  },
];
const fnafData = [
  {
    photoName: "./fnaf.png",
    title: "Five Nights At Freddy's",
    isScary: true,
  },
  {
    photoName: "./fnaf-2.jpg",
    title: "Five Nights At Freddy's 2",
    isScary: true,
  },
  {
    photoName: "./fnaf-3.png",
    title: "Five Nights At Freddy's 3",
    isScary: true,
  },
  {
    photoName: "./fnaf-4.png",
    title: "Five Nights At Freddy's 4",
    isScary: true,
  },
  {
    photoName: "./fnaf-sl.jpg",
    title: "Sister Location",
    isScary: true,
  },
  {
    photoName: "./fnaf-ucn.png",
    title: "Ultimate Custom Night",
    isScary: false,
  },
];
