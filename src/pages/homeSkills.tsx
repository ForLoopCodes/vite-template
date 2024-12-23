import "./BlogStyles.css";
import { ArrowUp } from "lucide-react";

export const HomeSkills = () => {
  const skills = [
    {
      name: "Machine Learning",
      skills: [
        { name: "Python", level: 2 },
        { name: "Pandas", level: 2 },
        { name: "Numpy", level: 2 },
        { name: "Matplotlib", level: 2 },
        { name: "Tensorflow", level: 1 },
        { name: "Scikit-Learn", level: 1 },
      ],
    },
    {
      name: "Web3/Blockchain",
      skills: [
        { name: "Solana", level: 1 },
        { name: "Rust", level: 1 },
      ],
    },
    {
      name: "UI/UX",
      skills: [
        { name: "Adobe XD", level: 3 },
        { name: "Canva", level: 3 },
        { name: "Figma", level: 3 },
      ],
    },
    {
      name: "Front-End",
      skills: [
        { name: "HTML", level: 3 },
        { name: "CSS", level: 3 },
        { name: "JavaScript", level: 3 },
        { name: "TypeScript", level: 3 },
        { name: "jQuery", level: 3 },
        { name: "Node.js", level: 3 },
        { name: "Svelte", level: 3 },
        { name: "Tailwind", level: 3 },
        { name: "React.js", level: 3 },
        { name: "Vite", level: 3 },
        { name: "Animate-on-scroll", level: 3 },
        { name: "ShadCN", level: 3 },
        { name: "ChatGPT API", level: 3 },
        { name: "Gemini API", level: 3 },
        { name: "MistralAI API", level: 3 },
      ],
    },
    {
      name: "Back-End",
      skills: [
        { name: "Express.js", level: 3 },
        { name: "MongoDB Atlas", level: 2 },
        { name: "Supabase", level: 3 },
        { name: "Firebase", level: 1 },
        { name: "MySQL", level: 3 },
        { name: "PostgreSQL", level: 3 },
      ],
    },
    {
      name: "Misc",
      skills: [
        { name: "Git", level: 3 },
        { name: "Discord.js", level: 2 },
        { name: "Rainmeter Skins", level: 3 },
        { name: "Stockfish (Chess engine)", level: 3 },
        { name: "Basics of Kotlin & Java", level: 1 },
        { name: "C Language", level: 2 },
        { name: "Data Structures", level: 2 },
        { name: "Algorithms", level: 2 },
      ],
    },
  ];

  // LEETCODE MLSA

  return (
    <div>
      <div className="text-left">
        <div className="py-[15vh] w-screen lg:px-48 px-10">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 w-full">
            {skills.map((section) => (
              <div className="break-words h-full w-full" key={section.name}>
                <h3 className="geistMono text-base text-neutral-400 my-2 tracking-tighter">
                  # {section.name.toLocaleUpperCase()}
                </h3>
                <div className="grid grid-cols-3 gap-x-5">
                  {section.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`my-2 hover:text-green-300 border rounded border-neutral-700 hover:border-green-900 rounded-lg backdrop-blur-xl shadow-[rgba(255,255,255,0.07)] to-black p-1 px-2 !transition-none`}
                    >
                      <div className="geistMono text-xs tracking-tighter h-5 w-full opacity-60 my-1 flex justify-center shadow-none items-center text-center rounded border border-neutral-600 !transition-none">
                        level {skill.level}
                      </div>
                      <h3 className="geistMono text-sm tracking-tighter opacity-90 !transition-none">
                        {skill.name}
                      </h3>
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
