const AnnouncementBar = () => {
  const offerText =
    "LAUNCH OFFER — For our first 3 bookings, enjoy every service at an exclusive introductory price.";

  return (
    <div className="announcement">
      <div className="announcement-track">
        <span>{offerText}</span>
        <span className="announcement-dot">✦</span>
        <span>{offerText}</span>
        <span className="announcement-dot">✦</span>
        <span>{offerText}</span>
        <span className="announcement-dot">✦</span>
        <span>{offerText}</span>
        <span className="announcement-dot">✦</span>
      </div>
    </div>
  );
};

export default AnnouncementBar;