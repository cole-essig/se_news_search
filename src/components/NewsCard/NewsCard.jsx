import { useState } from 'react';
import './NewsCard.css'

function NewsCard({ card, isLoggedIn, handleCardMark }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMarked, setIsMarked] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      alert('Must be logged in')
      return
    }
    setIsMarked(!isMarked);
    handleCardMark(card);
  }

    return(
        <div className='newscard'>
            {
              !isLoggedIn ? 
              <div className={`newscard__signin ${isHovered ? 'newscards_signin_on' : ''}`}>
                <p className="newscard__signin_prompt">Sign in to save articles</p>
              </div> : ''
            }
            <button 
              className='newscard__save-button'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
                <img 
                  src={
                    isMarked ? 'src/assets/bookmark-marked.svg' :
                    (isHovered ? 'src/assets/bookmark-hover.svg' : 'src/assets/bookmark-static.svg')
                  } 
                  alt='bookmark image' 
                  className={`newscard__save-button_image ${isHovered ? 'newscard__save-button_image-hov' : ''}`}
                  onClick={handleClick}
                />
            </button>
            <img src={card.img} className='newscard__image' alt='card image' />
            <p className='newscard__date'>{card.date}</p>
            <h2 className="newscard__title">{card.title}</h2>
            <p className="newscard__body">{card.body}</p>
            <h3 className="newscard__site">{card.site}</h3>
        </div>
    )
};

export default NewsCard;