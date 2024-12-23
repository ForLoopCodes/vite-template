import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  CookingPot,
  Hotel,
  Phone,
  Pin,
  ShoppingBag,
  SoupIcon,
  Star,
} from "lucide-react";
import { backendUrl } from "@/devconfig";
import { AddToCartButton } from "@/components/customElements/addToCartButton";

interface RestaurantPageProps {
  initialId: string | "";
}

export const RestaurantPage: React.FC<RestaurantPageProps> = ({
  initialId: initialId,
}) => {
  const [restaurantData, setRestaurantData] = useState<any>({});
  const [menuItemsData, setMenuItemsData] = useState<any[]>([{}]);

  const footerLinks = [
    {
      label: "Who We Are",
      url: "/who-we-are",
    },
    {
      label: "Contact Us",
      url: "/contact-us",
    },
    {
      label: "Restaurant Register",
      url: "/restaurant-register",
    },
    {
      label: "Work With Us",
      url: "/work-with-us",
    },
    {
      label: "Register as Delivery Person",
      url: "/register-as-delivery-person",
    },
  ];

  useEffect(() => {
    getData();
    getFoodData();
  }, []);

  const getData = () => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(
          "https://instant-eats-back.vercel.app/restaurants/" + initialId,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setRestaurantData(data);
      } catch (error) {
        console.error("Error during GET request:", error);
      }
    };

    fetchRestaurants();
  };

  const getFoodData = () => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(backendUrl + "/menu_items/filter", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            filters: {
              restaurant_id: initialId,
            },
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Response data:", data.data);
        setMenuItemsData([...data.data]);
      } catch (error) {
        console.error("Error during POST request:", error);
      }
    };

    fetchRestaurants();
  };
  return (
    <div className="bg-[#6ce8f911]">
      <div className="grid grid-rows-[auto_auto_1fr_auto] h-full text-foreground antialiased bg-[radial-gradient(#00000020_1px,_transparent_1px)] bg-[length:1rem_1rem]">
        <section className="w-screen flex flex-col justify-start items-center mt-40">
          <div
            className="h-[50vh] mb-[-10vh] w-[70vw] rounded-t-3xl shadow-xl cover"
            style={{
              background: `url(${menuItemsData[0].image})`,
            }}
          />
          <div className="w-[70vw] p-8 rounded-3xl bg-opacity-70 backdrop-blur-2xl shadow-xl bg-white justify-between">
            <h1 className="text-3xl font-semibold mb-3">
              {restaurantData.name}
            </h1>
            <div className="flex gap-1.5 items-center text-sm mb-5">
              {[...Array(5)].map((_, i) => (
                <div key={i}>
                  <Star
                    className={`w-6 h-6 opacity-80 hover:scale-[1.1] hover:fill-yellow-500
                  ${
                    i < restaurantData.rating
                      ? "fill-yellow-400 text-orange-400"
                      : "text-neutral-900"
                  }`}
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center text-base text-teal-700">
                <SoupIcon className="w-5 h-5" />
                {restaurantData.cuisine_type}
              </div>
              <div className="flex gap-2 items-center text-base text-orange-500">
                <CookingPot className="w-5 h-5" />
                Food ready within {restaurantData.cooking_time} minutes
              </div>
              <div className="flex gap-2 items-center text-base text-blue-700">
                <Hotel className="w-5 h-5" />
                {restaurantData.is_open ? "Open Now! " : "Closed "}(
                {restaurantData.opens_at + " -> " + restaurantData.closes_at})
              </div>{" "}
              <div className="flex gap-2 items-center text-base text-neutral-500">
                <Pin className="w-5 h-5" />
                {restaurantData.location}
              </div>
              <div className="flex gap-2 items-center text-base text-neutral-500">
                <Phone className="w-5 h-5" />
                {restaurantData.phone_number}
              </div>
            </div>
            <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 md:w-[70vw] w-[85vw] justify-center mt-10 gap-6">
              {menuItemsData.map((restaurant, index) => (
                <span
                  key={index}
                  className="w-[70vw] relative md:w-full h-96 relative shadow-2xl rounded-xl bg-white text-sm hover:scale-[1.02] border border-neutral-400 !bg-cover overflow-hidden"
                >
                  <div
                    className="h-5/6 w-full !bg-cover overflow-hidden rounded-xl shadow-xl"
                    style={{ backgroundImage: `url(${restaurant.image})` }}
                  ></div>
                  <AddToCartButton restaurant={restaurant} />
                  <div className="h-1/6 bg-opacity-100 px-5 py-3 backdrop-blur-xl w-full flex flex-col justify-center gap-1">
                    <div className="flex justify-between items-start">
                      <h1 className="text-base font-semibold">
                        {" "}
                        {restaurant.name}
                      </h1>
                      <p className="text-base flex gap-1 text-sm text-orange-500 flex justify-between items-center">
                        <Star className="w-4 fill-yellow-300" />
                        {restaurant.rating}
                      </p>
                    </div>
                  </div>
                </span>
              ))}
            </div>
          </div>
        </section>{" "}
        <section className="w-screen flex flex-col justify-start pt-10 items-center bg-gradient-to-b from-[#f5fdff22] to-[#d9fdef]">
          <h1 className="md:text-8xl text-4xl text-center w-3/4 font-semibold m-48 mt-32 opacity-10 text-black">
            {restaurantData
              ? "We’ve got the perfect bite waiting for you!"
              : "Try searching for something different!"}
          </h1>
          <div className="w-2/3 flex items-center justify-center">
            <div className="flex max-w-[80vw] flex-wrap gap-3 items-center max-w-[40vw] mb-6 mt-20 justify-center">
              •
              {footerLinks.map((link, index) => (
                <>
                  <Button
                    variant="link"
                    key={index}
                    className="p-1.5 px-4 text-sm"
                  >
                    {link.label}
                  </Button>
                  •
                </>
              ))}
            </div>{" "}
          </div>
        </section>
      </div>
    </div>
  );
};
