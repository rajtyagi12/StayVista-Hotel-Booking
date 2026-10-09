import {Link} from "react-router-dom";
function Home() {
  return (
    <div className="home">

      <section className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p className="hero-subtitle">WELCOME TO STAYVISTA</p>

          <h1>
            Find Your Perfect
            <br />
            Stay Anywhere
          </h1>

          <p className="hero-description">
            Discover comfortable hotels, luxury resorts and unique stays
            at the best prices.
          </p>
          <Link to="/hotels" className="hero-btn">
            Explore Hotels →
          </Link>
        </div>
      </section>

      <section className="search-section">
        <div className="search-box">

          <div className="search-item">
            <label>Location</label>
            <input
              type="text"
              placeholder="Where do you want to go?"
            />
          </div>

          <div className="search-item">
            <label>Check-in</label>
            <input type="date" />
          </div>

          <div className="search-item">
            <label>Check-out</label>
            <input type="date" />
          </div>

          <div className="search-item">
            <label>Guests</label>
            <select>
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4+ Guests</option>
            </select>
          </div>

          <button className="search-btn">
            Search
          </button>

        </div>
      </section>


      
      <section className="destinations">

        <div className="section-heading">
          <p>EXPLORE THE WORLD</p>
          <h2>Popular Destinations</h2>
          <span>
            Discover amazing places for your next unforgettable trip.
          </span>
        </div>

        <div className="destination-grid">

          <div className="destination-card">
            <div>
              <h3>Goa</h3>
              <p>120+ Hotels</p>
            </div>
          </div>

          <div className="destination-card">
            <div>
              <h3>Manali</h3>
              <p>80+ Hotels</p>
            </div>
          </div>

          <div className="destination-card">
            <div>
              <h3>Jaipur</h3>
              <p>100+ Hotels</p>
            </div>
          </div>

          <div className="destination-card">
            <div>
              <h3>Dubai</h3>
              <p>150+ Hotels</p>
            </div>
          </div>

        </div>
      </section>


      
      <section className="featured-hotels">

        <div className="section-heading">
          <p>OUR TOP PICKS</p>
          <h2>Featured Hotels</h2>
          <span>
            Handpicked stays for a comfortable and memorable experience.
          </span>
        </div>

        <div className="hotel-grid">

          
          <div className="hotel-card">

            <div className="hotel-image">
              <span>Featured</span>
            </div>

            <div className="hotel-info">
              <div className="rating">★★★★★ 4.8</div>

              <h3>Ocean View Resort</h3>

              <p className="location">📍 Goa, India</p>

              <div className="hotel-bottom">
                <h4>₹4,999 <small>/ night</small></h4>
                <Link to="/hotels/1" className="hotel-details-btn">
                  <button>View Details</button>
                </Link>
              </div>
            </div>

          </div>


          
          <div className="hotel-card">

            <div className="hotel-image">
              <span>Popular</span>
            </div>

            <div className="hotel-info">
              <div className="rating">★★★★★ 4.7</div>

              <h3>Mountain Paradise</h3>

              <p className="location">📍 Manali, India</p>

              <div className="hotel-bottom">
                <h4>₹3,999 <small>/ night</small></h4>
                
                <Link to="/hotels/2" className="hotel-details-btn">
                  <button>View Details</button>
                </Link>
                
              </div>
            </div>

          </div>


          
          <div className="hotel-card">

            <div className="hotel-image">
              <span>Best Seller</span>
            </div>

            <div className="hotel-info">
              <div className="rating">★★★★★ 4.9</div>

              <h3>Royal Palace Hotel</h3>

              <p className="location">📍 Jaipur, India</p>

              <div className="hotel-bottom">
                <h4>₹5,499 <small>/ night</small></h4>
                <Link to="/hotels/3" className="hotel-details-btn">
                  <button>View Details</button>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>


      
      <section className="offers">

        <div className="offer-box">

          <div className="offer-content">
            <p>SPECIAL OFFER</p>

            <h2>
              Get Up To <span>30% Off</span>
              <br />
              On Your First Booking
            </h2>

            <p>
              Book your dream stay with StayVista and enjoy
              exclusive discounts on selected hotels.
            </p>

            <Link to="/booking/1" className="offer-book-btn">
              <button>Book Now →</button>
            </Link>
          </div>

          <div className="offer-circle">
            30%
            <small>OFF</small>
          </div>

        </div>

      </section>


      
      <section className="testimonials">

        <div className="section-heading">
          <p>WHAT OUR GUESTS SAY</p>
          <h2>Guest Reviews</h2>
          <span>
            Thousands of travelers trust StayVista for their perfect stay.
          </span>
        </div>

        <div className="testimonial-grid">

          <div className="testimonial-card">
            <div className="quote">“</div>

            <p>
              Amazing experience! The hotel was beautiful,
              clean and the booking process was very easy.
            </p>

            <h3>Rahul Sharma</h3>
            <span>Delhi, India</span>
          </div>


          <div className="testimonial-card">
            <div className="quote">“</div>

            <p>
              StayVista made our vacation really comfortable.
              The hotel options and prices were excellent.
            </p>

            <h3>Priya Singh</h3>
            <span>Mumbai, India</span>
          </div>


          <div className="testimonial-card">
            <div className="quote">“</div>

            <p>
              Very smooth booking experience. I will definitely
              use StayVista again for my next trip.
            </p>

            <h3>Aman Verma</h3>
            <span>Bangalore, India</span>
          </div>

        </div>

      </section>


      
      <section className="final-cta">

        <div>
          <p>READY FOR YOUR NEXT TRIP?</p>

          <h2>
            Your Perfect Stay
            <br />
            Is Just A Click Away.
          </h2>

          <Link to="/hotels" className="final-cta-btn">
            <button>Explore Hotels →</button>
          </Link>
        </div>

      </section>

    </div>
  );
}

export default Home;