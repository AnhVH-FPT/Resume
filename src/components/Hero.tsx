import { GraduationCap, Mail, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6">
          <GraduationCap size={64} className="mx-auto mb-4" />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-4">Ha Anh Vu</h1>

        <p className="text-xl md:text-2xl mb-6 text-blue-100">
          AI Lecturer & Researcher
        </p>

        <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Specializing in Machine Learning, Deep Learning, and Medical Imaging.
          Published researcher with expertise in AI applications and embedded systems.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div className="flex items-center gap-2">
            <MapPin size={20} />
            <span>Ho Chi Minh City, Vietnam</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={20} />
            <a href="mailto:anhvh54@fe.edu.vn" className="hover:text-blue-200 transition-colors">
              anhvh54@fe.edu.vn
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://scholar.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg"
          >
            Google Scholar
          </a>
          <a
            href="https://orcid.org"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
          >
            ORCID
          </a>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
          >
            Contact Me
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
