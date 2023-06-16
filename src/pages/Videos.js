import React, {useRef, useState} from 'react'
import './videos.css'

function Videos() {
  const videoRef = useRef(null)
  const [play, setPlay] = useState(false)

  function handleStart(){
    if(!play){
      videoRef.current.play()
      setPlay(true)
    }else{
      videoRef.current.pause()
      setPlay(false)
    }
  }
  return (
    <div className="conteiner__videos">
        <video 
          className='__video'
          ref={videoRef}
          onClick={handleStart}
          loop
          src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z'
        >

        </video>
    </div>
  )
}

export default Videos