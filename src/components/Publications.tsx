import { FileText, ExternalLink } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      type: 'Conference',
      badge: 'ICPR 2024',
      badgeColor: 'bg-green-100 text-green-800',
      title: 'Advancing Brain Tumor Diagnosis: A Hybrid Approach Using Edge Detection and Deep Learning',
      authors: 'Ha Anh Vu, Szilárd Vajda',
      venue: 'International Conference on Pattern Recognition (ICPR 2024)',
      publisher: 'Springer Nature',
      year: '2024',
    },
    {
      type: 'Conference',
      badge: 'RTIP2R 2024',
      badgeColor: 'bg-green-100 text-green-800',
      title: 'An Expert Voting System for Brain Tumor Classification Using MRI Images',
      authors: 'Ha Anh Vu, KC Santosh, Szilárd Vajda',
      venue: 'Proceedings of the Seventh International Conference on Recent Trends in Image Processing and Pattern Recognition (RTIP2R 2024)',
      year: '2024',
    },
    {
      type: 'Thesis',
      badge: "Master's Thesis",
      badgeColor: 'bg-blue-100 text-blue-800',
      title: 'Ensemble Learning for MRI-Based Brain Tumor Classification: A Weighted Voting Approach',
      authors: 'Ha Anh Vu',
      venue: 'Central Washington University',
      year: '2025',
    },
    {
      type: 'Thesis',
      badge: "Bachelor's Thesis",
      badgeColor: 'bg-blue-100 text-blue-800',
      title: 'Development of a Fire Detection Application Using Deep Learning Models on Jetson Nano',
      authors: 'Ha Anh Vu',
      venue: 'University of Information Technology, Vietnam National University',
      year: '2022',
    },
  ];

  return (
    <section id="publications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Research & Publications</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My research focuses on medical imaging, deep learning, and computer vision applications
          </p>
        </div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all border-l-4 border-blue-600"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                  <FileText size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${pub.badgeColor}`}>
                      {pub.badge}
                    </span>
                    <span className="text-gray-500 text-sm">{pub.year}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                    {pub.title}
                  </h3>

                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Authors:</span> {pub.authors}
                  </p>

                  <p className="text-gray-600 mb-3">
                    <span className="font-semibold">Venue:</span> {pub.venue}
                    {pub.publisher && <span>, {pub.publisher}</span>}
                  </p>

                  <a
                    href="https://scholar.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    View Publication
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://scholar.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View All Publications on Google Scholar
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Publications;
