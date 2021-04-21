import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage(
        "'Here's to the crazy ones, the misfits, the rebels, the troublemakers, the round pegs in the square holes"
      );
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage(
        "... the ones who see things differently -- they're not fond of rules, and they have no respect for the status."
      );
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage(
        "You can quote them, disagree with them, glorify or vilify them, but the only thing you can't do is ignore them because they change things."
      );
    }, 16000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage(
        "They push the human race forward, and while some may see them as the crazy ones, we see genius,"
      );
    }, 22000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage(
        "because the people who are crazy enough to think that they can change the world, are the ones who do.'"
      );
    }, 28000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("What are you going to change today?");
    }, 35000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("Thank you for follow me.♥");
    }, 40000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <div className="redes">
        <p className="profile">@ananedelcu_</p>
      </div>
      <div className="texto">{message}</div>
    </div>
  );
}

export default App;
