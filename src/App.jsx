import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
// import ReactDOM from 'react-dom';
import SignIn from './components/SignIn.jsx';

const App = () => {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch('http://localhost:8080/')
  //     .then(response => response.json())
  //     .then(data => setData(data))
  //     .catch(error => console.error('Error:', error));
  // }, []);

  return (
    <div>
      <h1>Received data:</h1>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <SignIn hello="私" />
    </div>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
} else {
  console.error("No root element found");
}
