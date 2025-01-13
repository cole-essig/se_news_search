import './About.css';

function About() {
    return(
        <div className='about'>
          <img className='about__image' src='src\assets\Me.cole.jpeg' alt="image of the author, Name Cole Essig" />
          <div className="about__section">
            <h2 className="about__title">More About Me</h2>
            <p className="about__description">
            I'm Cole Essig, a full-stack developer skilled in HTML, CSS, React, JavaScript, Node.js, Express, and MongoDB. 
            I specialize in building dynamic, responsive web applications and use tools like Mongoose for database management 
            and BEM for scalable CSS architecture. I enjoy creating seamless user experiences and managing both front-end and back-end development
            </p>
            <p className='about__description'>
            At TripleTen, I developed strong time management, Git proficiency, and project management skills. 
            I coordinated with teams, assisted others, and cultivated problem-solving abilities, 
            all while ensuring projects were completed efficiently and on time. I also took pride in assisting others, 
            fostering a collaborative environment, and sharpening my problem-solving skills with a driven and solution-oriented mindset.
            </p>
          </div>
        </div>
    )
};

export default About;