import { useState } from 'react';
import './NewsCard.css'

function NewsCard({ card, isLoggedIn, handleCardMark }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMarked, setIsMarked] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsMarked(!isMarked);
    handleCardMark(card);
  }

    return(
        <div className='newsCard'>
            {
              !isLoggedIn ? 
              <div className={`newsCard__signin ${isHovered ? 'newsCards_signin_on' : ''}`}>
                <p className="newsCard__signin_prompt">Sign in to save articles</p>
              </div> : ''
            }
            <button 
              className='newsCard__save-button'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
                <img 
                  src={
                    isMarked ? 'src/assets/bookmark-marked.svg' :
                    (isHovered ? 'src/assets/bookmark-hover.svg' : 'src/assets/bookmark-normal.svg')
                  } 
                  alt='bookmark image' 
                  className={`newsCard__save-button_image ${isHovered ? 'newsCard__save-button_image-hov' : ''}`}
                  onClick={handleClick}
                />
            </button>
            <img src={card.img} className='newsCard__image' alt='card image' />
            <p className='newsCard__date'>{card.date}</p>
            <h2 className="newsCard__title">{card.title}</h2>
            <p className="newsCard__body">{card.body}</p>
            <h3 className="newsCard__site">{card.site}</h3>
        </div>
    )
};

export default NewsCard;