function About() {
  return (
    <div className="about-page">

      
      <div className="about-hero">
        <h1>About StayVista</h1>
        <p>Your perfect stay, made simple.</p>
      </div>

      {/* About StayVista */}
      <div className="about-content">

        {/* Image */}
        <div className="about-image">
          <img
            src="/images/hotel-hero.jpg"
            alt="StayVista Hotel"
          />
        </div>

        {/* Text */}
        <div className="about-text">
          <h2>About StayVista</h2>

          <p>
            StayVista is a modern hotel booking platform that helps you
            find comfortable and affordable stays at beautiful destinations.
          </p>

          <p>
            Our goal is to make hotel booking simple, convenient and
            enjoyable for every traveler.
          </p>

          <span className="about-highlight">
            Your perfect stay starts here.
          </span>
        </div>

      </div>

      {/* Why Choose Us */}
      <section className="why-choose">

        <h2>Why Choose StayVista?</h2>

        <div className="why-cards">

          <div className="why-card">
            <div className="why-icon">🏨</div>
            <h3>Best Hotels</h3>
            <p>
              Discover comfortable and beautiful hotels at great destinations.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">⭐</div>
            <h3>Top Rated</h3>
            <p>
              Find highly rated hotels trusted by travelers.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">💰</div>
            <h3>Best Prices</h3>
            <p>
              Get comfortable stays at affordable prices.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">🔒</div>
            <h3>Secure Booking</h3>
            <p>
              Enjoy a simple and secure hotel booking experience.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default About;