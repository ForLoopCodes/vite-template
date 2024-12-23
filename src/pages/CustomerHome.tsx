import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import illustration from "/homeIllustration.png";
import { Building, Coins, Pin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CustomerHome = () => {
  const [searchHolder, setSearchHolder] = useState<string>(
    "🔍 Find me some delicious pizzas!"
  );
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

  useEffect(() => {
    const interval = setInterval(() => {
      setSearchHolder(
        searchList[Math.floor(Math.random() * searchList.length)]
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const foodList = [
    { name: "Pizzas", emoji: "🍕" },
    { name: "Burgers", emoji: "🍔" },
    { name: "Sushi", emoji: "🍣" },
    { name: "Ice Cream", emoji: "🍦" },
    { name: "Tacos", emoji: "🌮" },
    { name: "Ramen", emoji: "🍜" },
    { name: "Salads", emoji: "🥗" },
    { name: "Donuts", emoji: "🍩" },
    { name: "Pasta", emoji: "🍝" },
    { name: "Cookies", emoji: "🍪" },
  ];
  const firstRestaurants = [
    {
      name: "Restaurant 1",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.cFk7icN483HJD3wFnXXyawHaEo%26pid%3DApi&f=1&ipt=f87b3a58dc53eb9092bb6cc44c274d4ed6c217601fd3032663b72255d9d6e795&ipo=images",
      distance: "1.2 miles",
      rating: 4.5,
      priceRange: "$1-$3",
      specialty: "Pizzas",
    },
    {
      name: "Restaurant 2",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.79R9vNeEd0djN6RZhTfbAgHaE8%26pid%3DApi&f=1&ipt=2545450094051c6371e9d07820efec40c568c014221def5fb4df811190797015&ipo=images",
      distance: "3.0 miles",
      rating: 4.0,
      priceRange: "$2-$5",
      specialty: "Burgers",
    },
    {
      name: "Restaurant 3",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.7wDHMulrE73mXP3_oAkIlwHaEK%26pid%3DApi&f=1&ipt=065b64b94e89ddff7f039070d0b4553d0f4f17b86480f224e5d67d97dd6bee33&ipo=images",
      distance: "0.8 miles",
      rating: 4.8,
      priceRange: "$5-$10",
      specialty: "Sushi",
    },
    {
      name: "Restaurant 4",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.rvO-FyN5O8CBShQkyQmKcgHaE8%26pid%3DApi&f=1&ipt=bd5c4ee603aecdf5cefead2d20f81bad78162b731da4fe6a11a5071ebe07ff2f&ipo=images",
      distance: "2.5 miles",
      rating: 3.9,
      priceRange: "$1-$5",
      specialty: "Steaks",
    },
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

  return (
    <div className="bg-[#6ce8f911]">
      <div className="grid grid-rows-[auto_auto_1fr_auto] h-full text-foreground antialiased bg-[radial-gradient(#00000020_1px,_transparent_1px)] bg-[length:1rem_1rem]">
        <section className="w-screen lg:h-[80vh] lg:pt-24 pt-32 overflow-y-hidden flex flex-col justify-center items-center bg-gradient-to-b from-[#6ce8f9aa] to-transperant dark:from-neutral-900 dark:to-black">
          <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:p-0 lg:pl-10 p-5">
            <div className="lg:w-1/3 w-7/8">
              <h1
                className="text-6xl font-medium text-cyan-800 drop-shadow-lg my-2"
                style={{ fontFamily: "space grotesk" }}
              >
                Get food delivered, <br />
                <span
                  className="underline text-black"
                  style={{ fontFamily: "space grotesk" }}
                >
                  {" "}
                  within a blink.
                </span>
              </h1>
              <div className="flex flex-wrap lg:max-w-[40vw] max-w-[80vw] mb-6 mt-20 gap-2">
                {foodList.map((food, index) => (
                  <span
                    key={index}
                    className="p-1.5 shadow-xl px-4 rounded-full text-sm hover:scale-[1.1] border border-neutral-300 bg-white"
                  >
                    {food.emoji} {food.name}
                  </span>
                ))}
              </div>
              <Input
                placeholder={searchHolder}
                className="hover:scale-[1.05] w-[90vw] lg:w-full shadow-xl p-6 px-8 !text-base border border-neutral-300 rounded-xl focus-visible:scale-[1.02] !bg-white opacity-70 dark:text-neutral-900"
              />
            </div>
            <img src={illustration} className="w-[70vw] lg:w-auto" />
          </div>
        </section>
        <section className="w-screen flex flex-col justify-center items-center mb-10">
          <h1 className="text-sm font-semibold m-10 opacity-60">
            👇 top restaurants around you...
          </h1>
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
                      {restaurant.specialty} @{restaurant.priceRange}
                    </h1>
                    <h1 className="text-sm flex items-center text-base flex gap-1 text-blue-500">
                      <Pin className="w-4 fill-blue-300" />{" "}
                      {restaurant.distance}
                    </h1>
                  </div>
                </div>
              </span>
            ))}
          </div>
        </section>
        <section className="w-screen flex flex-col justify-center items-center mb-24 mt-40">
          <h1 className="md:text-9xl text-4xl scale-[2] text-center font-semibold opacity-10 mb-[-1.5rem] mt-10">
            Top food.
          </h1>
          <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 w-[70vw] justify-center m-5 gap-6">
            {famousFoods.map((food, index) => (
              <span
                key={index}
                className="w-[70vw] md:w-full h-16 relative shadow-2xl rounded-xl bg-white text-sm hover:scale-[1.02] border border-neutral-400 !bg-cover overflow-hidden"
              >
                <div className="h-full bg-opacity-100 px-5 py-3 backdrop-blur-xl w-full flex flex-col justify-center gap-1">
                  <div className="flex justify-between items-start">
                    <h1 className="text-base font-semibold"> {food.food}</h1>
                    <p className="text-base flex gap-1 text-sm text-cyan-700 flex justify-between items-center">
                      <Building className="w-4 fill-cyan-300" />
                      {food.numberOfRestaurants} Restaurants
                    </p>
                  </div>
                </div>
              </span>
            ))}
          </div>
        </section>
        <section className="w-screen pt-24 flex flex-col justify-center items-center bg-gradient-to-b from-transparent to-[#22ff8822]">
          <h1 className="md:text-9xl text-4xl scale-[2] text-center font-semibold opacity-10 mb-[-5rem] mt-20">
            Try these.
          </h1>
          <div
            className="w-2/3 flex items-center justify-center"
            style={{ zIndex: 2 }}
          >
            <div className="flex flex-wrap md:max-w-[40vw] mt-20 gap-2 justify-center">
              {searchList.map((searchTerm, index) => (
                <span
                  key={index}
                  className="p-1.5 shadow-xl px-4 rounded-full text-sm hover:scale-[1.02] border border-neutral-300 bg-white"
                >
                  {searchTerm}
                </span>
              ))}
            </div>
          </div>
        </section>
        <section className="w-screen flex flex-col justify-start pt-10 items-center bg-gradient-to-b from-[#22ff8822] to-[#d9fdef]">
          <Input
            placeholder={searchHolder}
            className="hover:scale-[1.02] shadow-xl p-6 px-8 md:w-1/3 w-[80vw] !text-base border border-neutral-300 rounded-xl focus-visible:scale-[1.02] !bg-white opacity-70 dark:text-neutral-900"
          />
          <h1 className="md:text-8xl text-4xl text-center w-3/4 font-semibold m-48 mt-64 opacity-10 text-black">
            We’ve got the perfect bite waiting for you!
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
