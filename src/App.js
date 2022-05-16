import React, {useState} from "react";
import "./styles/App.css";
import AppRouter from "./routes/main/AppRouter";


function App() {
  const [currentSystem, setCurrentSystem] = useState({})

  return (
      <div className="page-wrapper">
        <AppRouter currentApp={currentSystem} changeCurrentApp={setCurrentSystem} />
      </div>
  );
}

export default App;
