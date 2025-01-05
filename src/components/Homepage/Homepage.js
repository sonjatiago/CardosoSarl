import React from 'react';
import { Link } from 'react-router-dom';
import Video from '../../assets/video.mp4';
import pg1 from '../../assets/pg1.png';
import pg2 from '../../assets/pg2.png';
import pg3 from '../../assets/pg3.png';
import pg4 from '../../assets/pg4.png';
import pg5 from '../../assets/pg5.png';
import pg6 from '../../assets/pg6.png';
import './Homepage.css';
import { Mail } from 'lucide-react';  // Add this import at the top with your other imports

const projects = [
  {
    id: 1,
    image: pg1,
    title: "Création d'un lac et d'un escalier avec chemin",
    // path: "/projects/amenagement-paysager"
  },
  {
    id: 2,
    image: pg2,
    title: "Création des palissades avec des panneaux Boston PREMIUM Light Grey et décor HERA horizontal.",
    //path: "/projects/espaces-verts"
  },
  {
    id: 3,
    image: pg3,
    title: "Rénovation et agrandissement de terrasse avec une forme de pose choisi par les clients.",
    //path: "/projects/jardin-moderne"
  },
  {
    id: 4,
    image: pg4,
    title: "Création d'une terrasse en pavés nuancés.",
    //path: "/projects/systemes-irrigation"
  },
  {
    id: 5,
    image: pg5,
    title: "Installation de gazon synthétique.",
    //path: "/projects/terrasse"
  },
  {
    id: 6,
    image: pg6,
    title: "Pose d'une pallissade Boston PREMIUM Drak Grey",
    //path: "/projects/espaces-detente"
  }
];

const services = [
  {
    id: 1,
    title: "Architecture paysagère",
    description: "Nous transformons votre jardin de rêve en une merveilleuse réalité"
  },
  {
    id: 2,
    title: "Construction",
    description: "Vous rêvez, nous construisons."
  },
  {
    id: 3,
    title: "Maintenance",
    description: "La perfection ne se atteint pas qu'une seule fois, c'est un processus à maintenir tout au long de l'année."
  }
];

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
<section id="home" className="hero-section">
  <video
    src={Video}
    className="hero-video"
    autoPlay
    loop
    muted
    playsInline
  />
  <div className="hero-overlay"></div>
  <div className="hero-content">
    <p className="hero-text">Transformer les espaces, cultiver les rêves.</p>
    <div className="scroll-indicator">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <polyline points="19 12 12 19 5 12"></polyline>
      </svg>
    </div>
  </div>
</section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="projects-card">
          <h2>Mes Projects</h2>
        </div>
        <div className="projects-list">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={project.path}
              className="project-card"
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <div className="project-description">
                {project.title}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="services-card">
          <h2>Mes Prestations</h2>
        </div>
        <div className="services-list">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p className="service-description">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Contact Section */}
<section id="contact" className="contact-section">
  <div className="contact-card">
    <h2>Contactez-nous</h2>
  </div>
  <div className="contact-container">
    <div className="contact-info">
      <div className="info-item">
        <svg className="info-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
        </svg>
        <p>+41 76 439 57 80</p>
      </div>
      <div className="info-item">
      <Mail className="info-icon" size={24} />
  <a 
    href="mailto:cardoso-paysages@hotmail.com"
    className="info-link"
    target="_blank"
    rel="noopener noreferrer"
  >
    cardoso-paysages@hotmail.com
  </a>
      </div>
      <div className="info-item">
        <svg className="info-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
        <a href="https://www.instagram.com/cardososarl/" target="_blank" rel="noopener noreferrer">
          @cardososarl
        </a>
      </div>
    </div>
    
    <form className="contact-form">
      <div className="form-group">
        <input 
          type="text"
          name="name"
          placeholder="Votre nom"
          required
          className="form-input"
        />
      </div>
      <div className="form-group">
        <input 
          type="email"
          name="email"
          placeholder="Votre email"
          required
          className="form-input"
        />
      </div>
      <div className="form-group">
        <input 
          type="tel"
          name="phone"
          placeholder="Votre téléphone"
          className="form-input"
        />
      </div>
      <div className="form-group">
        <textarea
          name="message"
          placeholder="Votre message"
          required
          className="form-textarea"
        ></textarea>
      </div>
      <button type="submit" className="submit-button">
        Envoyer
      </button>
    </form>
  </div>
    {/* New Map Section */}
    <div className="location-section">
    <h3>Notre Emplacement</h3>
    <div className="map-container">
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2753.8275005949376!2d6.16434037544757!3d46.35296787370319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c5d86d0a72e35%3A0x16105836595e7456!2sRte%20du%20Moulin%202%2C%201279%20Bogis-Bossey%2C%20Suisse!5e0!3m2!1sfr!2spt!4v1736039767733!5m2!1sfr!2spt" 
  width="600"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Location map"
      ></iframe>
    </div>
  </div>
</section>
    </div>
  );
};

export default React.memo(Homepage);