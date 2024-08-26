import React from 'react';
import ReactDOM from 'react-dom/client'; // Замініть на 'react-dom/client'

function App() {
  return (
    <div>
      <h1>Welcome to My App!</h1>
      <p>Created by: Sofiia Fedorkiv</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
