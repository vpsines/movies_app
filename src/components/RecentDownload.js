import { Box, LinearProgress } from "@mui/material"
import React, { useRef, useState } from "react"
import '../App.css'
import './RecentDownload.css'
import PlayCircleTwoToneIcon from '@mui/icons-material/PlayCircleTwoTone';

const url = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'

function RecentDownload(props){
    const {isExtended} = props

    const videoRef = useRef(null)
    const [progressValue,setProgressValue] = useState(0)
    const [currentTimer,setCurrentTimer] = useState('00:00')
    const [duration,setDuration] = useState('00:00')
    const [playing,setPlaying] = useState(false)

    function onVideoPress(){
        if(videoRef.current.paused){
            videoRef.current.play()
            setPlaying(true)
            progressLoop()
        }else{
            videoRef.current.pause()
            setPlaying(false)
        }
    }

    function progressLoop() {
        calculateDuration()
        setInterval(function () {
            if(videoRef.current){
          const progress = Math.round((videoRef.current.currentTime / videoRef.current.duration) * 100);
          
            let currentTime = ''
          const seconds = Math.round(videoRef.current.currentTime % 60)
          const minutes = Math.round(videoRef.current.currentTime / 60)
          if(minutes >9){
            currentTime = currentTime.concat(minutes)
          } else{
            currentTime = currentTime.concat(`0${minutes}`)
          }
          if(seconds >9){
            currentTime = currentTime.concat(`:${seconds}`)
          } else{
            currentTime = currentTime.concat(`:0${seconds}`)
          }
          setCurrentTimer(currentTime)

          setProgressValue(progress)
        }
        });
      }

    function calculateDuration(){
        if(videoRef.current){
            let duration = ''
          const seconds = Math.round(videoRef.current.duration % 60)
          const minutes = Math.round(videoRef.current.duration / 60)
          if(minutes >9){
            duration = duration.concat(minutes)
          } else{
            duration = duration.concat(`0${minutes}`)
          }
          if(seconds >9){
            duration = duration.concat(`:${seconds}`)
          } else{
            duration = duration.concat(`:0${seconds}`)
          }
          setDuration(duration)
          }
    }

    return <div>
        <div className="sub-heading">
            <h3>Recent Downloaded</h3>
            <h5>See all</h5>
        </div>
        <div className="movie-card">
            {/* <img src='https://assets.rocketstock.com/uploads/2016/03/Ant-Man-Title-Example.jpg' alt='preview'/> */}
            <video className="video-player" ref={videoRef} onClick={()=>onVideoPress()} src={url}></video>
            <div className="body-content">
                {!playing ?<PlayCircleTwoToneIcon sx={{color:'white',fontSize:'30px'}}/>:null}
                <h3>Ant Man</h3>
                <h5>2020</h5>
                <div className="player">
                    <span>{currentTimer}</span>
                    <LinearProgress variant="determinate" value={progressValue} style={{flex:'1',margin:'0 0.5vw'}}/>
                    <span>{duration}</span>
                </div>
            </div>
        </div>
    </div>
}

export default RecentDownload