function SoftSkills() {
  const softSkills = [
    { id: 1, skill: 'Communication', description: 'Clear and effective communication in team settings' },
    { id: 2, skill: 'Problem Solving', description: 'Analytical thinking and creative problem-solving' },
    { id: 3, skill: 'Teamwork', description: 'Strong collaboration and team player mindset' },
    { id: 4, skill: 'Adaptability', description: 'Quick learner and adaptable to new technologies' },
    { id: 5, skill: 'Time Management', description: 'Efficient project management and deadline adherence' },
    { id: 6, skill: 'Creativity', description: 'Innovative approach to design and problem-solving' },
    { id: 7, skill: 'Fast Learner', description: 'Rapidly acquires and applies new skills and knowledge effectively' }
  ];

  return (
    <section id="softskills" className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl md:text-3xl lg:text-4xl mb-8 text-center text-gray-800">Soft Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {softSkills.map((skill) => (
            <div key={skill.id} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{skill.skill}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SoftSkills;