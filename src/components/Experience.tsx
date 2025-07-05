import '../styles/Experience.css';

const experiences = [
  {
    id: 1,
    role: 'Python Developer Intern',
    company: 'Infotact Solutions Pvt. Ltd.',
    duration: 'may 2025 - August 2025',
    description: 'Worked on backend development using Django, built REST APIs, and collaborated with the frontend team to deliver scalable web applications.',
    url: 'https://infotact.com/'
  },
  {
    id: 2,
    role: 'Software Development Engineer(intern)',
    company: 'Bluestock Finetech',
    duration: 'June 2025 - aug 2025',
    description: 'Created a Full Stack IPO Web Application using Django,react ,rest api,postgresql',
    url: '' // No URL provided
  },
  {
    id: 3,
    role: 'freelancer',
    company: 'Chunarfarms',
    duration: ' april 2025-may 2025',
    description: 'developed a website for a startup company',
    url: 'https://chunarfarms.in/'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-grid">
          {experiences.map((exp) => (
            <div className="experience-card" key={exp.id}>
              <h3 className="experience-role">{exp.role}</h3>
              <div className="experience-meta">
                <span className="company">{exp.company}</span>
                <span className="duration">{exp.duration}</span>
              </div>
              <p className="experience-description">{exp.description}</p>
              {exp.url && (
                <a 
                  href={exp.url} 
                  className="experience-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Work
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    style={{ marginLeft: '6px' }}
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 