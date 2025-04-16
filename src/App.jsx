import React,{useEffect,useState} from 'react';
import {onConnect} from './ros/ros';
import Bar from "./content/bar";
import Windown from './content/windown';

function App() {
  const [isConnected, setIsConnected] = useState(false);;
  useEffect(()=>{
      onConnect(setIsConnected)
    })

  return (
    <div className="content">
      <div style={{margin:"10px",fontSize:"30px"}}>{isConnected ? "🟢" : "🔴"}</div>
      <Windown/>
      <Bar/>
    </div>
  );
}

export default App;
