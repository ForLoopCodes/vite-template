import "./BlogStyles.css";
import { ArrowUp, ArrowUpRight } from "lucide-react";

export const HomeSocials = () => {
  // add priority opacity
  const socials = [
    {
      name: "GitHub",
      handle: "@forloopcodes",
      link: "https://www.github.com/forloopcodes",
    },
    {
      name: "X / Twitter",
      handle: "@forloopcodes",
      link: "https://twitter.com/forloopcodes",
    },
    {
      name: "Mail",
      handle: "meetnp1706@gmail.com",
      link: "mailto:meetnp1706@gmail.com",
    },
    {
      name: "Telegram",
      handle: "@forloopcodes",
      link: "https://t.me/forloopcodes",
    },
    {
      name: "YouTube",
      handle: "@forloopcodes",
      link: "https://youtube.com/@ForLoopCodes",
    },
    {
      name: "Resume",
      handle: "Download",
      link: "https://github.com/ForLoopCodes/ForLoopCodes/blob/main/Meet%20Patel%20Resume.pdf",
    },
    {
      name: "Discord 01",
      handle: "@forloop",
      link: "https://discord.com/users/967762715441504296",
    },
    {
      name: "LinkedIn",
      handle: "@forloopcodes",
      link: "https://linkedin.com/in/forloopcodes",
    },
    {
      name: "Discord 02",
      handle: "@forloopcodes",
      link: "https://discord.com/users/1014357327668850788",
    },
    {
      name: "Buy Me A Coffee",
      handle: "ForLoopCoffee",
      link: "https://www.buymeacoffee.com/forloopcoffee",
    },
  ];

  // LEETCODE MLSA

  return (
    <div className="">
      <div className="text-center">
        <div className="w-screen lg:px-48 px-10">
          <div className="grid grid-cols-1 gap-10 w-full">
            <div className="break-words h-full w-full">
              {socials.map((social) => (
                <a
                  key={social.name}
                  className={`flex justify-center tracking-wider items-center gap-3 text-green-300 hover:!text-green-300 hover:mx-2 py-2 rounded-lg shadow-[rgba(255,255,255,0.07)]`}
                  href={social.link}
                  target="_blank"
                >
                  <span className="geistMono text-md my-1 text-white flex items-center gap-2 opacity-90">
                    {social.name}:
                  </span>
                  {social.handle}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div
          className="fixed bottom-10 right-10 bg-neutral-800 rounded-2xl text-green-300 flex justify-center items-center shadow-xl w-14 h-14"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" }); // Smoothly scroll to the top
          }}
        >
          <ArrowUp />
        </div>
      </div>
    </div>
  );
};
