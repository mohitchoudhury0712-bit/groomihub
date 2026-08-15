const Services = () => {
  const services = [
    {
      number: "01",
      title: "Hair & Haircuts",
      text: "Haircuts, styling, blowouts, colour and everyday hair grooming at home in Kharar.",
      image:
        "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1200&q=90",
      alt: "Haircut and hair styling service at home in Kharar",
    },
    {
      number: "02",
      title: "Makeup",
      text: "Professional makeup for everyday looks, parties, events and special moments at home.",
      image:
        "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1200&q=90",
      alt: "Professional makeup service at home in Kharar",
    },
    {
      number: "03",
      title: "Facial & Skin",
      text: "Facials, clean-ups, de-tan and skincare treatments designed around you and delivered at home.",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=90",
      alt: "Facial and skincare service at home in Kharar",
    },
    {
      number: "04",
      title: "Nails",
      text: "Manicure, pedicure and polished nail care delivered conveniently to your doorstep.",
      image:
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&q=90",
      alt: "Manicure and pedicure nail service at home in Kharar",
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="section-heading">
        <div>
          <p className="eyebrow">
            <span className="eyebrow-line" />
            02 / SERVICES
          </p>

          <h2>
            Beauty &
            <br />
            <span>grooming at home.</span>
          </h2>
        </div>

        <p>
          GroomiHub brings professional salon and grooming services to your
          doorstep in Kharar. Choose from haircuts, hair styling, makeup,
          facials, skincare and nail care for men and women.
        </p>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <a
            href="/booking"
            className="service-card"
            key={service.number}
          >
            <img src={service.image} alt={service.alt} />

            <div className="service-overlay" />

            <span className="service-number">
              {service.number}
            </span>

            <div className="service-arrow">↗</div>

            <div className="service-content">
              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <span className="service-book-link">
                Explore service <span>→</span>
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="services-bottom">
        <span>BEAUTY, WITHOUT LEAVING HOME</span>

        <a href="/booking">
          View all services <span>→</span>
        </a>
      </div>
    </section>
  );
};

export default Services;