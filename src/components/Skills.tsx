const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['Python', 'C++', 'C', 'JavaScript', 'TypeScript'],
    },
    {
      category: 'Machine Learning & AI',
      skills: ['TensorFlow', 'Keras', 'PyTorch', 'Scikit-learn', 'OpenCV', 'Pandas', 'NumPy', 'Matplotlib'],
    },
    {
      category: 'Web Technologies',
      skills: ['HTML5', 'CSS3', 'React', 'Laravel', 'Node.js', 'REST APIs'],
    },
    {
      category: 'Database Systems',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL'],
    },
    {
      category: 'Hardware & IoT',
      skills: ['Jetson Nano', 'Arduino', 'Raspberry Pi', 'IoT Sensors', 'Embedded Systems'],
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'Docker', 'Linux', 'Jupyter', 'VS Code', 'Optuna'],
    },
  ];

  const softSkills = [
    'Research & Analysis',
    'Academic Writing',
    'Team Leadership',
    'Project Management',
    'Technical Communication',
    'Problem Solving',
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all"
              >
                <h4 className="text-lg font-bold text-blue-600 mb-4">{category.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white border border-blue-200 text-gray-700 rounded-full text-sm hover:bg-blue-100 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Professional Skills</h3>
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-lg shadow-xl">
            <div className="flex flex-wrap justify-center gap-4">
              {softSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
