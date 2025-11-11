import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'AI Lecturer',
      company: 'FPT University',
      location: 'Ho Chi Minh City, Vietnam',
      period: 'Sep 2025 - Present',
      type: 'Full-time',
      current: true,
      responsibilities: [
        'Teach undergraduate courses in Artificial Intelligence and AI applications across domains',
        'Guide students in academic research, capstone projects, and AI competitions',
        'Design and update AI curriculum, develop digital learning materials',
        'Collaborate with industry partners on applied research and technology transfer',
      ],
    },
    {
      title: 'AI Specialist',
      company: 'Life Learners LLC',
      location: 'Washington, USA',
      period: 'Mar 2025 - Present',
      type: 'Contract',
      current: true,
      responsibilities: [
        'Build AI models for adaptive learning, including RAG systems and citation graphs',
        'Create personalized tutoring agents using advanced machine learning techniques',
        'Develop AI tools for dynamic content generation including mindmaps and research sessions',
        'Implement citation-backed summaries for enhanced learning experiences',
      ],
    },
    {
      title: 'Graduate Research Assistant',
      company: 'Computer Science Department, Central Washington University',
      location: 'Washington, USA',
      period: 'Jan 2024 - Mar 2025',
      type: 'Part-time',
      responsibilities: [
        'Assisted Dr. Szilárd Vajda in medical imaging research',
        'Implemented and tested various machine learning models for brain tumor classification',
        'Evaluated experimental results and contributed to papers for international conferences',
        'Achieved over 99% accuracy in brain tumor classification using ensemble methods',
      ],
    },
    {
      title: 'Remote IT Helpdesk',
      company: 'Savyboat',
      location: 'Washington, USA (Remote)',
      period: 'Aug 2022 - Jul 2023',
      type: 'Full-time',
      responsibilities: [
        'Managed and enhanced company website with functional improvements',
        'Integrated secure online payment systems to optimize user experience',
        'Delivered technical support and staff training',
        'Standardized IT procedures for efficient remote operations',
      ],
    },
    {
      title: 'Full-stack Website Developer',
      company: 'H.O.A Technology',
      location: 'Ho Chi Minh City, Vietnam',
      period: 'Mar 2021 - Apr 2022',
      type: 'Full-time',
      responsibilities: [
        'Designed, developed, and maintained custom web applications using Laravel',
        'Led end-to-end project development with cross-functional teams',
        'Managed client communications and provided technical support',
        'Recognized as Employee of the Month (June, July, December 2022)',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white p-3 rounded-lg">
                  <Briefcase size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                    {exp.current && (
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                        Current
                      </span>
                    )}
                  </div>

                  <p className="text-xl text-blue-600 font-semibold mb-3">{exp.company}</p>

                  <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
