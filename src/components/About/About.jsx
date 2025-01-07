import './About.css';

function About() {
    return(
        <div className='about'>
          <img className='about__image' />
          <div className="about__section">
            <h2 className="about__title">About the author</h2>
            <p className="about__description">A few paragraphs about me</p>
          </div>
        </div>
    )
};

export default About;