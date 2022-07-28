import React , {useState} from 'react'
import './Dark.css'
function Dark() {
    const [myStyle, setMyStyle] = useState(
        {
            color: "black",
            backgroundColor: "white"
        }
    )
    const [btntext, setBtnText] = useState("ENABLE DARK MODE")
    const darkStyle = ()=>{
        if(myStyle.color!=="red"){
            setMyStyle({
                color: "red",
                backgroundColor: "#042743"
            })
            setBtnText("ENABLE LIGHT MODE")
        }
        else{
            setMyStyle({
                    color: "black",
                    backgroundColor: "white"
            })
            setBtnText("ENABLE DARK MODE")
        }
    }

  return (
    <div className='s1' style={myStyle}>
        <div className='inner'>
            THIS IS A DARK MODE FEATURE WHICH YOU CAN USE IN YOUR PROJECTS
        </div>
        <button className='btn' onClick={darkStyle}>{btntext}</button>
        <div className='inner'>
            THIS IS A DARK MODE FEATURE WHICH YOU CAN USE IN YOUR PROJECTS
        </div>
    </div>
  )
}

export default Dark