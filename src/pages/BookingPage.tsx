import { useState } from "react";

type Gender = "men" | "women" | null;

type Service = {
  name: string;
  price: string;
  category: string;
};

const serviceData = {
  men: {
    Hair: [
      ["Hair Cut", "₹299"],
      ["Hair Styling", "₹399"],
      ["Hair Wash", "₹199"],
      ["Hair Colour", "₹999"],
      ["Global Hair Colour", "₹1,499"],
      ["Root Touch-up", "₹699"],
      ["Straightening", "₹1,499"],
      ["Smoothening", "₹1,799"],
      ["Hair Spa", "₹699"],
    ],
    "Face & Skin": [
      ["De-Tan", "₹399"],
      ["Cleanup", "₹499"],
      ["Bleach", "₹399"],
      ["Scrub", "₹299"],
      ["Basic Facial", "₹599"],
      ["Premium Facial", "₹899"],
    ],
    Beard: [
      ["Beard Trim", "₹199"],
      ["Beard Styling", "₹299"],
      ["Beard Colour", "₹399"],
      ["Beard Spa", "₹499"],
    ],
    "Head Massage": [
      ["Head Massage", "₹299"],
      ["Premium Head Massage", "₹499"],
    ],
  },

  women: {
    Hair: [
      ["Hair Cut", "₹399"],
      ["Hair Styling", "₹499"],
      ["Hair Wash", "₹299"],
      ["Blow Dry", "₹399"],
      ["Hair Colour", "₹1,199"],
      ["Global Hair Colour", "₹1,799"],
      ["Root Touch-up", "₹799"],
      ["Highlights", "₹1,499"],
      ["Straightening", "₹1,999"],
      ["Smoothening", "₹2,499"],
      ["Curling", "₹699"],
      ["Hair Spa", "₹799"],
    ],
    "Face & Skin": [
      ["De-Tan", "₹499"],
      ["Scrub", "₹299"],
      ["Bleach", "₹499"],
      ["Cleanup", "₹599"],
      ["Basic Facial", "₹799"],
      ["VLCC Facial", "₹999"],
      ["Lakmé Facial", "₹1,199"],
      ["Premium Facial", "₹1,499"],
    ],
    Makeup: [
      ["Basic Makeup", "₹999"],
      ["Party Makeup", "₹1,499"],
      ["Premium Makeup", "₹2,499"],
      ["Engagement Makeup", "₹3,999"],
      ["Bridal Makeup", "₹7,999"],
    ],
    Nails: [
      ["Manicure", "₹499"],
      ["Pedicure", "₹599"],
      ["Manicure + Pedicure", "₹999"],
      ["Gel Polish", "₹699"],
      ["Nail Extensions", "₹1,499"],
    ],
    Waxing: [
      ["Full Arms Wax", "₹399"],
      ["Half Legs Wax", "₹399"],
      ["Full Legs Wax", "₹599"],
      ["Full Body Wax", "₹1,499"],
      ["Underarms Wax", "₹199"],
    ],
    Threading: [
      ["Eyebrow", "₹99"],
      ["Upper Lip", "₹79"],
      ["Full Face Threading", "₹249"],
    ],
  },
};

const categoryIcons: Record<string, string> = {
  Hair: "✂",
  "Face & Skin": "◌",
  Beard: "⌁",
  "Head Massage": "○",
  Makeup: "✦",
  Nails: "◇",
  Waxing: "—",
  Threading: "⌁",
};

/* DIRECT IMAGE URLS */
const genderImages = {
  men: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1400&q=90",
  women:
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1400&q=90",
};

/* GROOMIHUB WHATSAPP NUMBER */
const WHATSAPP_NUMBER = "919658852370";

