import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, PinIcon, ShoppingBag, Star } from "lucide-react";
import { Input } from "../ui/input";

interface AppHeaderProps {
  isLoggedIn?: boolean;
  userType: "customer" | "restaurant" | "driver";
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  isLoggedIn = false,
  userType = "customer",
}) => {
  const [searchHolder, setSearchHolder] = useState<string>(
    "🔍 Find me some delicious pizzas!"
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setSearchHolder(
        [
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
        ][Math.floor(Math.random() * 10)]
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-[80vw] md:h-16 h-24 overflow-x-hidden fixed z-10 rounded-2xl overflow-hidden bg-transparent dark:bg-neutral-900 backdrop-blur-lg bg-opacity-50 fixed flex justify-between items-center top-5 shadow-xl left-[50%]"
      style={{ transform: "translateX(-50%)" }}
    >
      <div className="w-full flex flex-col md:flex-row p-2 justify-between items-center bg-white bg-opacity-80 md:px-4 md:px-10 h-full">
        <div className="flex items-center gap-10 w-full">
          <p
            className="dark:hidden flex font-bold text-xl hidden lg:flex"
            style={{ fontFamily: "space mono" }}
          >
            Instant.
          </p>
          <p
            className="text-black font-bold text-xl hidden dark:lg:flex"
            style={{ fontFamily: "space mono" }}
          >
            Instant
          </p>
          {userType == "customer" ? (
            <Input
              placeholder={searchHolder}
              className="hover:scale-[1.05] focus-visible:scale-[1.05] rounded-xl xl:!w-1/2 w-full !bg-white opacity-70 dark:text-neutral-900"
            />
          ) : (
            <></>
          )}
        </div>
        <div className="flex items-center gap-5">
          {userType == "customer" ? (
            <div className="flex items-center">
              <Button variant="link" className="hover:scale-[1.05]">
                <PinIcon className="w-5 h-5" />{" "}
                <p className="">Sector 301, Location</p>
              </Button>
              <Button variant="link" className="hover:scale-[1.05]">
                <ShoppingBag className="w-5 h-5" />
                <p className="hidden xl:inline-block"> Your Order</p>
              </Button>
              <Button variant="link" className="hover:scale-[1.05]">
                <Star className="w-5 h-5" />
                <p className="hidden xl:inline-block">Favourites</p>
              </Button>
              <Button variant="link" className="hover:scale-[1.05]">
                <Bell className="w-5 h-5" />
              </Button>
            </div>
          ) : (
            <></>
          )}
          {userType == "restaurant" ? (
            <div className="flex items-center gap-5">
              <Button variant="link">All Orders</Button>
            </div>
          ) : (
            <></>
          )}
          {userType == "driver" ? (
            <div className="flex items-center gap-5">
              <Button variant="link">Your Order</Button>
            </div>
          ) : (
            <></>
          )}
          {isLoggedIn ? (
            <Avatar className="h-8 w-8 hover:scale-[1.1]">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          ) : (
            <div className="flex gap-4 items-center">
              <Button variant={"link"} className=" hover:scale-[1.1]">
                Log in
              </Button>
              <Button
                size={"sm"}
                className="bg-red-500 hover:bg-red-800 hover:scale-[1.1]"
              >
                {" "}
                Sign Up
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
