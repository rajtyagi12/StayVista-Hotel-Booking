import { Link } from "react-router-dom";

function HotelCard({ hotel }) {
  return (
    <div className="hotel-card">

      <img
        src={hotel.image}
        alt={hotel.name}
        className="hotel-card-image"
      />

      <div className="hotel-card-content">

        <h2>{hotel.name}</h2>

        <p className="hotel-location">
          📍 {hotel.location}
        </p>

        <p className="hotel-rating">
          ⭐ {hotel.rating}
        </p>

        <div className="hotel-card-bottom">

          <div>
            <strong>₹{hotel.price}</strong>
            <span> / night</span>
          </div>

          <Link
            to={`/hotels/${hotel.id}`}
            className="hotel-detail-btn"
          >
            View Details
          </Link>

        </div>

      </div>

    </div>
  );
}

export default HotelCard;