import { Award, Trophy } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      title: 'International Graduate Student Scholarship',
      organization: 'Central Washington University',
      description: 'Awarded for five consecutive quarters to top-performing international graduate students in the School of Science',
      year: '2023-2025',
      icon: <Trophy size={32} />,
    },
    {
      title: 'Employee of the Month',
      organization: 'H.O.A Technology',
      description: 'Recognized as Employee of the Month in June, July, and December 2022 for outstanding performance',
      year: '2022',
      icon: <Award size={32} />,
    },
    {
      title: 'Outstanding Young Leader Award',
      organization: 'University of Information Technology',
      description: 'Honored for leadership and mentorship in the Youth Union by organizing social events and mentoring new students',
      year: '2017-2022',
      icon: <Award size={32} />,
    },
  ];

  return (
    <section id="awards" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Honors & Awards</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all text-center"
            >
              <div className="inline-block bg-blue-100 text-blue-600 p-4 rounded-full mb-4">
                {award.icon}
              </div>

              <div className="mb-2">
                <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold">
                  {award.year}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{award.title}</h3>
              <p className="text-blue-600 font-semibold mb-3">{award.organization}</p>
              <p className="text-gray-600 leading-relaxed">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
