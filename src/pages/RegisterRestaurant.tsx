import { useState } from "react";
import { Input } from "@/components/ui/input";
import supabase from "@/supabaseClient";

export const RegisterRestaurant = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cuisineType, setCuisineType] = useState("");
  const [rating, setRating] = useState(0);
  const [cookingTime, setCookingTime] = useState("");
  const [opensAt, setOpensAt] = useState("");
  const [closesAt, setClosesAt] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !location || !phoneNumber || !cuisineType) {
      setError("Please fill in all required fields.");
      return;
    }
    try {
      const { error: insertError } = await supabase.from("restaurants").insert([
        {
          name,
          location,
          phone_number: phoneNumber,
          cuisine_type: cuisineType,
          rating,
          cooking_time: cookingTime,
          opens_at: opensAt,
          closes_at: closesAt,
          is_open: isOpen,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]);
      if (insertError) throw insertError;
      console.log("Restaurant added successfully!");
      setError(""); // Clear any previous errors
      // Reset form fields
      setName("");
      setLocation("");
      setPhoneNumber("");
      setCuisineType("");
      setRating(0);
      setCookingTime("");
      setOpensAt("");
      setClosesAt("");
      setIsOpen(false);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError("Error adding restaurant: " + err.message);
      } else {
        setError("Unknown error occurred.");
      }
    }
  };

  return (
    <div className="p-24 w-1/2 mx-auto">
      <h1>Add New Restaurant</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name">Restaurant Name</label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <Input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone-number">Phone Number</label>
          <Input
            id="phone-number"
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cuisine-type">Cuisine Type</label>
          <Input
            id="cuisine-type"
            type="text"
            value={cuisineType}
            onChange={(e) => setCuisineType(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="rating">Rating</label>
          <Input
            id="rating"
            type="number"
            step="0.01"
            value={rating}
            onChange={(e) => setRating(parseFloat(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="cooking-time">Cooking Time</label>
          <Input
            id="cooking-time"
            type="text"
            value={cookingTime}
            onChange={(e) => setCookingTime(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="opens-at">Opens At</label>
          <Input
            id="opens-at"
            type="time"
            value={opensAt}
            onChange={(e) => setOpensAt(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="closes-at">Closes At</label>
          <Input
            id="closes-at"
            type="time"
            value={closesAt}
            onChange={(e) => setClosesAt(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="is-open">Is Open</label>
          <input
            id="is-open"
            type="checkbox"
            checked={isOpen}
            onChange={(e) => setIsOpen(e.target.checked)}
            className="ml-2"
          />
        </div>
        <button type="submit" className="btn mt-4">
          Add Restaurant
        </button>
      </form>
    </div>
  );
};
