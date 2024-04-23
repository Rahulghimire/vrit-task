import './App.css';
import LeftInfo from './components/LeftInfo';
import UrlShortner from './components/UrlShortner';
function App() {
  return (
    <div className="App m-4">
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <LeftInfo/>
        <UrlShortner/>
      </div>
    </div>
  );
}

export default App;
