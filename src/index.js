import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client'; // Changed import
import ReactDOM from 'react-dom';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  }, []); // Empty array means this effect runs once on component mount

  return (
    <div>
      <h1>Received data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

const rootElement = document.getElementById('root');
createRoot(rootElement).render(<App />);
