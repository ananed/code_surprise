import Message from "./Message";
import React, {useEffect} from 'react';
import './App.css';


function App() {

  useEffect(() => {
    const timer = setTimeout(() =>{
       <Message />
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <p className="first_text">I have a message for you...</p>
        </div>
      </header>
    </div>
  );
}

export default App;
