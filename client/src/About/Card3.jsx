import React from 'react';
import './about.css'
function Card3(props){
    return(
        <>

        <div className='cardsres'>
            <div className='card'>
                <img src={props.img} alt='mypic' className='card_img'/>
                <div className="card_info">
                    <span className='card_category'>{props.tit}</span>
                    <h3 className='card_title'>{props.txt}</h3>
                </div>
            </div>
        </div>

        </>

    )
}

export default Card3;