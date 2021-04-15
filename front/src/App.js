import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState(0);

  useEffect(() => {
    fetch('/api/current/')
    .then(result => result.json())
    .then(response => {
      setData(response.result);
    });
  }, []);

  const handleClick = () => {
    fetch('/api/')
    .then(result => result.json())
    .then(response => {
      setData(response.result);
    });
    
  }
  return (
    <div className="App">
      <h1>Kubernetes Test</h1>
      <div className="Wrapper">
        <div className="Button" onClick={handleClick} >Click</div>
        <h3>Hello from API {data}</h3>
      </div>
    </div>
  );
}

export default App;
