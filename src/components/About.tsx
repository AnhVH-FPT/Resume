import { Brain, Code, Award, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Brain size={32} />,
      title: 'AI Research',
      description: 'Published papers in ICPR and RTIP2R conferences on medical imaging and brain tumor classification',
    },
    {
      icon: <Code size={32} />,
      title: 'Full-Stack Developer',
      description: 'Proficient in web/mobile development and IoT-integrated solutions for embedded systems',
    },
    {
      icon: <Award size={32} />,
      title: 'Academic Excellence',
      description: 'Master of Science with 3.945/4.00 GPA and multiple scholarships',
    },
    {
      icon: <Users size={32} />,
      title: 'Educator',
      description: 'Teaching AI courses and guiding students in research and capstone projects at FPT University',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I am an AI Lecturer and Researcher specializing in Machine Learning, Deep Learning,
            and Computer Vision applications. With a strong background in both academia and industry,
            I bridge the gap between theoretical research and practical implementation.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            My research focuses on medical imaging, particularly brain tumor classification using
            ensemble learning and hybrid approaches. I'm passionate about teaching the next generation
            of AI engineers and developing innovative solutions for real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-600 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
