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
        <div className='newsCardS'>
            <div className={`newsCardS__delete ${isHovered ? 'newsCardS_delete_on' : ''}`}>
              <p className="newsCardS__delete_prompt">Remove from saved</p>
            </div>
            <button 
              className='newsCardS__save-button'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
                <img 
                  src={
                    isHovered ? 'src/assets/trashBin-dark.svg' : 'src/assets/trashBin.svg'
                  } 
                  alt='bookmark image' 
                  className={`newsCardS__save-button_image ${isHovered ? 'newsCardS__save-button_image-hov' : ''}`}
                  onClick={handleDeleteClick}
                />
            </button>
            <div className="newsCardS__keyword_div">
                <p className="newsCardS__keyword">{nature}</p>
            </div>
            <img src={card.img} className='newsCardS__image' alt='card image' />
            <p className='newsCardS__date'>{card.date}</p>
            <h2 className="newsCardS__title">{card.title}</h2>
            <p className="newsCardS__body">{card.body}</p>
            <h3 className="newsCardS__site">{card.site}</h3>
        </div>
    )
};

export default NewsCardSaved;