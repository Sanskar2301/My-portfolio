import myImage from '../assets/about-img.jpg'; // Import the image
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Hello, I'm <span className="highlight">Sanskar Singh</span></h1>
          <h2>Python Developer</h2>
          <p>Building creative web solutions with modern technologies</p>
          
        </div>
        <div className="hero-image">
          <img src={myImage} alt="Profile" className="profile-image" />
          <div className="profile-placeholder"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 