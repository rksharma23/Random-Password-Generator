import { useState, useEffect } from 'react';
import './App.css';
import MainBox from './Components/MainBox';

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [symbolAllowed, setSymbolAllowed] = useState(false)
  const [password, setPassword] = useState("")
  useEffect(()=>{
    let resource = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"
    let tempPass = "";
    if(numberAllowed){
      resource += "0123456789"
    }
    if(symbolAllowed){
      resource += "`!@#$%^&*()/"
    }
    for(let i = 1; i<= length; i++)
      {
        tempPass += resource.charAt(Math.floor(Math.random()*resource.length+1))
      }
      setPassword(tempPass)
  }, [numberAllowed,symbolAllowed, length])
  return (
    <>
    <MainBox length={length} setLength = {setLength} setNumberAllowed={setNumberAllowed} setSymbolAllowed={setSymbolAllowed} password={password} setPassword={setPassword} />
    
    </>
  );
}

export default App;
