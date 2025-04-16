import React,{useEffect,useState} from 'react'
import style from '../css/content/bar.module.css'
import {getmotorSpeed} from '../ros/ros'

export default function Bar() {
  const [motorSpeed,setMotorSpeed] = useState([])
  const labelMinWidth_motor_speed = '195px';

  useEffect(() => {
    const unsubscribe = getmotorSpeed(setMotorSpeed)
    return () => unsubscribe()
  },[])

    return (
      <div className={style.bar}>
        <div className='motor_speed'>
          <p className={style.text} style={{display:'flex',justifyContent:'center',marginTop:'0px',marginBottom:'0px'}}><h3 style={{marginTop:'5px',marginBottom:'5px'}}>Motor Speed</h3></p>
          <p className={style.text} style={{marginLeft:'5px',display:'flex'}}> <span style={{minWidth:labelMinWidth_motor_speed}}>Motor Left Chekpoint</span> <span>: {motorSpeed[0]} rpm</span> </p>
          <p className={style.text} style={{marginLeft:'5px',display:'flex'}}> <span style={{minWidth:labelMinWidth_motor_speed}}>Motor Right Chekpoint</span> <span>: {motorSpeed[1]} rpm</span> </p>
        </div>
      
      
      </div>
    )
}