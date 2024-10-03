const Navbar = () => {
  return (
    <nav className="max-w-6xl mx-auto flex justify-between items-center bg-white p-2 rounded-full">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/path-to-pear-logo.svg" alt="PearAI Logo"/>
        <span className="font-semibold text-gray-700">logon</span>
      </div>
      

      {/* Links */}
      <div className="flex space-x-6">
        <a href="#" className="text-gray-600 hover:text-gray-800">Resources</a>
        <a href="#" className="text-gray-600 hover:text-gray-800">Pricing / Download</a>
        <a href="#" className="text-gray-600 hover:text-gray-800">Documentation</a>
        <a href="#" className="text-gray-600 hover:text-gray-800 flex items-center">
          GitHub
          <span className="text-yellow-400 ml-1">⭐</span>
        </a>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-4">
        <button className="border border-gray-400 rounded-full px-4 py-1 text-gray-600 hover:bg-gray-100">
          Sign in
        </button>
        <button className="bg-gray-100 rounded-full px-4 py-1 text-gray-700 hover:bg-gray-200 flex items-center">
          Try <span className="ml-2">➔</span>
        </button>
        <button className="border rounded-full p-2 hover:bg-gray-100">
          <span role="img" aria-label="light-mode-icon">☀️</span>
        </button>
        
      </div>
    </nav>
  );
};

export default Navbar;
