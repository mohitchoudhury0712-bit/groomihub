const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="eyebrow-line"></span>
          Salon at home in Kharar
        </div>

        <h1>
          Salon & beauty
          <br />
          <span>services at home.</span>
          <br />
          For men & women.
        </h1>

        <p className="hero-description">
          GroomiHub brings professional salon and grooming services directly
          to your doorstep in Kharar. Book haircuts, beard grooming, facials,
          nails, makeup and more — without leaving home.
        </p>

        <div className="hero-actions">
          <a href="/booking" className="primary-button">
            <span>Book Your Session</span>
            <span className="primary-button-arrow">→</span>
          </a>

          <a href="#services" className="text-button">
            <span>Explore Services</span>
            <span>→</span>
          </a>
        </div>

        <div className="hero-points">
          <div>
            <strong>SERVICE</strong>
            <span>At your doorstep in Kharar</span>
          </div>

          <div>
            <strong>STANDARD</strong>
            <span>Salon-quality care at home</span>
          </div>

          <div>
            <strong>PROFESSIONALS</strong>
            <span>Trusted beauty experts</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <img
          src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1400&q=90"
          alt="At-home salon and beauty service experience"
        />

        <div className="hero-image-tag">
          BEAUTY, DELIVERED
        </div>

        <div className="hero-image-label">
          <span>GROOMIHUB EXPERIENCE</span>
          <strong>Professional beauty care. At home.</strong>
        </div>
      </div>
    </section>
  );
};

export default Hero;