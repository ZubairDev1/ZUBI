import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiVite, SiFirebase, SiNextdotjs, SiGit } from 'react-icons/si';
import { BsBootstrap } from 'react-icons/bs';

function Skills() {
  const skills = [
    { name: 'React', icon: <FaReact className="text-4xl md:text-5xl text-[#61DAFB]" /> },
    { name: 'Next.js', icon: (
        <span className="inline-flex items-center justify-center bg-white border border-gray-300 rounded-full w-14 h-14 md:w-16 md:h-16">
          <SiNextdotjs className="text-3xl md:text-4xl text-black" />
        </span>
      )
    },
    { name: 'JavaScript', icon: <FaJs className="text-4xl md:text-5xl text-[#F7DF1E]" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-4xl md:text-5xl text-[#06B6D4]" /> },
    { name: 'Bootstrap', icon: <BsBootstrap className="text-4xl md:text-5xl text-[#7952B3]" /> },
    { name: 'Vite', icon: <SiVite className="text-4xl md:text-5xl text-[#646CFF]" /> },
    { name: 'HTML', icon: <FaHtml5 className="text-4xl md:text-5xl text-[#E34F26]" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-4xl md:text-5xl text-[#1572B6]" /> },
    { name: 'Firebase', icon: <SiFirebase className="text-4xl md:text-5xl text-[#FFCA28]" /> },
    { name: 'Git', icon: <SiGit className="text-4xl md:text-5xl text-[#F05032]" /> },
    { name: 'GitHub', icon: (
        <span className="inline-flex items-center justify-center bg-white border border-gray-300 rounded-full w-14 h-14 md:w-16 md:h-16">
          <FaGithub className="text-3xl md:text-4xl text-black" />
        </span>
      )
    },
  ]; 

  return (
    <section className="bg-gray-200 py-8 px-4 text-center">
      <h2 className="text-xl md:text-3xl lg:text-4xl mb-6 text-black">My Stack</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white p-4 rounded shadow hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col items-center gap-2">
              {skill.icon}
              <p className="text-base md:text-lg text-gray-700">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;