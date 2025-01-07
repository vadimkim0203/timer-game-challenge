import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {

  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="쉬움" targetTime={1}/>
        <TimerChallenge title="쉽지 않음" targetTime={5}/>
        <TimerChallenge title="점점 어려워짐" targetTime={10}/>
        <TimerChallenge title="프로만 가능" targetTime={15}/>


      </div>
    </>
  );
}

export default App;
