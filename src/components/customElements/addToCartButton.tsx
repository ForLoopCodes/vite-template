import React, { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react"; // Make sure to import your icon

// Define the type for the restaurant prop
interface Restaurant {
  id: string; // Assuming id is a string, change to number if needed
  name: string; // Add other properties as needed
  // Add other properties of the restaurant if necessary
}

interface RestaurantComponentProps {
  restaurant: Restaurant;
}

export const AddToCartButton: React.FC<RestaurantComponentProps> = ({
  restaurant,
}) => {
  const [count, setCount] = useState<number>(0); // State to hold the count of the restaurant in the cart

  useEffect(() => {
    // Check if the restaurant is already in the cart when the component mounts
    const currentCart = localStorage.getItem("cart");
    const cart: [number, string][] = currentCart ? JSON.parse(currentCart) : []; // Type the cart as an array of tuples
    const restaurantIndex = cart.findIndex((item) => item[1] === restaurant.id);

    if (restaurantIndex !== -1) {
      // If the restaurant is in the cart, set the count
      setCount(cart[restaurantIndex][0]);
    }
  }, [restaurant.id]);

  const handleAddToCart = () => {
    const currentCart = localStorage.getItem("cart");
    const cart: [number, string][] = currentCart ? JSON.parse(currentCart) : []; // Type the cart as an array of tuples
    const restaurantIndex = cart.findIndex((item) => item[1] === restaurant.id);

    if (restaurantIndex !== -1) {
      // If the restaurant is already in the cart, increment the count
      cart[restaurantIndex][0] += 1;
      setCount(cart[restaurantIndex][0]); // Update the state count
    } else {
      // If the restaurant is not in the cart, add it with a count of 1
      cart.push([1, restaurant.id]);
      setCount(1); // Set the count to 1
    }

    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const handleRemoveFromCart = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault(); // Prevent the default context menu from appearing

    const currentCart = localStorage.getItem("cart");
    const cart: [number, string][] = currentCart ? JSON.parse(currentCart) : []; // Type the cart as an array of tuples
    const restaurantIndex = cart.findIndex((item) => item[1] === restaurant.id);

    if (restaurantIndex !== -1) {
      // If the restaurant is in the cart, decrement the count
      if (cart[restaurantIndex][0] > 1) {
        cart[restaurantIndex][0] -= 1; // Decrement the count
        setCount(cart[restaurantIndex][0]); // Update the state count
      } else {
        // If the count is 1, remove the restaurant from the cart
        cart.splice(restaurantIndex, 1);
        setCount(0); // Reset the count
      }

      // Save the updated cart back to localStorage
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  return (
    <div
      className="w-10 h-10 absolute top-5 right-5 bg-white shadow-xl rounded-lg flex hover:scale-[1.1] items-center justify-center cursor-pointer"
      onClick={handleAddToCart}
      onContextMenu={handleRemoveFromCart} // Handle right-click to remove
    >
      {count > 0 ? (
        <span className="text-blue-600 font-bold">{count}</span> // Show count
      ) : (
        <ShoppingBag className="w-5 h-5 fill-blue-300 stroke-blue-600" /> // Show shopping bag icon
      )}
    </div>
  );
};
