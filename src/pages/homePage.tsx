import { useState } from "react";
import Grid from "./Grid";
import { Keyboard } from "lucide-react";

export const HomePage = () => {
  const [viewDetails, setViewDetails] = useState(
    window.innerWidth >= 1200 ? true : true
  );
  const [terminalWidth, setTerminalWidth] = useState(
    window.innerWidth >= 1200 ? "80vw" : "100vw"
  );

  window.addEventListener("resize", () => {
    setViewDetails(window.innerWidth >= 1200 ? true : true);
    setTerminalWidth(window.innerWidth >= 1200 ? "80vw" : "100vw");
  }); /*
  const target = "ORLOOP CODES";
  const [name, setName] = useState<string>(target[0]);
  useEffect(() => {
    if (name.length < target.length)
      setTimeout(() => {
        setName(name + target[name.length]);
      }, 30);
  }, [name]);*/
  return (
    <div className="h-full min-h-screen w-screen overflow-x-hidden">
      <div className="h-full min-h-screen w-screen grid grid-rows-[auto_1fr_auto] h-full text-foreground antialiased bg-[radial-gradient(#ffffff33_1px,_transparent_1px)] bg-[length:1rem_1rem]">
        <div className="lg:text-4xl text-3xl flex flex-col items-center w-full text-center geistMono mt-40 mb-[-10vh] select-none relative text-neutral-500">
          {/* <p>F</p>*/}
          <p className="lg:w-1/2 px-14 pt-14">
            I provide{" "}
            <span className="!text-green-300 underline">
              MERN Full-Stack Solutions
            </span>{" "}
            to build the
            <span className="!text-neutral-200"> SaaS MVP </span>
            for your
            <span className="!text-neutral-200"> Startup. </span>I love{" "}
            <span className="!text-neutral-200 underline">
              Business, Machine Learning, Web3, Crypto, Hackathons
            </span>{" "}
            & Chess.
          </p>
          <p className="lg:w-1/2 px-14 pt-14 text-lg underline flex items-center gap-5 justify-around">
            <a href="/blog" className="!text-green-300">
              /BLOG
            </a>
            <a href="/skills" className="!text-green-300">
              /SKILLS
            </a>
            <a href="/projects" className="!text-green-300">
              /PROJECTS
            </a>
            <a href="/socials" className="!text-green-300">
              /SOCIALS
            </a>
          </p>
          {/*name.split("").map((char) => {
            return <p className="animate">{char}</p>;
          })*/}
          {/*<div className="absolute top-0 w-full left-0 blur-[4rem] brightness-[1.2] select-none saturate-[10]">
            {name}
          </div>*/}
        </div>
        <div className="!animation-none !scale-[0.8] lg:!scale-[0.6] hover:!scale-[0.8] lg:hover:!scale-[0.61] grid-container transition-timing-function-[var(--spring-intense)] rounded-[4rem]">
          <div
            className={
              "flex items-center justify-center w-full h-screen slide grid-container bg-neutral-800 bg-opacity-50 shadow-2xl" +
              (terminalWidth === "80vw" ? "  relative" : " relative")
            }
            style={{
              overflow: "hidden",
              zIndex: 0,
              transition: "ease-in-out !important",
              animation: "none",
            }}
          >
            <Grid
              showDetails={() => {
                viewDetails ? setViewDetails(false) : setViewDetails(true);
              }}
              viewDetails={viewDetails}
            />
          </div>
        </div>
        {/*<div
        className={
          "flex items-center justify-center w-full h-screen slide grid-container" +
          (terminalWidth === "80vw" ? " absolute top-[50vh]" : " relative")
        }
        style={{
          transition: "ease-in-out !important",
          transform: `translateY(${Math.max(
            (scrollPosition / window.screen.availHeight) * -100 + 2,
            -15
          )}rem) scale(${Math.min(
            (scrollPosition / window.screen.availHeight) * 2 + 0.9,
            1
          )})`,
          overflow: "hidden",
          zIndex: 10,
        }}
      >
        <div
          className={`w-full h-full rounded-3xl shadow-xl backdrop-blur-xl bg-opacity-[${
            (scrollPosition / window.screen.availHeight) * 2
          }] geistMono flex justify-center items-center`}
          style={{
            opacity: (scrollPosition / window.screen.availHeight) * 30,
            pointerEvents: scrollPosition > 1 ? "auto" : "none",
            transition: "",
          }}
        >
          FORLOOPCODES
        </div>
      </div>{" "}*/}
        <div className="lg:text-4xl hidden lg:flex text-sm flex-col items-center w-full text-center geistMono mt-[-26vh] select-none relative text-neutral-500">
          <p className="lg:w-[64.1vw] gap-2 px-14 pt-14 text-sm flex items-center justify-end">
            <a className="!text-green-300 flex items-center justify-center gap-2 rounded bg-green-300 bg-opacity-20 px-2 py-1 border border-green-400 opacity-80">
              <Keyboard className="w-4 h-4" strokeWidth={2} /> 0
            </a>{" "}
            <a className="!text-green-300 flex items-center justify-center gap-2 rounded bg-green-300 bg-opacity-20 px-2 py-1 border border-green-400 opacity-80">
              <Keyboard className="w-4 h-4" strokeWidth={2} /> 1
            </a>{" "}
            <a className="!text-green-300 flex items-center justify-center gap-2 rounded bg-green-300 bg-opacity-20 px-2 py-1 border border-green-400 opacity-80">
              <Keyboard className="w-4 h-4" strokeWidth={2} /> 2
            </a>{" "}
            <a className="!text-green-300 flex items-center justify-center gap-2 rounded bg-green-300 bg-opacity-20 px-2 py-1 border border-green-400 opacity-80">
              <Keyboard className="w-4 h-4" strokeWidth={2} /> 3
            </a>{" "}
            <a className="!text-green-300 flex items-center justify-center gap-2 rounded bg-green-300 bg-opacity-20 px-2 py-1 border border-green-400 opacity-80">
              <Keyboard className="w-4 h-4" strokeWidth={2} /> 4
            </a>{" "}
            <a className="!text-green-300 flex items-center justify-center gap-2 rounded bg-green-300 bg-opacity-20 px-2 py-1 border border-green-400 opacity-80">
              <Keyboard className="w-4 h-4" strokeWidth={2} /> 5
            </a>{" "}
            <a className="!text-green-300 flex items-center justify-center gap-2 rounded bg-green-300 bg-opacity-20 px-2 py-1 border border-green-400 opacity-80">
              <Keyboard className="w-4 h-4" strokeWidth={2} /> R
            </a>
          </p>
          {/*name.split("").map((char) => {
            return <p className="animate">{char}</p>;
          })*/}
          {/*<div className="absolute top-0 w-full left-0 blur-[4rem] brightness-[1.2] select-none saturate-[10]">
            {name}
          </div>*/}
        </div>
      </div>
    </div>
  );
};
