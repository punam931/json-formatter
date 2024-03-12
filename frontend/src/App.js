import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
  const [text, setText] = useState('');
  const [storedData, setStoredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios({
      method: "GET",
      url:"/api/showData",
    })
      .then(response => {
        setStoredData(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const storeData = () => {
    axios.post('/api/storeData', { data: text })
      .then(response => {
        console.log('Data stored:', response.data);
        setText('');
        fetchData();
      })
      .catch(error => {
        console.error('Error storing data:', error);
      });
  };

  const clearData = () => {
    setText('');
  };

  return (
    <div className='App'>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        rows="4"
        cols="50"
      />
      <br />
      <button onClick={storeData}>Store</button>
      <button onClick={clearData}>Clear</button>
      <br />
      <h2>Stored Data:</h2>
      <pre>{JSON.stringify(storedData, null, 2)}</pre>
    </div>
  );
}

export default App;