function BookingPage() {
  const [gender, setGender] = useState<Gender>(null);
  const [category, setCategory] = useState<string | null>(null);

  const [selectedServices, setSelectedServices] = useState<Service[]>([]);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [confirmed, setConfirmed] = useState(false);

  const categories = gender ? Object.keys(serviceData[gender]) : [];

  const services =
    gender && category
      ? serviceData[gender][
          category as keyof (typeof serviceData)[typeof gender]
        ]
      : [];

  /* ---------------- GENDER ---------------- */

  const chooseGender = (value: Gender) => {
    setGender(value);
    setCategory(null);
    setSelectedServices([]);
    setDate("");
    setTime("");
    setName("");
    setPhone("");
    setAddress("");
    setConfirmed(false);
  };

  /* ---------------- CATEGORY ---------------- */

  const chooseCategory = (value: string) => {
    setCategory(value);
  };

  /* ---------------- SERVICE ---------------- */

  const toggleService = (serviceName: string, price: string) => {
    if (!category) return;

    const exists = selectedServices.some(
      (service) =>
        service.name === serviceName &&
        service.category === category
    );

    if (exists) {
      setSelectedServices((prev) =>
        prev.filter(
          (service) =>
            !(
              service.name === serviceName &&
              service.category === category
            )
        )
      );
    } else {
      setSelectedServices((prev) => [
        ...prev,
        {
          name: serviceName,
          price,
          category,
        },
      ]);
    }
  };

  /* ---------------- REMOVE SERVICE ---------------- */

  const removeService = (index: number) => {
    setSelectedServices((prev) =>
      prev.filter((_, i) => i !== index)
    );
  };

  /* ---------------- PRICE ---------------- */

  const getPriceNumber = (price: string) => {
    return Number(price.replace(/[₹,]/g, ""));
  };

  const totalPrice = selectedServices.reduce(
    (total, service) =>
      total + getPriceNumber(service.price),
    0
  );

  /* ---------------- PHONE VALIDATION ---------------- */

  const cleanPhone = phone.replace(/\D/g, "");

  const validPhone = cleanPhone.length === 10;

  /* ---------------- TIME FORMAT ---------------- */

  const formatTime = (value: string) => {
    if (!value) return "";

    const [hours, minutes] = value.split(":");
    const hourNumber = Number(hours);

    const period = hourNumber >= 12 ? "PM" : "AM";

    const displayHour =
      hourNumber % 12 === 0 ? 12 : hourNumber % 12;

    return `${String(displayHour).padStart(
      2,
      "0"
    )}:${minutes} ${period}`;
  };

  /* ---------------- DATE FORMAT ---------------- */

  const formatDate = (value: string) => {
    if (!value) return "";

    const [year, month, day] = value.split("-");

    return `${day}/${month}/${year}`;
  };

  /* ---------------- CAN CONTINUE ---------------- */

  const canContinue =
    selectedServices.length > 0 &&
    date &&
    time &&
    name.trim().length >= 2 &&
    validPhone &&
    address.trim().length >= 10;

  /* ---------------- WHATSAPP BOOKING ---------------- */

  const sendBookingToWhatsApp = () => {
    if (!canContinue) return;

    const serviceText = selectedServices
      .map(
        (service) =>
          `• ${service.name} (${service.category}) - ${service.price}`
      )
      .join("\n");

    const formattedDate = formatDate(date);
    const formattedTime = formatTime(time);

    const genderText =
      gender === "men"
        ? "Men"
        : gender === "women"
        ? "Women"
        : "";

    const message = `Hello GroomiHub 👋

I want to book a home salon service.

*BOOKING DETAILS*

👤 Name: ${name}
📱 Customer Phone: ${phone}
👥 Service For: ${genderText}

*SERVICES*
${serviceText}

💰 Total: ₹${totalPrice.toLocaleString("en-IN")}

📅 Date: ${formattedDate}
⏰ Time: ${formattedTime}

📍 Home Address:
${address}

Please confirm my booking.

Thank you,
GroomiHub Customer`;

    /* CORRECT WHATSAPP URL */
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");

    setConfirmed(true);
  };

  /* ---------------- SUCCESS PAGE ---------------- */

  if (confirmed) {
    return (
      <div className="booking-page">

        <div className="booking-top">

          <a href="/" className="booking-logo">
            Groomi<span>Hub</span>
          </a>

          <div className="booking-top-text">
            Premium beauty at your doorstep
          </div>

          <a href="/" className="booking-close">
            Close ×
          </a>

        </div>

        <main className="booking-success">

          <div className="success-icon">
            ✓
          </div>

          <p className="booking-eyebrow">
            <span></span>
            BOOKING REQUEST RECEIVED
          </p>

          <h1>
            You're all
            <br />
            <em>set.</em>
          </h1>

          <p className="success-text">
            Your booking details have been sent to
            GroomiHub on WhatsApp. Our team will contact
            you shortly to confirm your appointment.
          </p>

          <div className="success-summary">

            <div>
              <span>SERVICES</span>

              <strong>
                {selectedServices.map(
                  (service, index) => (
                    <span key={index}>
                      {service.name}
                      {index <
                      selectedServices.length - 1
                        ? ", "
                        : ""}
                    </span>
                  )
                )}
              </strong>
            </div>

            <div>
              <span>DATE</span>

              <strong>
                {formatDate(date)}
              </strong>
            </div>

            <div>
              <span>TIME</span>

              <strong>
                {formatTime(time)}
              </strong>
            </div>

            <div>
              <span>TOTAL</span>

              <strong>
                ₹{totalPrice.toLocaleString("en-IN")}
              </strong>
            </div>

            <div>
              <span>NAME</span>

              <strong>
                {name}
              </strong>
            </div>

          </div>

          <a
            href="/"
            className="continue-button success-home"
          >
            Back to GroomiHub
            <span>↗</span>
          </a>

        </main>
      </div>
    );
  }

  /* ---------------- MAIN PAGE ---------------- */

  return (
    <div className="booking-page">

      {/* TOP BAR */}

      <div className="booking-top">

        <a href="/" className="booking-logo">
          Groomi<span>Hub</span>
        </a>

        <div className="booking-top-text">
          Premium beauty at your doorstep
        </div>

        <a href="/" className="booking-close">
          Close ×
        </a>

      </div>

      {/* PROGRESS */}

      <div className="booking-progress">

        <div
          className={
            gender
              ? "progress-step active"
              : "progress-step"
          }
        >
          <span>01</span>
          Who is this for?
        </div>

        <div
          className={
            category
              ? "progress-step active"
              : "progress-step"
          }
        >
          <span>02</span>
          Choose category
        </div>

        <div
          className={
            selectedServices.length > 0
              ? "progress-step active"
              : "progress-step"
          }
        >
          <span>03</span>
          Choose services
        </div>

        <div
          className={
            date && time
              ? "progress-step active"
              : "progress-step"
          }
        >
          <span>04</span>
          Date & time
        </div>

      </div>

      <main className="booking-content">

        {/* HEADING */}

        <div className="booking-heading">

          <div className="booking-eyebrow">
            <span></span>
            BOOK YOUR APPOINTMENT
          </div>

          <h1>
            Your beauty.
            <br />
            <em>Choose your way.</em>
          </h1>

          <p>
            Tell us what you need and we'll create the
            perfect at-home experience for you.
          </p>

        </div>

        {/* STEP 1 */}

        <section className="booking-step">

          <div className="step-heading">

            <div>

              <span className="step-label">
                01
              </span>

              <h2>
                Who is this service for?
              </h2>

            </div>

            {gender && (
              <span className="selected-label">
                {gender === "men"
                  ? "MEN"
                  : "WOMEN"}
              </span>
            )}

          </div>

          <div className="gender-grid">

            {/* MEN */}

            <button
              type="button"
              className={`gender-card ${
                gender === "men"
                  ? "selected"
                  : ""
              }`}
              onClick={() =>
                chooseGender("men")
              }
            >

              <img
                className="gender-image-real"
                src={genderImages.men}
                alt="Men's professional grooming"
              />

              <div className="gender-image-overlay"></div>

              <div className="gender-content">

                <span>01</span>

                <h3>
                  Men
                </h3>

                <p>
                  Hair, beard, skin & grooming
                </p>

              </div>

              <div className="select-circle">
                {gender === "men"
                  ? "✓"
                  : "↗"}
              </div>

            </button>

            {/* WOMEN */}

            <button
              type="button"
              className={`gender-card ${
                gender === "women"
                  ? "selected"
                  : ""
              }`}
              onClick={() =>
                chooseGender("women")
              }
            >

              <img
                className="gender-image-real"
                src={genderImages.women}
                alt="Women's professional salon"
              />

              <div className="gender-image-overlay"></div>

              <div className="gender-content">

                <span>02</span>

                <h3>
                  Women
                </h3>

                <p>
                  Hair, skin, makeup, nails & more
                </p>

              </div>

              <div className="select-circle">
                {gender === "women"
                  ? "✓"
                  : "↗"}
              </div>

            </button>

          </div>

        </section>

        {/* STEP 2 */}

        {gender && (
          <section className="booking-step reveal">

            <div className="step-heading">

              <div>

                <span className="step-label">
                  02
                </span>

                <h2>
                  What are you looking for?
                </h2>

              </div>

              <span className="selected-label">
                {gender === "men"
                  ? "MEN"
                  : "WOMEN"}
              </span>

            </div>

            <div className="category-grid">

              {categories.map(
                (item, index) => (

                  <button
                    type="button"
                    key={item}
                    className={`category-card ${
                      category === item
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      chooseCategory(item)
                    }
                  >

                    <div className="category-icon">
                      {categoryIcons[item] ||
                        "✦"}
                    </div>

                    <div>

                      <span className="category-number">
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <h3>
                        {item}
                      </h3>

                    </div>

                    <span className="category-arrow">
                      {category === item
                        ? "✓"
                        : "↗"}
                    </span>

                  </button>

                )
              )}

            </div>

          </section>
        )}

        {/* STEP 3 */}

        {category && (
          <section className="booking-step reveal">

            <div className="step-heading">

              <div>

                <span className="step-label">
                  03
                </span>

                <h2>
                  Choose your services.
                </h2>

              </div>

              <span className="selected-label">
                {category}
              </span>

            </div>

            <p className="booking-helper">
              Select as many services as you need.
            </p>

            <div className="service-selection-grid">

              {services.map(
                ([serviceName, price]) => {

                  const isSelected =
                    selectedServices.some(
                      (service) =>
                        service.name ===
                          serviceName &&
                        service.category ===
                          category
                    );

                  return (

                    <button
                      type="button"
                      key={serviceName}
                      className={`selection-card ${
                        isSelected
                          ? "selected"
                          : ""
                      }`}
                      onClick={() =>
                        toggleService(
                          serviceName,
                          price
                        )
                      }
                    >

                      <div>

                        <span className="service-mini-label">
                          GROOMIHUB SERVICE
                        </span>

                        <h3>
                          {serviceName}
                        </h3>

                      </div>

                      <div className="service-price">

                        <strong>
                          {price}
                        </strong>

                        <span>
                          {isSelected
                            ? "✓"
                            : "+"}
                        </span>

                      </div>

                    </button>

                  );
                }
              )}

            </div>

          </section>
        )}

        {/* SELECTED SERVICES */}

        {selectedServices.length > 0 && (
          <section className="booking-step reveal">

            <div className="step-heading">

              <div>

                <span className="step-label">
                  SELECTED
                </span>

                <h2>
                  Your services.
                </h2>

              </div>

              <span className="selected-label">
                {selectedServices.length}{" "}
                {selectedServices.length === 1
                  ? "SERVICE"
                  : "SERVICES"}
              </span>

            </div>

            <div className="selected-services-list">

              {selectedServices.map(
                (service, index) => (

                  <div
                    className="selected-service-card"
                    key={`${service.name}-${index}`}
                  >

                    <div className="selected-service-info">

                      <span>
                        {service.category}
                      </span>

                      <strong>
                        {service.name}
                      </strong>

                    </div>

                    <div className="selected-service-right">

                      <strong>
                        {service.price}
                      </strong>

                      <button
                        type="button"
                        onClick={() =>
                          removeService(index)
                        }
                        aria-label={`Remove ${service.name}`}
                      >
                        ×
                      </button>

                    </div>

                  </div>

                )
              )}

              <div className="selected-services-total">

                <div>

                  <span>
                    YOUR TOTAL
                  </span>

                  <small>
                    {selectedServices.length}{" "}
                    {selectedServices.length === 1
                      ? "service"
                      : "services"}{" "}
                    selected
                  </small>

                </div>

                <strong>
                  ₹
                  {totalPrice.toLocaleString(
                    "en-IN"
                  )}
                </strong>

              </div>

            </div>

          </section>
        )}

        {/* STEP 4 */}

        {selectedServices.length > 0 && (
          <section className="booking-step reveal">

            <div className="step-heading">

              <div>

                <span className="step-label">
                  04
                </span>

                <h2>
                  When should we come?
                </h2>

              </div>

              <span className="selected-label">
                SCHEDULE
              </span>

            </div>

            <div className="schedule-grid">

              <div className="booking-field">

                <label htmlFor="booking-date">
                  SELECT DATE
                </label>

                <input
                  id="booking-date"
                  type="date"
                  value={date}
                  min={
                    new Date()
                      .toISOString()
                      .split("T")[0]
                  }
                  onChange={(e) =>
                    setDate(e.target.value)
                  }
                />

              </div>

              <div className="booking-field">

                <label htmlFor="booking-time">
                  SELECT TIME
                </label>

                <input
                  id="booking-time"
                  type="time"
                  value={time}
                  onChange={(e) =>
                    setTime(e.target.value)
                  }
                />

                <small className="field-hint">
                  Choose any convenient time.
                </small>

              </div>

            </div>

          </section>
        )}

        {/* CUSTOMER DETAILS */}

        {date && time && (
          <section className="booking-step reveal">

            <div className="step-heading">

              <div>

                <span className="step-label">
                  05
                </span>

                <h2>
                  Where should we come?
                </h2>

              </div>

              <span className="selected-label">
                YOUR DETAILS
              </span>

            </div>

            <div className="details-grid">

              <div className="booking-field">

                <label htmlFor="customer-name">
                  YOUR NAME
                </label>

                <input
                  id="customer-name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                />

              </div>

              <div className="booking-field">

                <label htmlFor="customer-phone">
                  PHONE NUMBER
                </label>

                <input
                  id="customer-phone"
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  placeholder="10-digit mobile number"
                  value={phone}
                  onChange={(e) =>
                    setPhone(
                      e.target.value.replace(
                        /\D/g,
                        ""
                      )
                    )
                  }
                />

                {phone.length > 0 &&
                  !validPhone && (
                    <small className="field-error">
                      Please enter a valid
                      10-digit number.
                    </small>
                  )}

              </div>

              <div className="booking-field full-field">

                <label htmlFor="customer-address">
                  HOME ADDRESS
                </label>

                <textarea
                  id="customer-address"
                  placeholder="Enter your complete address"
                  value={address}
                  onChange={(e) =>
                    setAddress(
                      e.target.value
                    )
                  }
                  rows={4}
                />

                {address.length > 0 &&
                  address.trim().length < 10 && (
                    <small className="field-error">
                      Please enter your complete
                      address.
                    </small>
                  )}

              </div>

            </div>

          </section>
        )}

        {/* FINAL SUMMARY */}

        {selectedServices.length > 0 && (
          <div className="booking-continue reveal">

            <div>

              <span>
                YOUR SELECTION
              </span>

              <strong>
                {selectedServices.length}{" "}
                {selectedServices.length === 1
                  ? "service"
                  : "services"}{" "}
                · ₹
                {totalPrice.toLocaleString(
                  "en-IN"
                )}
              </strong>

              {date && time && (
                <small>
                  {formatDate(date)} ·{" "}
                  {formatTime(time)}
                </small>
              )}

            </div>

            <button
              type="button"
              className="continue-button"
              disabled={!canContinue}
              onClick={
                sendBookingToWhatsApp
              }
            >
              Confirm booking
              <span>↗</span>
            </button>

          </div>
        )}

      </main>
    </div>
  );
}

export default BookingPage;