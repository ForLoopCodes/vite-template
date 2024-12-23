import { useState } from "react";
import Grid from "./Grid";
import { Keyboard } from "lucide-react";
import { HomeBlogLinks } from "./homeBlogLinks";
import { HomeSkills } from "./homeSkills";
import { HomeProjects } from "./homeProjects";
import { HomeSocials } from "./homeSocials";
import { Link } from "react-router-dom";

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
            <span className="!text-neutral-200 underline">Business, </span>
            <span className="!text-green-300 underline">
              Machine Learning, Web3,{" "}
            </span>
            <span className="!text-neutral-200 underline">
              Crypto, Hackathons
            </span>{" "}
            & Chess.
          </p>
          <p className="lg:w-1/2 w-[90vw] px-14 pt-14 text-lg underline flex wrap items-center gap-10 justify-center">
            <Link to="/skills" className="!text-green-300">
              /SKILLS
            </Link>
            <Link to="/blog" className="!text-green-300">
              /BLOG
            </Link>
            <Link to="/projects" className="!text-green-300">
              /PROJECTS
            </Link>
            <Link to="/socials" className="!text-green-300">
              /SOCIALS
            </Link>
          </p>
          <p className="lg:w-1/2 w-[90vw] px-14 pt-2 text-lg underline flex wrap items-center gap-10 justify-center">
            <Link to="/timeline" className="!text-green-300">
              /TIMELINE
            </Link>
            <Link to="/hackathons" className="!text-green-300">
              /HACKATHONS
            </Link>
            <Link to="/goals" className="!text-green-300">
              /GOALS
            </Link>
          </p>
          {/*name.split("").map((char) => {
            return <p className="animate">{char}</p>;
          })*/}
          {/*<div className="absolute top-0 w-full left-0 blur-[4rem] brightness-[1.2] select-none saturate-[10]">
            {name}
          </div>*/}
        </div>
        <div className="!animation-none !scale-[0.8] lg:!scale-[0.6] hover:!scale-[0.8] lg:hover:!scale-[0.6] grid-container transition-timing-function-[var(--spring-intense)] rounded-[4rem]">
          <div
            className={
              "flex items-center justify-center w-full h-screen slide grid-container bg-neutral-800 bg-opacity-50 shadow-2xl" +
              (terminalWidth === "80vw" ? "  relative" : " relative")
            }
            style={{
              overflow: "hidden",
              zIndex: 10000,
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
        <div className="lg:text-4xl hidden lg:flex text-sm flex-col items-center w-full text-center geistMono mt-[-20vh] select-none relative text-neutral-500">
          <p className="lg:w-[64.1vw] gap-2 px-14 text-sm flex items-center justify-end">
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
        <div className="mt-[-10vh] geistMono flex flex-col items-center">
          {" "}
          <p className="lg:w-1/2 px-14 mt-14 mb-[-4vh] text-lg text-center text-neutral-400">
            {new Date().getFullYear() - 2006}, from India,
            <br />
            you match my vibe if you're interested in{" "}
            <span className="!text-white">
              Public Speaking, GATE, Aptitude, Reasoning
            </span>{" "}
            and A LOT OF{" "}
            <span className="!text-green-300 underline">TECH SKILLS</span>.
          </p>
          <HomeSkills />
        </div>
        <div className="mt-[-10vh] geistMono flex flex-col items-center">
          {" "}
          <p className="lg:w-1/2 px-14 mt-5 mb-[10vh] text-2xl text-center text-neutral-400">
            <span className="!text-green-300 underline">
              {new Date().getFullYear() - 2018} Years
            </span>
            <br /> of coding knowledge with
            <br />
            <span className="!text-green-300 underline">
              {new Date().getFullYear() - 2020} Years
            </span>
            <br /> of development experience.
          </p>
          <HomeProjects />
        </div>{" "}
        <div className="mt-[-10vh] geistMono flex flex-col items-center">
          {" "}
          <p className="lg:w-1/2 px-14 mt-5 mb-[10vh] text-lg text-center text-neutral-400">
            and... sometimes I get a lot on my mind so I write it out as{" "}
            <span className="!text-green-300 underline">blogs</span>. <br />
          </p>
          <HomeBlogLinks />
        </div>{" "}
        <div className="geistMono flex flex-col items-center">
          {" "}
          <p className="lg:w-1/2 px-14 m-10 mt-20 text-lg text-center text-neutral-400">
            mom! i'm famous online!
            <br />
            yeah, i know i've arranged the links in a pattern.
          </p>
          <HomeSocials />
        </div>
        <div className="geistMono flex flex-col items-center">
          {" "}
          <p className="lg:w-1/2 px-14 my-48 text-lg text-center text-neutral-400">
            {new Date().getFullYear()} - {new Date().getFullYear() + 1}{" "}
            FORLOOPCODES
            <br />
            <p>"Who's the god?"</p>
            <p>come on, stop stalking</p>
          </p>
        </div>
      </div>
    </div>
  );
};
