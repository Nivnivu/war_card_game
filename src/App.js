import './App.css';
import Player from './components/Player';
import Computer from './components/Computer';
import {useState} from 'react';
import AskName from './components/AskName';
import Final from './components/Final';

function App() {
  const suits = ["_of_spades", "_of_diamonds", "_of_clubs", "_of_hearts"];
  const values = [
    "ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "jack",
    "queen",
    "king",
];
  // empty array to contain cards
  let deck = [];
  let mixedDeck = [];
  // create a deck of cards
  function createDeck(){
  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
        let card = { Value: values[x], Suit: suits[i], Img: './images/' + values[x] + suits[i] + '.png', Id: x + 1 };
        deck.push(card);
    }
}};
createDeck()

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
  // Player Vars
  const playerPack = shuffle(deck).slice(0,26);
  const [playerPack1, setPlayerPack] = useState(playerPack);
  const [playerName, setPlayerName] = useState('');
  const [totalLost, setTotalLost] = useState(0);
  const [totalWin, setTotalWin] = useState(0);
  const [roundWin, setRoundWin] = useState(0);
 
  let [gamesPlayed, setGamesPlayed] = useState(0);

  //Computer Vars
  // const computerPack = shuffle(deck).slice(26,52)
  const [computerPack, setComputerPack] = useState(shuffle(deck).slice(26,52));
  const [compPack, setCompPack] = useState(computerPack);
  const computerName = 'computer';
  const [ctotalLost, setCtotalLost] = useState(0);
  const [ctotalWin, setcTotalWin] = useState(0);
  const [croundWin, setcRoundWin] = useState(0);
  const [stringCheck, setStringCheck] = useState('');
  const [cardsCounter, setCardsCounter] = useState(0);
  //Game Functions 
  const whoWin = (playerVal, computerVal) => {
    if (playerVal > computerVal){
      setCtotalLost(ctotalLost + 1)
      setTotalWin(totalWin + 1)
    } else if (playerVal == computerVal){
      console.log("equal")
    } 
     else {
      setTotalLost(totalLost + 1)
      setcTotalWin(ctotalWin + 1)
    }
  }
  
  function checkWin() {
    if (cardsCounter == 25){
      if (totalLost < totalWin){
        setStringCheck('Lost');
        setcRoundWin(croundWin + 1);
          
      } else {
        setStringCheck('Won');
        setRoundWin(roundWin + 1);
         
      }
    }
  }


  function Rendering(){
    if (playerName == ''){
      return <div className='conatiner'> <AskName name={playerName} changeName={setName}/>  </div>
    } else if(cardsCounter == 26){
        return <div className='conatiner'> <Final string={stringCheck} roundWin={roundWin} lost={croundWin} setCard={setCard} /></div>
    } else {
      
      return <div className='conatiner'>
      <Computer computerName={computerName} losts={ctotalLost} pack={compPack} wins={ctotalWin} counter={cardsCounter}/>
       <Player playerName={playerName} pack={playerPack1} losts={totalLost} wins={totalWin} counter={cardsCounter} lost={croundWin} won={roundWin} /> 
       <button onClick={() => {
        whoWin(playerPack1[cardsCounter].Id ,compPack[cardsCounter].Id);
        setCardsCounter(cardsCounter + 1);
        checkWin();
        }}>Next</button>
    </div>
    }
  }

  //Start The Game Again
  const setCard = (number) => {
    setCardsCounter(number);
    setTotalWin(number);
    setcTotalWin(number);
    setTotalLost(number);
    setCtotalLost(number);
    setComputerPack(shuffle(deck).slice(0,26));
    setPlayerPack(shuffle(deck).slice(26,52));
  }

  /// Set The Name of The Player
  const setName = (playerName) => {
    setPlayerName(playerName)
  }

  console.log(stringCheck)

  return (
    <div className="App">
    <Rendering />
    </div>
  );
}

export default App;
