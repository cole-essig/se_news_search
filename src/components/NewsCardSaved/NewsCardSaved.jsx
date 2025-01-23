import { useState } from 'react';
import './NewsCardSaved.css'

function NewsCardSaved({ card, handleCardDelete }) {
  const [isHovered, setIsHovered] = useState(false);
  const nature = 'Nature';

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleDeleteClick = (e) => {
    e.preventDefault();
    handleCardDelete(card._id);
  }

    return(
        <div className='newscards'>
            <div className={`newscards__delete ${isHovered ? 'newscards_delete_on' : ''}`}>
              <p className="newscards__delete_prompt">Remove from saved</p>
            </div>
            <button 
              className='newscards__save-button'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
                <img 
                  src={
                    isHovered ? 'src/assets/trashBin-dark.svg' : 'src/assets/trashBin.svg'
                  } 
                  alt='bookmark image' 
                  className={`newscards__save-button_image ${isHovered ? 'newscards__save-button_image-hov' : ''}`}
                  onClick={handleDeleteClick}
                />
            </button>
            <div className="newscards__keyword_div">
                <p className="newscards__keyword">{nature}</p>
            </div>
            <img src={card.img} className='newscards__image' alt='card image' />
            <p className='newscards__date'>{card.date}</p>
            <h2 className="newscards__title">{card.title}</h2>
            <p className="newscards__body">{card.body}</p>
            <h3 className="newscards__site">{card.site}</h3>
        </div>
    )
};

export default NewsCardSaved;