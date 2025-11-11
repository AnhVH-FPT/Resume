import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Master of Science in Computational Science',
      institution: 'Central Washington University',
      location: 'Ellensburg, Washington, USA',
      period: 'Sep 2023 - March 2025',
      gpa: '3.945/4.00',
      honors: '1st class honors',
      details: [
        'Focus on Machine Learning and Medical Imaging',
        'Graduate Research Assistant under Dr. Szilárd Vajda',
        'International Graduate Student Scholarship recipient',
      ],
    },
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'University of Information Technology, Vietnam National University',
      location: 'Ho Chi Minh City, Vietnam',
      period: 'Aug 2017 - Mar 2022',
      details: [
        'Specialized in AI and Embedded Systems',
        'Outstanding Young Leader Award',
        'Thesis on Fire Detection using Deep Learning',
      ],
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-blue-600"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white p-3 rounded-lg">
                  <GraduationCap size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                  <p className="text-xl text-gray-700 font-semibold mb-3">{edu.institution}</p>

                  <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  {edu.gpa && (
                    <div className="mb-4">
                      <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
                        GPA: {edu.gpa} {edu.honors && `• ${edu.honors}`}
                      </span>
                    </div>
                  )}

                  <ul className="space-y-2">
                    {edu.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{detail}</span>
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

export default Education;
