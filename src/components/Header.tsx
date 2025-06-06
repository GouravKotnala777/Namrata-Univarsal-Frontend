


const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 shadow-md bg-white">
      {/* Logo */}
      <div className="text-xl font-bold text-blue-600">MyLogo</div>

      {/* Nav */}
      <nav className="font-medium text-gray-600">
        <ul className="flex gap-6 items-center">
          <li className="hover:text-blue-600 cursor-pointer py-4">Home</li>
          <li className="hover:text-blue-600 cursor-pointer py-4">Internship</li>

          {/* Training & Development Dropdown */}
          <li className="relative group cursor-pointer py-4">
            <span className="hover:text-blue-600">Training & Development</span>
            <ul className="absolute top-full left-0 hidden group-hover:block bg-white shadow-md mt-0 rounded-md w-48">
              <li className="px-4 py-2 hover:bg-gray-100">Technologies</li>
              <li className="px-4 py-2 hover:bg-gray-100">Digital Marketing</li>
              <li className="px-4 py-2 hover:bg-gray-100">Seo</li>
            </ul>
          </li>

          {/* Pages Dropdown */}
          <li className="relative group cursor-pointer py-4">
            <span className="hover:text-blue-600">Pages</span>
            <ul className="absolute top-full left-0 hidden group-hover:block bg-white shadow-md mt-0 rounded-md w-48">
              <li className="px-4 py-2 hover:bg-gray-100">Services</li>
              <li className="px-4 py-2 hover:bg-gray-100">Portfolio</li>
              <li className="px-4 py-2 hover:bg-gray-100">Pricing</li>
              <li className="px-4 py-2 hover:bg-gray-100">Team Members</li>
              <li className="px-4 py-2 hover:bg-gray-100">Reviews</li>
              <li className="px-4 py-2 hover:bg-gray-100">Clients</li>
              <li className="px-4 py-2 hover:bg-gray-100">Skills</li>
            </ul>
          </li>

          <li className="hover:text-blue-600 cursor-pointer py-4">About</li>
          <li className="hover:text-blue-600 cursor-pointer py-4">Contact</li>
          <li className="hover:text-blue-600 cursor-pointer py-4">Blog</li>
          <li className="hover:text-blue-600 cursor-pointer py-4">Pay</li>
          <li className="text-black font-bold cursor-pointer">Login</li>
          <li className="text-white font-bold cursor-pointer bg-blue-600 px-3 py-1 rounded-2xl">Register</li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;