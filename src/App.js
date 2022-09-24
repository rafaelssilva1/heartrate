import React  from "react";
import "./App.css";

import Chart from "./components/chart";
import RecentActivity from "./components/recentactivity";
import ConnectivityScreen from "./components/connectivity-screen";
import Table from "./components/table";

import { useState, useEffect } from "react";
import BackToTop from "./components/backtotop";

function App() {
  const [heartrate, setHeartrate] = useState([]);
  const [filter, setFilter] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:3000/heartrate`)
        .then(response => response.json())
        .then(data => {
          setHeartrate(data.slice(-7));
        })
  },[]);

  const changeFilter = (val) => {
    fetch(`http://localhost:3000/heartrate`)
        .then(response => response.json())
        .then(data => {
          setHeartrate(data.slice(val));
    })
    setFilter(val);
  }

  const [connectivity, setConnectivity] = useState(window.navigator.onLine);
  
  const updateNetwork = () => {
    setConnectivity(window.navigator.onLine);
  };
  
  useEffect(() => {
    window.addEventListener("offline", updateNetwork);
    window.addEventListener("online", updateNetwork);
    return () => {
        window.removeEventListener("offline", updateNetwork);
        window.removeEventListener("online", updateNetwork);
    };
  },[window.navigator.onLine]);

  return (
    <>
      {!connectivity 
      ? <ConnectivityScreen />
      :
      <div className="container">
        <div className="chart__flex">
            <div>
            <p>Heartrate</p>
            <h1>John Doe</h1>
            </div>
            <div>
            <ul className="chart__filter">
                <li><button onClick={(e) => changeFilter(-7)}>1w</button></li>
                <li><button onClick={(e) => changeFilter(-14)}>2w</button></li>
                <li><button onClick={(e) => changeFilter(-30)}>1m</button></li>
                <li><button onClick={(e) => changeFilter(-90)}>3m</button></li>
            </ul>
            </div>
        </div>
        <Chart heartrate={heartrate}/>
        <RecentActivity heartrate={heartrate} filter={filter}/>
        <Table heartrate={heartrate}/>
        <BackToTop />
      </div>
    }
    </>
  );
}

export default App;
