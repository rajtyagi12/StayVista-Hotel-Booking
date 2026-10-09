import { Link, useParams } from "react-router-dom";
import hotels from "../data/hotels";

function HotelDetails() {
  const { id } = useParams();

  const hotel = hotels.find(
    (hotel) => hotel.id === Number(id)
  );

  if (!hotel) {
    return (
      <div className="hotel-not-found">
        <h1>Hotel Not Found</h1>
        <Link to="/hotels">Back to Hotels</Link>
      </div>
    );
  }

  return (
    <div className="hotel-details-page">

      <div className="hotel-details-container">

      
        <div className="hotel-details-image-box">
          <img
            src={hotel.image}
            alt={hotel.name}
            className="hotel-details-image"
          />
        </div>

        
        <div className="hotel-details-content">

          <span className="hotel-location">
            📍 {hotel.location}
          </span>

          <h1>{hotel.name}</h1>

          <div className="hotel-rating">
            ⭐ {hotel.rating}
          </div>

          <div className="hotel-price">
            ₹{hotel.price}
            <span> / night</span>
          </div>

          <p className="hotel-description">
            {hotel.description}
          </p>

          <div className="hotel-features">
            <div>
              🛏️
              <span>Comfortable Rooms</span>
            </div>

            <div>
              📶
              <span>Free Wi-Fi</span>
            </div>

            <div>
              🏊
              <span>Swimming Pool</span>
            </div>

            <div>
              🍽️
              <span>Restaurant</span>
            </div>
          </div>

          <Link
            to={`/booking/${hotel.id}`}
            className="book-hotel-btn"
          >
            Book This Hotel
          </Link>

        </div>

      </div>

    </div>
  );
}

export default HotelDetails;