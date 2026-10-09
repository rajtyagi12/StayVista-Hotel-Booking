import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import hotels from "../data/hotels";

function Booking() {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);


  const hotel = hotels.find(
    (hotel) => hotel.id === Number(id)
  );

  
  if (!hotel) {
    return (
      <div className="booking-page">
        <div className="booking-form-container">
          <h1>Hotel Not Found</h1>
          <Link to="/hotels">Back to Hotels</Link>
        </div>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();

  
    if (
      !formData.name ||
      !formData.email ||
      !formData.checkIn ||
      !formData.checkOut
    ) {
      alert("Please fill all the details");
      return;
    }

    // Show confirmation screen
    setBookingConfirmed(true);

    console.log("Booking Details:", {
      hotel: hotel.name,
      ...formData,
    });
  };

  // Booking Confirmation Screen
  if (bookingConfirmed) {
    return (
      <div className="booking-page">

        <div className="booking-form-container">

          <div className="booking-success">

            <div className="success-icon">
              ✓
            </div>

            <h1>Booking Confirmed!</h1>

            <p>
              Your hotel booking has been successfully confirmed.
            </p>

            <hr />

            <div className="confirmation-details">

              <h2>{hotel.name}</h2>

              <p>📍 {hotel.location}</p>

              <p>
                👤 <strong>Guest:</strong> {formData.name}
              </p>

              <p>
                📧 <strong>Email:</strong> {formData.email}
              </p>

              <p>
                📅 <strong>Check-in:</strong> {formData.checkIn}
              </p>

              <p>
                📅 <strong>Check-out:</strong> {formData.checkOut}
              </p>

              <p>
                👥 <strong>Guests:</strong> {formData.guests}
              </p>

              <p>
                💰 <strong>Price:</strong> ₹{hotel.price} / night
              </p>

            </div>

            <Link
              to="/hotels"
              className="back-hotels-btn"
            >
              Back to Hotels
            </Link>

          </div>

        </div>

      </div>
    );
  }

  return (
    <div className="booking-page">

      <div className="booking-container">

        {/* Hotel Information */}
        <div className="booking-hotel">

          <img
            src={hotel.image}
            alt={hotel.name}
            className="booking-hotel-image"
          />

          <div className="booking-hotel-info">

            <h1>{hotel.name}</h1>

            <p>📍 {hotel.location}</p>

            <p>⭐ {hotel.rating}</p>

            <h2>₹{hotel.price}</h2>

            <span>per night</span>

            <p className="booking-description">
              {hotel.description}
            </p>

          </div>

        </div>

        {/* Booking Form */}
        <div className="booking-form-container">

          <h2>Complete Your Booking</h2>

          <p className="booking-subtitle">
            Enter your details to reserve your stay.
          </p>

          <form onSubmit={handleSubmit}>

            {/* Full Name */}
            <div className="form-group">

              <label>Full Name</label>

              <input
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
              />

            </div>

            {/* Email */}
            <div className="form-group">

              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
              />

            </div>

            {/* Dates */}
            <div className="date-row">

              <div className="form-group">

                <label>Check-in</label>

                <input
                  type="date"
                  value={formData.checkIn}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      checkIn: e.target.value,
                    })
                  }
                />

              </div>

              <div className="form-group">

                <label>Check-out</label>

                <input
                  type="date"
                  value={formData.checkOut}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      checkOut: e.target.value,
                    })
                  }
                />

              </div>

            </div>

            {/* Guests */}
            <div className="form-group">

              <label>Guests</label>

              <select
                value={formData.guests}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    guests: e.target.value,
                  })
                }
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
              </select>

            </div>

            {/* Confirm Booking */}
            <button
              type="submit"
              className="confirm-booking-btn"
            >
              Confirm Booking
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Booking;