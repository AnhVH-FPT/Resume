import { Mail, Phone, MapPin, Linkedin, Github, BookOpen } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'anhvh54@fe.edu.vn',
      link: 'mailto:anhvh54@fe.edu.vn',
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+84 36 676 5835',
      link: 'tel:+84366765835',
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Ho Chi Minh City, Vietnam',
    },
  ];

  const socialLinks = [
    {
      icon: <BookOpen size={24} />,
      label: 'Google Scholar',
      link: 'https://scholar.google.com',
    },
    {
      icon: <Linkedin size={24} />,
      label: 'ORCID',
      link: 'https://orcid.org',
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      link: 'https://github.com',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            I'm always interested in discussing research collaborations, academic opportunities,
            and innovative AI projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-white font-semibold hover:text-blue-200 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-semibold">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white bg-opacity-20 p-4 rounded-lg hover:bg-opacity-30 transition-all"
                >
                  {social.icon}
                  <span className="font-semibold">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-4 text-center">Research Interests</h3>
          <p className="text-center text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Machine Learning, Deep Learning, Computer Vision, Medical Imaging,
            Ensemble Learning, IoT Systems, Embedded AI, Educational Technology,
            Adaptive Learning Systems
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
