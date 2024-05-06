import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import Tracklist from './components/Tracklist';
import Track from './components/Track';
import SaveButton from './components/SaveButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <SearchBar />
      <SearchResults />
      <Playlist />
      <Tracklist />
      <Track />
      <SaveButton />
    </div>
  );
}

export default App;
