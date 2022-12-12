import logo from './logo.svg';
import './App.css';
import { useQuery } from 'react-query';


function App() {

  const { data, error, isError, isLoading, isSuccess, isIdle } = useQuery('hello', () => {
    return new Promise(resolve => { setTimeout(resolve, 1000) })
    // return Promise.reject(5)
  })
  console.log({ error, data, isError, isLoading, isSuccess, isIdle })

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
    </div>
  );
}

export default App;
