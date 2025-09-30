import { FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript } from 'react-icons/si';

// Import all images
import BudgetImg from '../assets/Budget.png';
import EnrollImg from '../assets/Enroll.png';
import WeatherImg from '../assets/Weather.png';
import BMIImg from '../assets/BMI.png';
import TodoImg from '../assets/Todo.png';
import BlogImg from '../assets/blog.png';

function Projects() {
  const projects = [
     { 
      id: 1, 
      title: 'Budget Tracker', 
      description: 'A budget tracking app.', 
      image: BudgetImg,
      link: 'https://zubairdev1.github.io/-Budget-tracker-4.0/',
      technologies: [
        {name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> }
      ]
    },
    { 
      id: 2, 
      title: 'Enrollment Page', 
      description: 'A simple enrollment page with a modern design.', 
      image: EnrollImg,
      link: 'https://zubairdev1.github.io/Enrollment-page/',
      technologies: [
        {name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> }
      ]
    },
    { 
      id: 3, 
      title: 'Weather App', 
      description: 'A simple Weather App with an integrated API.', 
      image: WeatherImg,
      link: 'https://zubairdev1.github.io/Weather-App/',
      technologies: [
        { name: 'HTML', icon: <FaHtml5 className="text-[#E34F26]" /> },
        { name: 'CSS', icon: <FaCss3Alt className="text-[#1572B6]" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> }
      ]
    },
    {
        id: 4, 
        title: 'BMI Calculator', 
        description: 'A simple BMI calculator built with HTML, CSS and Javascript.', 
        image: BMIImg,
        link: 'https://zubairdev1.github.io/BMI-calculator-/',
        technologies: [
        { name: 'HTML', icon: <FaHtml5 className="text-[#E34F26]" /> },
        { name: 'CSS', icon: <FaCss3Alt className="text-[#1572B6]" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> }
        ]
    },
    { 
      id: 5, 
      title: 'Todo List App', 
      description: 'A simple todo list app.', 
      image: TodoImg,
      link: 'https://zubairdev1.github.io/Todo-List-App/',
      technologies: [
        { name: 'HTML', icon: <FaHtml5 className="text-[#E34F26]" /> },
        { name: 'CSS', icon: <FaCss3Alt className="text-[#1572B6]" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> }
      ]
    },
    { 
      id: 6, 
      title: 'Responsive Blog', 
      description: 'A Responsive web app.', 
      image: BlogImg,
      link: 'https://zubairdev1.github.io/Responsive-Blog./',
      technologies: [
        { name: 'HTML', icon: <FaHtml5 className="text-[#E34F26]" /> },
        { name: 'CSS', icon: <FaCss3Alt className="text-[#1572B6]" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> }
      ]
    },

  ];

  return (
    <section className="bg-gray-200 py-16 px-4">
      <h2 className="text-xl md:text-3xl lg:text-4xl mb-8 text-center text-gray-800">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-4 rounded shadow hover:shadow-lg transition">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-lg md:text-xl mt-2 text-black">{project.title}</h3>
            <p className="text-gray-600 mt-1">{project.description}</p>
            
            {/* Technology Icons */}
            <div className="flex gap-3 mt-3">
              {project.technologies.map((tech, index) => (
                <div 
                  key={index}
                  className="text-2xl hover:scale-110 transition-transform duration-200"
                  title={tech.name}
                >
                  {tech.icon}
                </div>
              ))}
            </div>

            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 mt-4 inline-block hover:text-blue-800"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
