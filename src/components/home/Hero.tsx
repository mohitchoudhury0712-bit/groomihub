const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="eyebrow-line"></span>
          The new way to experience beauty
        </div>

        <h1>
          Your beauty.
          <br />
          <span>Your space.</span>
          <br />
          Your time.
        </h1>

        <p className="hero-description">
          Premium beauty and grooming services brought directly to your
          doorstep — by professionals you can trust.
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
            <span>At your doorstep</span>
          </div>

          <div>
            <strong>STANDARD</strong>
            <span>Salon-quality care</span>
          </div>

          <div>
            <strong>PROFESSIONALS</strong>
            <span>Verified experts</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <img
          src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1400&q=90"
          alt="Premium beauty experience"
        />

        <div className="hero-image-tag">
          BEAUTY, DELIVERED
        </div>

        <div className="hero-image-label">
          <span>GROOMIHUB EXPERIENCE</span>
          <strong>Professional care. At home.</strong>
        </div>
      </div>
    </section>
  );
};

export default Hero;