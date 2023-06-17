import React from 'react'
import './videofooter.css'

function Videofooter() {
  return (
    <div className='conteiner__footer'>
        <div className='footer_text_video'>
            <h3>Usuário_desconhecido</h3>
            <p>descrição</p>
            <div className="conteiner__img_txt">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6zm-2 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>
                <div className="footer_musicplayer">
                    <p>music player...</p>
                </div>
            </div>
        </div>
        <img 
            className='footer_imgdisc' 
            alt='imagem de um vínil girando' 
            src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z'
        />
    </div>
  )
}

export default Videofooter