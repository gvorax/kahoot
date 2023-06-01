import React from 'react'
import { useParams } from 'react-router-dom';
import Image from '../../assets/mars-logo.png';
import './HostWaiting.css';

const HostWaiting = () => {
  let {number} = useParams();
  return (
    <div className='main_bg' style={{position:"relative"}}>
      <div className='blur blur_add'>
        <div className='gamePin'>
          <h2>Game pin:</h2>
          <p>{number}</p>
        </div>
        <div className="img_center">
          <img src={Image} alt="Logo" />
        </div>
        <div className='waitingPlayers'>
          <div>
            <h1>Waiting for players...</h1>
          </div>
        </div>
        <div className="start_btn">
          <button>Start</button>
        </div>
      </div>
    </div>
  )
}

export default HostWaiting;