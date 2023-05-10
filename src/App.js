import logo from './devil-logo.png';
import title from './devilfinance.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={title} className="devil-title" alt="title" />
        <p> Hey👋  DEVIL guys, We've changed our DOMAIN to: </p>
        <p>👉 <a
            className="App-link"
            href="https://devil.finance"
          >
            Devil.finance
          </a></p>
      </header>
    </div>
  );
}

export default App;
