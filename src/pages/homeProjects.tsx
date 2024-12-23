import "./BlogStyles.css";
import { ArrowUp, ArrowUpRight } from "lucide-react";

export const HomeProjects = () => {
  // add priority opacity
  const projects = [
    {
      title: "2024 - Top Work",
      projects: [
        {
          name: "Studium",
          description:
            "Studium will revolutionize learning strategies for competitive exams by 2025. (Please contact me for more information on this project.)",
          skills: [],
          links: [
            {
              name: "Contact",
              link: "mailto:meetnp1706@gmail.com",
            },
          ],
        },
        {
          name: "Instant-eats",
          description:
            "Instant-Eats is a modern food delivery application designed to provide users with a seamless and efficient way to order their favorite meals from local restaurants.",
          skills: [
            "Supabase",
            "Express.js",
            "PostgreSQL",
            "Node.js",
            "JavaScript",
            "React-TSX",
            "TypeScript",
            "Vite",
            "RazorPay",
            "Google Maps API",
            "TailwindCSS",
            "ShadCN/UI",
          ],
          links: [
            {
              name: "Frontend - GitHub",
              link: "https://github.com/ForLoopCodes/instant-eats",
            },
            {
              name: "Backend - API (undocumented)",
              link: "https://instant-eats-back.vercel.app",
            },
            {
              name: "Frontend - Website",
              link: "https://instant-eats-sandy.vercel.app",
            },
          ],
        },
        {
          name: "Chess Engine from scratch",
          description:
            "Tried to make a Chess Engine from scretch in Node.js, Programmed piece placement, movement, predictions (worked a little), etc. Later figured out parallel processing is not possible in JS.",
          skills: ["Node.js"],
          links: [
            {
              name: "GitHub",
              link: "https://github.com/ForLoopCodes/Chess-Engine",
            },
            {
              name: "Website",
              link: "https://click-speed-test-xi.vercel.app/",
            },
          ],
        },
      ],
    },
    {
      title: "2024 - Hackathons + Mini Projects",
      projects: [
        {
          name: "Twegion",
          description:
            "Twegion is an innovative Mistral AI-powered bot that specializes in generating engaging and attractive Twitter threads focused on business topics.",
          skills: [
            "React-TSX",
            "Node.js",
            "JavaScript",
            "TypeScript",
            "Mistral AI",
            "TailwindCSS",
          ],
          links: [
            {
              name: "Website",
              link: "https://twegion.vercel.app/",
            },

            {
              name: "GitHub",
              link: "https://github.com/ForLoopCodes/Twegion",
            },
          ],
        },
        {
          name: "Wastrack",
          description:
            "Water usage detector and notifier app developed for the Web Horizons Hackathon. The app features a minimal UI that allows users to easily monitor their water consumption and receive notifications for excessive usage.",
          skills: [
            "React-TSX",
            "Vite",
            "TailwindCSS",
            "TypeScript",
            "ShadCN/UI",
            "Node.js",
            "JavaScript",
          ],
          links: [
            {
              name: "GitHub",
              link: "https://github.com/ForLoopCodes/wastrack",
            },
            {
              name: "Website",
              link: "https://wastrack-master-main.vercel.app/",
            },
          ],
        },
        {
          name: "Yousum",
          description:
            "YouSum is designed to transform lengthy and complex video content into concise, actionable insights. This allows users to grasp key concepts quickly and effectively, making learning more efficient. I made this for Postman API Challenge Hackathon.",
          skills: [
            "React",
            "Node.js",
            "JavaScript",
            "Gemini-API",
            "Python Gemini API",
            "Youtube API",
            "Prompt Engineering",
            "ShadCN/UI",
            "TailwindCSS",
          ],
          links: [
            {
              name: "YouTube",
              link: "https://www.youtube.com/watch?v=-tHiyrfzYeY",
            },
          ],
        },
        {
          name: "What-nxt",
          description:
            'An event booking app I made for "Out-of-context" Hackathon at IIIT Allahabad.',
          skills: [
            "React",
            "Node.js",
            "JavaScript",
            "TailwindCSS",
            "ShadCN/UI",
          ],
          links: [
            {
              name: "GitHub",
              link: "https://github.com/ForLoopCodes/what-nxt-frontend",
            },
            {
              name: "Website (routes don't work)",
              link: "https://what-nxt.vercel.app/",
            },
          ],
        },

        {
          name: "Youtube Downloader",
          description:
            "A python script that helps you download a youtube video to your computer.",
          skills: ["Python"],
          links: [
            {
              name: "GitHub",
              link: "https://github.com/ForLoopCodes/py-youtube-downloader",
            },
          ],
        },
        {
          name: "Click Speed Test",
          description:
            "A simple and interactive Click Speed Test game built using HTML, CSS (Tailwind), and JavaScript.",
          skills: ["HTML", "CSS", "TailwindCSS", "JavaScript"],
          links: [
            {
              name: "GitHub",
              link: "https://github.com/ForLoopCodes/click-speed-test",
            },
            {
              name: "Website",
              link: "https://click-speed-test-xi.vercel.app/",
            },
          ],
        },
      ],
    },
    {
      title: "2023",
      projects: [
        {
          name: "Ch$rry Network",
          description:
            "Crafted a website for Ch$rry Network, a Discord bot company, emphasizing their outstanding services and user-friendly bots.",
          skills: ["Svelte", "Tailwind", "JS", "AOS"],
          links: [
            {
              name: "Ch$rry Network",
              link: "https://cherrybot.xyz",
            },
          ],
        },
        {
          name: "Darklone Merch Website",
          description:
            "Developed a merch website for Darklone (a YouTube channel), the deal was cancelled but continued working on it. Result: Attractive and minimal, fully functional website!",
          skills: ["React-JSX", "JavaScript", "Tailwind", "Node.js"],
          links: [
            {
              name: "GitHub",
              link: "https://github.com/forloopcodes/react-ecommerce",
            },
          ],
        },
        {
          name: "AI Chess - ChessGPT",
          description:
            "ChessGPT used an AI-based chess API to play chess against user, Rather it be any environment - Terminal, Discord or Application, it works!",
          skills: [
            "Python",
            "JavaScript",
            "Discord.js",
            "Node.js",
            "Express.js",
          ],
          links: [
            {
              name: "GitHub",
              link: "https://github.com/ForLoopCodes/ChessGPT-API",
            },
            {
              name: "API",
              link: "https://chessgpt-api.vercel.app/",
            },
          ],
        },
        {
          name: "Starton",
          description:
            "A browser startup page designed with AI summaries, terminal-like UI with multi-search-engine support, calculator. (and an easter egg)",
          skills: ["JavaScript", "HTML", "CSS"],
          links: [
            {
              name: "GitHub",
              link: "https://github.com/ForLoopCodes/starton",
            },
            {
              name: "Website",
              link: "https://forloopcodes.github.io/starton/",
            },
          ],
        },
      ],
    },
    {
      title: "2022",
      projects: [
        {
          name: "Water",
          description:
            "Water is a note-making application created with react.js and based on markdown, minimal, easy to use, simple, fast, eye-catching UI, which is fully customizable.",
          skills: [
            "React-JSX",
            "JavaScript",
            "Node.js",
            "ReactMarkdown",
            "Express.js",
            "MongoDB",
          ],
          links: [
            {
              name: "GitHub",
              link: "https://www.github.com/forloopcodes/water",
            },
            {
              name: "Website",
              link: "https://water-ruby.vercel.app",
            },
          ],
        },
        {
          name: "Blossoms Studios",
          description:
            "Blossoms Studios is a community of developers, designing a minecraft server, and mods.",
          skills: ["React", "JavaScript", "Node.js"],
          links: [
            {
              name: "GitHub Organization",
              link: "https://github.com/Blossoms-Studios",
            },
          ],
        },
      ],
    },
    {
      title: "2018 - 2022",
      projects: [
        {
          name: "Learning the perfect way to code",
          description:
            "In this time I have learned a lot of things, and I have also created a few projects. Learnt many languages, frameworks, and libraries.",
          skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "JQuery",
            "Node.js",
            "Git",
            "Adobe XD",
            "Canva",
            "Discord.js",
            "RMSkins",
          ],
          links: [],
        },
      ],
    },
  ];

  // LEETCODE MLSA

  return (
    <div>
      <div className="text-left">
        <div className="pb-[15vh] w-screen lg:px-48 px-10">
          <div className="grid grid-cols-1 gap-10 w-full">
            {projects.map((section) => (
              <div className="break-words h-full w-full" key={section.title}>
                <h3 className="geistMono text-lg text-neutral-400 my-2 tracking-tighter">
                  # {section.title.toLocaleUpperCase()}
                </h3>
                <hr className="brightness-[2] mb-3" />
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                  {section.projects.map((project) => (
                    <div
                      key={project.name}
                      className={`flex flex-col justify-between hover:text-green-300 p-2 px-3 border rounded border-neutral-700 hover:border-green-900 rounded-lg backdrop-blur-xl shadow-[rgba(255,255,255,0.07) !transition-none`}
                    >
                      <div>
                        <h3 className="geistMono text-md my-1 tracking-tighter opacity-90 !transition-none">
                          {project.name}
                        </h3>
                        <hr className="brightness-[2]" />
                        <div className="geistMono text-xs my-1 tracking-tighter text-left w-full opacity-60 my-1 flex shadow-none !transition-none">
                          {project.description}
                        </div>{" "}
                        {project.skills.length > 0 && (
                          <div className="geistMono text-xs my-1 tracking-tighter text-left w-full opacity-90 my-1 shadow-none !transition-none">
                            {project.skills.map((skill, index) => (
                              <span key={skill}>
                                {skill}
                                {index < project.skills.length - 1 && ", "}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      {project.links.length > 0 && (
                        <div className="geistMono text-xs mt-2 tracking-tighter p-2 text-left w-full opacity-100 my-1 shadow-none rounded border border-neutral-600 !transition-none">
                          {project.links.map((link) => (
                            <a
                              href={link.link}
                              target="_blank"
                              className="flex gap-1 items-center"
                            >
                              {link.name}
                              <ArrowUpRight className="w-4 h-4 !transition-none" />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
