import logo from './logo.svg';
import './App.css';

function App() {
  const claseObjeto = {
    primary: "text-primary",
    danger: "text-danger"
  }

  const user = false;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
          {
            user ? <p className={claseObjeto.primary}>Online 👌</p> : <p className={claseObjeto.danger}>offline 😢</p>
          }
          
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
