const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400 mb-4">
            Built with React, TypeScript, and Tailwind CSS
          </p>
          <p className="text-gray-500">
            © {currentYear} Ha Anh Vu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
