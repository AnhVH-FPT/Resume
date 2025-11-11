import { Code, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Brain Tumor Classification System',
      category: 'Medical AI',
      description: 'Deep learning system to classify brain tumors (glioma, meningioma, pituitary) from MRI scans using ensemble learning and weighted voting approach.',
      technologies: ['Python', 'TensorFlow', 'Keras', 'Scikit-learn', 'Optuna'],
      highlights: [
        'Achieved over 99% test accuracy',
        'Implemented multiple classifiers with hybrid voting approach',
        'Optuna-based hyperparameter tuning',
      ],
    },
    {
      title: 'Life Learners: AI-Driven Adaptive Learning Platform',
      category: 'EdTech AI',
      description: 'AI-driven platform utilizing RAG, cognitive tutoring agents, and dynamic citation graph analysis to personalize educational content.',
      technologies: ['Python', 'TensorFlow', 'RAG', 'SQL', 'OpenAI API'],
      highlights: [
        'Retrieval-Augmented Generation for personalized learning',
        'Dynamic citation graph analysis',
        'Cognitive tutoring agents',
      ],
    },
    {
      title: 'Fire Detection Application',
      category: 'IoT & Computer Vision',
      description: 'Real-time fire detection system using Deep Learning and Computer Vision, optimized for low-power devices like Jetson Nano.',
      technologies: ['Python', 'YOLO', 'TensorFlow', 'OpenCV', 'Jetson Nano'],
      highlights: [
        '97% detection accuracy',
        'Customizable alert methods (phone, email, alarms)',
        'Energy-efficient design for embedded systems',
      ],
    },
    {
      title: 'Smart Parking System',
      category: 'IoT & Computer Vision',
      description: 'Automatic parking management system using computer vision and IoT for license plate detection, vehicle tracking, and real-time slot management.',
      technologies: ['Arduino', 'OpenCV', 'Raspberry Pi', 'Jetson Nano', 'IoT Sensors'],
      highlights: [
        'Real-time parking slot availability tracking',
        'Automated access control and payment',
        'Scalable and cost-effective solution',
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Innovative projects combining AI, IoT, and Computer Vision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden"
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Code size={24} className="text-white" />
                  <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-white text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              </div>

              <div className="p-6">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
                >
                  View Project
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
