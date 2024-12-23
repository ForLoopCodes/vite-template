import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import {
  ArrowLeftCircle,
  ArrowRightCircle,
  Clock,
  Coins,
  Pin,
  SortDesc,
  Star,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { backendUrl } from "@/devconfig";

interface CustomerSearchProps {
  initialQuery: string | "";
}

export const CustomerSearch: React.FC<CustomerSearchProps> = ({
  initialQuery,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>(initialQuery);
  const [searchHolder, setSearchHolder] = useState<string>(
    "🔍 Find me some delicious pizzas!"
  );
  const [query, setQuery] = useState<string>(initialQuery);
  const [location, setLocation] = useState<string>("");
  const [rating, setRating] = useState<number>(4);
  const [cookingTime, setCookingTime] = useState<number>(90);
  const [radius, setRadius] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [filter, setFilter] = useState<string>("rating");
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const [nextPageExists, setNextPageExists] = useState<boolean>(true);
  const [firstRestaurants, setFirstRestaurants] = useState<any[]>([]);
  const searchList = [
    "🔍 Find me some delicious pizzas!",
    "🔍 Searching for the best burgers!",
    "🔍 How about some sushi today?",
    "🔍 Craving some ice cream!",
    "🔍 Let’s grab some tacos!",
    "🔍 I’m in the mood for ramen!",
    "🔍 A healthy salad sounds great!",
    "🔍 Who doesn’t love donuts?",
    "🔍 A bowl of pasta would be awesome!",
    "🔍 Want some fresh cookies?",
  ];
  const famousFoods = [
    {
      food: "Pizza 🍕",
      numberOfRestaurants: 50,
    },
    {
      food: "Burgers 🍔",
      numberOfRestaurants: 40,
    },
    {
      food: "Sushi 🍣",
      numberOfRestaurants: 30,
    },
    {
      food: "Pasta 🍝",
      numberOfRestaurants: 25,
    },
    {
      food: "Tacos 🌮",
      numberOfRestaurants: 35,
    },
    {
      food: "Burritos 🌯",
      numberOfRestaurants: 28,
    },
    {
      food: "Steaks 🥩",
      numberOfRestaurants: 22,
    },
    {
      food: "Salads 🥗",
      numberOfRestaurants: 18,
    },
    {
      food: "Ice Cream 🍨",
      numberOfRestaurants: 40,
    },
    {
      food: "Pancakes 🥞",
      numberOfRestaurants: 15,
    },
    {
      food: "Donuts 🍩",
      numberOfRestaurants: 30,
    },
    {
      food: "Fried Chicken 🍗",
      numberOfRestaurants: 45,
    },
  ];
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

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              console.error("User denied the request for Geolocation.");
              break;
            case error.POSITION_UNAVAILABLE:
              console.error("Location information is unavailable.");
              break;
            case error.TIMEOUT:
              console.error("The request to get user location timed out.");
              break;
            default:
              console.error("An unknown error occurred.");
              break;
          }
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSearchHolder(
        searchList[Math.floor(Math.random() * searchList.length)]
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (!firstRestaurants.length && !initialQuery) {
      getData();
    }
  }, []);
  useEffect(() => {
    getData();
  }, [rating, filter, page]);
  if (!latitude && !longitude) {
    getUserLocation();
  }

  const getData = () => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(backendUrl + "/restaurants/filter", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            filters: {
              query: query,
              location: location,
              rating: rating,
              cooking_time: cookingTime,
              radius: radius,
              latitide: latitude,
              longitude: longitude,
            },
            pagination: {
              page: page,
              limit: 16,
            },
            sort: {
              column: filter,
              ascending: filter == "rating" ? 0 : 1,
            },
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Response data:", data.data);
        setFirstRestaurants(data.data);
        setSearchTerm(query);
        checkNextPage();
      } catch (error) {
        console.error("Error during POST request:", error);
      }
    };

    fetchRestaurants();
  };
  const checkNextPage = () => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(backendUrl + "/restaurants/filter", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            filters: {
              query: query,
              location: location,
              rating: rating,
              cooking_time: cookingTime,
              radius: radius,
              latitide: latitude,
              longitude: longitude,
            },
            pagination: {
              page: page + 1,
              limit: 16,
            },
            sort: {
              column: filter,
              ascending: filter == "rating" ? 1 : 0,
            },
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("data", data);
        setNextPageExists(data.data.length != 0);
      } catch (error) {
        console.error("Error during POST request:", error);
      }
    };

    fetchRestaurants();
  };
  const handleKeyPress = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      query && getData();
    }
  };
  return (
    <div className="bg-[#6ce8f911]">
      <div className="grid grid-rows-[auto_auto_1fr_auto] h-full text-foreground antialiased bg-[radial-gradient(#00000020_1px,_transparent_1px)] bg-[length:1rem_1rem]">
        <section className="w-screen flex flex-col justify-start items-center mt-40">
          <h1 className="text-base font-semibold w-[90vw] lg:w-[70vw] m-5 opacity-60">
            {searchTerm
              ? `Search results for ${searchTerm}`
              : "😋 Search for a dish or restaurant."}
          </h1>
          <div className="flex gap-5 pb-5">
            <Input
              placeholder={searchHolder}
              className="hover:scale-[1.02] w-[80vw] lg:w-[60vw] shadow-xl p-6 px-8 !text-base border border-neutral-300 rounded-xl focus-visible:scale-[1.02] !bg-white opacity-70 dark:text-neutral-900"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <Input
              placeholder={"Enter a Location"}
              className="hover:scale-[1.05] w-[10vw] lg:w-[10vw] shadow-xl p-6 px-8 !text-base border border-neutral-300 rounded-xl focus-visible:scale-[1.02] !bg-white opacity-70 dark:text-neutral-900"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyDown={handleKeyPress}
            />
          </div>
          <div className="flex gap-5 pb-5 items-center">
            {page > 1 && (
              <div
                className="hover:scale-[1.05] flex justify-center items-center gap-1.5 px-4 py-3 shadow-xl !text-base border border-neutral-300 rounded-xl focus-visible:scale-[1.02] !bg-white opacity-70 dark:text-neutral-900"
                onClick={() => setPage(page - 1)}
              >
                <h1 className="text-lg text-neutral-800">
                  <ArrowLeftCircle className="w-5" />
                </h1>
              </div>
            )}
            <div className="flex justify-center gap-1.5 shadow-xl p-3 px-4 items-center !text-base border border-neutral-300 rounded-xl focus-visible:scale-[1.02] !bg-white opacity-70 dark:text-neutral-900">
              <h1 className="text-base text-black mr-2">Rating</h1>
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setRating(i + 1);
                  }}
                >
                  <Star
                    className={`w-5 h-5 opacity-80 hover:scale-[1.1] hover:fill-yellow-500
                  ${
                    i < rating
                      ? "fill-yellow-400 text-orange-400"
                      : "text-neutral-900"
                  }`}
                  />
                </div>
              ))}
            </div>
            <div className="hover:scale-[1.05] flex justify-center items-center gap-1.5 w-[10vw] lg:w-[10vw] px-3 py-1.5 shadow-xl !text-base border border-neutral-300 rounded-xl focus-visible:scale-[1.02] !bg-white opacity-70 dark:text-neutral-900">
              <h1 className="text-lg text-neutral-800">
                <Clock className="w-5" />
              </h1>
              <Input
                className="shadow-xl p-4 px-2 text-center !text-base border border-neutral-300 rounded-xl focus-visible:scale-[1.02]"
                value={cookingTime}
                type="number"
                onChange={(e) => setCookingTime(eval(e.target.value))}
                onKeyDown={handleKeyPress}
              />
              <h1 className="text-base text-black">mins</h1>
            </div>
            <div className="hover:scale-[1.05] flex justify-center items-center gap-1.5 w-[10vw] lg:w-[10vw] px-3 py-1.5 shadow-xl !text-base border border-neutral-300 rounded-xl focus-visible:scale-[1.02] !bg-white opacity-70 dark:text-neutral-900">
              <h1 className="text-lg text-neutral-800">
                <Target className="w-5" />
              </h1>
              <Input
                className="shadow-xl p-4 px-2 text-center !text-base border border-neutral-300 rounded-xl focus-visible:scale-[1.02]"
                value={radius}
                type="number"
                onChange={(e) => setRadius(eval(e.target.value))}
                onKeyDown={handleKeyPress}
              />
              <h1 className="text-base text-black">kms</h1>
            </div>
            <div className="hover:scale-[1.05] flex justify-center items-center gap-1.5 w-[10vw] lg:w-[10vw] px-3 py-1.5 shadow-xl !text-base border border-neutral-300 rounded-xl focus-visible:scale-[1.02] !bg-white opacity-70 dark:text-neutral-900">
              <h1 className="text-lg text-neutral-800">
                <SortDesc className="w-5" />
              </h1>

              <Select onValueChange={(value) => setFilter(value)}>
                <SelectTrigger className="shadow-xl p-4 px-2 text-center !text-base border border-neutral-300 rounded-xl focus-visible:scale-[1.02]">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="cooking_time">Cooking Time</SelectItem>
                  <SelectItem value="distance">Distance</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {nextPageExists && (
              <div
                className="hover:scale-[1.05] flex justify-center items-center gap-1.5 px-4 py-3 shadow-xl !text-base border border-neutral-300 rounded-xl focus-visible:scale-[1.02] !bg-white opacity-70 dark:text-neutral-900"
                onClick={() => setPage(page + 1)}
              >
                <h1 className="text-lg text-neutral-800">
                  <ArrowRightCircle className="w-5" />
                </h1>
              </div>
            )}
          </div>
          {!searchTerm ? (
            <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 w-[70vw] justify-center m-5 mt-10 gap-6">
              {famousFoods.map((food, index) => (
                <span
                  key={index}
                  className="w-[70vw] md:w-full h-16 relative shadow-2xl cursor-pointer rounded-xl bg-neutral-50 bg-opacity-80 text-sm hover:scale-[1.02] border border-neutral-400 overflow-hidden"
                >
                  <Link to={"/search/" + food.food}>
                    <div className="h-full bg-opacity-10 px-5 py-3 backdrop-blur-xl w-full flex flex-col justify-center gap-1">
                      <div className="flex justify-center items-start">
                        <h1 className="text-base font-semibold">
                          {" "}
                          {food.food}
                        </h1>
                        {/* <p className="text-base flex gap-1 text-sm text-cyan-700 flex justify-between items-center">
                        <Building className="w-4 fill-cyan-300" />
                        {food.numberOfRestaurants} Restaurants
                      </p>*/}
                      </div>
                    </div>
                  </Link>
                </span>
              ))}
            </div>
          ) : (
            ""
          )}
          <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 md:w-[70vw] w-[85vw] justify-center m-5 gap-6">
            {firstRestaurants.map((restaurant, index) => (
              <span
                key={index}
                className="w-[70vw] md:w-full h-96 relative shadow-2xl rounded-xl bg-white text-sm hover:scale-[1.02] border border-neutral-400 !bg-cover overflow-hidden"
              >
                <div
                  className="h-3/4 w-full !bg-cover overflow-hidden rounded-xl shadow-xl"
                  style={{ backgroundImage: `url(${restaurant.img})` }}
                ></div>
                <div className="h-1/4 bg-opacity-100 px-5 py-3 backdrop-blur-xl w-full flex flex-col justify-center gap-1">
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
                  <div className="flex justify-between items-start">
                    <h1 className="text-sm flex items-center text-base flex gap-1 text-teal-700">
                      <Coins className="w-4 fill-teal-300" />
                      {restaurant.cuisine_type}
                    </h1>
                    <h1 className="text-sm flex items-center text-base flex gap-1 text-blue-500">
                      <Pin className="w-4 fill-blue-300" />{" "}
                      {parseFloat(
                        restaurant.distance.toString().split(" ")[0]
                      ) < 1
                        ? `${
                            Math.round(
                              (parseFloat(
                                restaurant.distance.toString().split(" ")[0]
                              ) *
                                1000) /
                                100
                            ) * 100
                          } m`
                        : `${
                            Math.round(
                              parseFloat(
                                restaurant.distance.toString().split(" ")[0]
                              ) * 10
                            ) / 10
                          } km`}
                    </h1>
                  </div>
                </div>
              </span>
            ))}
          </div>
        </section>{" "}
        <section className="w-screen flex flex-col justify-start pt-10 items-center bg-gradient-to-b from-[#f5fdff22] to-[#d9fdef]">
          <h1 className="md:text-8xl text-4xl text-center w-3/4 font-semibold m-48 mt-32 opacity-10 text-black">
            {!(firstRestaurants.length == 0)
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
