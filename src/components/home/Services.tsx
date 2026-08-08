const Services = () => {
  const services = [
    {
      number: "01",
      title: "Hair",
      text: "Cuts, styling, blowouts, colour and everyday grooming.",
      image:
        "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1200&q=90",
    },
    {
      number: "02",
      title: "Makeup",
      text: "Everyday glam, party looks and makeup for your special moments.",
      image:
        "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1200&q=90",
    },
    {
      number: "03",
      title: "Skin",
      text: "Facials, clean-ups, de-tan and skincare rituals designed around you.",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=90",
    },
    {
      number: "04",
      title: "Nails",
      text: "Manicure, pedicure and polished nail care at your doorstep.",
      image:
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&q=90",
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
            Made for
            <br />
            <span>you.</span>
          </h2>
        </div>

        <p>
          Professional beauty services without the salon visit. Choose what
          you need, choose your time, and let GroomiHub bring the experience
          home.
        </p>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <a
            href="/booking"
            className="service-card"
            key={service.number}
          >
            <img src={service.image} alt={service.title} />

            <div className="service-overlay" />

            <span className="service-number">{service.number}</span>

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