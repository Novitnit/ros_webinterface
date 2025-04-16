import React,{useEffect,useState} from 'react'
import style from '../css/content/windown.module.css'

const camera =[
    {
        name: "fackCam1",
        src:"https://upload.wikimedia.org/wikipedia/commons/f/fc/EAM_Nuvolari_S1_640x480.jpg"
    },
    {
        name: "fackCam2",
        src:"https://upload.wikimedia.org/wikipedia/commons/b/b3/640x480.jpg"
    },
    {
        name: "fackCvCam",
        src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSErxIH2YHjusnfxSYShk6Cw6f9PAX-REZOTA&s"
    }
]

let windowns=[0,1,2];

export default function Windown() {
    return (
        <div className={style.windown_content}>
            <div className={style.windown} style={{backgroundColor:'white'}}>
                <div className={style.windown_name}><p>{camera[windowns[0]].name}</p></div>
                <img src={camera[windowns[0]].src}/>
            </div>
            <div className={style.windown} style={{backgroundColor:'gray'}}>
                <div className={style.windown_name}><p>{camera[windowns[1]].name}</p></div>
                <img src={camera[windowns[1]].src}/>
            </div>
            <div className={style.windown_sec} style={{backgroundColor:'black'}}>
            <div className={style.windown_name}><p>{camera[windowns[2]].name}</p></div>
            <img src={camera[windowns[2]].src}/>
            </div>
        </div>
    )
}