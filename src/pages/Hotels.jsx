import { useState } from "react";
import hotels from "../data/hotels";
import HotelCard from "../components/HotelCard";
import FilterSidebar from "../components/FilterSidebar";

function Hotels() {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState("all");
  const [sort, setSort] = useState("default");

  let filteredHotels = hotels.filter((hotel) => {
    const matchesSearch =
      hotel.name.toLowerCase().includes(search.toLowerCase()) ||
      hotel.location.toLowerCase().includes(search.toLowerCase());

    const matchesRating =
      rating === "all" || hotel.rating >= Number(rating);

    return matchesSearch && matchesRating;
  });

  // Price sorting
  if (sort === "low") {
    filteredHotels.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filteredHotels.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="hotels-page">

      <h1>Our Hotels</h1>

      
      <div className="hotel-search">
        <input
          type="text"
          placeholder="Search hotels or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

    
      <div className="hotels-content">

  <FilterSidebar
    rating={rating}
    setRating={setRating}
    sort={sort}
    setSort={setSort}
  />

  <div className="hotels-grid">
    {filteredHotels.length > 0 ? (
      filteredHotels.map((hotel) => (
        <HotelCard
          key={hotel.id}
          hotel={hotel}
        />
      ))
    ) : (
      <p className="no-hotels">
        No hotels found.
      </p>
    )}
  </div>

</div>

    </div>
  );
}

export default Hotels;