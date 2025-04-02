import '../styles/Certificates.css';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title:"Infosys java certification completion",
      issuer: 'Infosys'
    },
    {
      id: 2,
      title:"Infosys Ethical Hacking certification",
      issuer: 'Infosys'
    },
    {
      id: 3,
      title:"Deep Learning Application for Smart Cities",
      issuer: 'NIT RourKela'
    },
    {
      id: 4,
      title:" Madras Python Certificate",
      issuer: 'Guvi'
    }
  ];

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <h2 className="section-title">Certificates</h2>
        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div className="certificate-card" key={cert.id}>
              <div className="certificate-content">
                <h3 className="certificate-title">{cert.title}</h3>
                <span className="issuer">{cert.issuer}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates; 