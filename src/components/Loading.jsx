import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../components/Animation - 1716477218127.json'
import '../Main_Pages/style.css'; 

export default function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

return (
  <div className="loading-overlay">
      <div className="loading-animation">
        <Lottie 
          options={defaultOptions}
          height={400}
          width={400}
        />
      </div>
    </div>
);
}

