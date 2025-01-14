import './NewsCard.css'

function NewsCard({ card }) {
    return(
        <div className='newsCard'>
            <button className='newsCard__save-button'>
                <img src='src/assets/bookmark.svg' alt='bookmark image' className='newsCard__save-button_image'/>
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