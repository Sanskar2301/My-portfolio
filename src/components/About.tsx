import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate full-stack developer with expertise in building 
              responsive and user-friendly web applications. With a background in 
              computer science (Artificial Intelligence and Machine Learning), I enjoy solving complex problems and creating elegant solutions.
            </p>
            <p>
              My journey in web development started during college and has evolved 
              into a career where I continuously learn and adopt new technologies. 
              I believe in writing clean, maintainable code and creating applications 
              that provide exceptional user experiences.
            </p>
            <div className="personal-info">
              <div className="info-item">
                <span className="info-label">Name:</span>
                <span className="info-value">Sanskar Singh</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">Sanskar2301@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location:</span>
                <span className="info-value">Delhi-NCR</span>
              </div>
              <div className="info-item">
                <span className="info-label">phone No.:</span>
                <span className="info-value">8299464460</span>
              </div>
              <div className="info-item">
                <span className="info-label">Resume:</span>
                <a className="info-value resume-link" href="https://drive.google.com/file/d/1y9E23sT43ojgVhSRBF6yAKNX0O1EuaNV/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">View Resume</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 