import React, { useCallback, useEffect, useRef } from 'react'
import style from './MainBox.module.css'

function MainBox({length, setLength, setNumberAllowed, setSymbolAllowed, password, setPassword}) {

    const textRef = useRef(null);

    const copyToClipboard = useCallback(()=>{
        textRef.current?.select()
        window.navigator.clipboard.writeText(password).then(alert('Text Copied to Clipboard'))
    }, [password])
    
  return (
    <div className={style.mainbox}>
        <h1>Password Generator</h1>
        <div className={style.display}>
            <input type="text" placeholder='Password' readOnly value={password}></input>
            <button onClick={copyToClipboard}>Copy</button>
        </div>

        <div className={style.custumizations}>
            <input type="range" min={6} max={100} onChange={(e)=>setLength(e.target.value)} value={length} /><label>Length: {length}</label>
            <input type="checkbox" onClick={() => setNumberAllowed(prev => !prev)}/><label>Number</label>
            <input type="checkbox" onClick={() => setSymbolAllowed(prev => !prev)}/><label>Symbol</label>
        </div>
    </div>
  )
}

export default MainBox