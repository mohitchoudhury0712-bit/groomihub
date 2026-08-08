import { BrowserRouter, Routes, Route } from "react-router-dom";

import AnnouncementBar from "./components/layout/AnnouncementBar";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import BookingPage from "./pages/BookingPage";

function HomePage() {
  return (
    <div className="site">
      <AnnouncementBar />
      <Navbar />

      <main>
        <Hero />
        <Services />

        <section className="process-section" id="how-it-works">
          <div className="process-intro">
            <p className="eyebrow">
              <span className="eyebrow-line" />
              HOW IT WORKS
            </p>

            <h2>
              Beauty,
              <br />
              <span>made simple.</span>
            </h2>

            <p>
              No salon queues. No rushing across the city. Choose what you
              need, pick a time that works for you, and let GroomiHub bring
              professional beauty care to your doorstep.
            </p>
          </div>

          <div className="steps">
            <div className="step">
              <span className="step-number">01</span>
              <div>
                <h3>Choose your service</h3>
                <p>
                  Explore our carefully selected beauty and grooming services
                  and choose exactly what you need.
                </p>
              </div>
              <span className="step-arrow">↗</span>
            </div>

            <div className="step">
              <span className="step-number">02</span>
              <div>
                <h3>Pick your time</h3>
                <p>
                  Select a convenient date and time. Your beauty appointment,
                  your schedule.
                </p>
              </div>
              <span className="step-arrow">↗</span>
            </div>

            <div className="step">
              <span className="step-number">03</span>
              <div>
                <h3>We come to you</h3>
                <p>
                  A verified GroomiHub professional arrives at your doorstep
                  ready to deliver a salon-quality experience.
                </p>
              </div>
              <span className="step-arrow">↗</span>
            </div>
          </div>
        </section>

        <section className="why-section" id="why-groomihub">
          <div className="why-image">
            <img
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1400&q=90"
              alt="GroomiHub professional beauty experience"
            />
          </div>

          <div className="why-content">
            <p className="eyebrow">
              <span className="eyebrow-line" />
              WHY GROOMIHUB
            </p>

            <h2>
              Your home.
              <br />
              <span>Your beauty space.</span>
            </h2>

            <p>
              GroomiHub is built around one simple idea — premium beauty care
              should fit into your life, not the other way around.
            </p>

            <div className="reason-list">
              <div className="reason">
                <span>01</span>
                <strong>Verified professionals</strong>
              </div>

              <div className="reason">
                <span>02</span>
                <strong>Salon-quality experience at home</strong>
              </div>

              <div className="reason">
                <span>03</span>
                <strong>Transparent & straightforward pricing</strong>
              </div>

              <div className="reason">
                <span>04</span>
                <strong>Convenience without compromise</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            ABOUT GROOMIHUB
          </div>

          <div className="about-main">
            <h2>
              Beauty that
              <br />
              <span>comes home.</span>
            </h2>

            <p>
              GroomiHub is a modern at-home beauty and grooming platform
              designed for people who value their time, their comfort and the
              quality of their experience.
            </p>

            <p>
              We connect customers with trusted professionals and make
              discovering, booking and experiencing beauty services at home
              effortless.
            </p>
          </div>
        </section>

        <section className="booking-section">
          <div className="booking-inner">
            <div>
              <p className="eyebrow light-eyebrow">
                <span className="eyebrow-line" />
                READY WHEN YOU ARE
              </p>

              <h2>
                Your next
                <br />
                <span>appointment awaits.</span>
              </h2>

              <p>
                Choose a service. Choose your time. We'll take care of the
                rest.
              </p>
            </div>

            <a href="/booking" className="booking-button">
              Book your appointment
              <span>→</span>
            </a>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" />
              CONTACT
            </p>

            <h2>
              Let's talk.
              <br />
              <span>We're here.</span>
            </h2>
          </div>

          <div className="contact-details">
            <p>
              Have a question about a service, booking or GroomiHub? We'd love
              to hear from you.
            </p>

            <a href="mailto:groomihub@gmail.com">
              groomihub@gmail.com
              <span>↗</span>
            </a>

            <p className="contact-note">
              GroomiHub — Premium beauty, delivered.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-top">
          <div className="logo">
            Groomi<span>Hub</span>
          </div>

          <div className="footer-links">
            <a href="/">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="/booking" className="footer-book">
            Book an appointment ↗
          </a>
        </div>

        <div className="footer-bottom">
          <span>© 2026 GroomiHub. All rights reserved.</span>
          <span>Beauty. Your way.</span>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;