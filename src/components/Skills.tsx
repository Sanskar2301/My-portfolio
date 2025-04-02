import '../styles/Skills.css';

const Skills = () => {
  const skills = [
    "HTML5", "CSS3", "JavaScript",  "React", "python", 
    "Django",  "Git/GitHub",
    "REST API","Networking","SQl","Operating-System","C","OOPS","C++"
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 