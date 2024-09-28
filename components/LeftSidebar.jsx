import {
  FaTachometerAlt,
  FaRocket,
  FaTasks,
  FaLock,
  FaFileAlt,
  FaSearch,
  FaCogs,
  FaPlus,
  FaRobot,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-[#0C1026] text-[#FFFFFF] flex flex-col text-[13px] leading-[18px]"> {/* Full height */}
      {/* Logo Section */}
      <div className="flex items-center justify-center py-5">
        <img src="/assets/logo.png" alt="Logo" className="w-[150px]" />
      </div>

      {/* Menu Section */}
      <nav className="flex-grow">
        <ul className="space-y-4 px-5">
          {/* Dashboard Item */}
          <li className="flex items-center space-x-3 py-2 cursor-pointer hover:bg-[#1A1F3A] rounded-md transition-colors duration-200 ease-in-out">
            <FaTachometerAlt className="text-[16px]" />
            <span className="text-[14px] font-medium">Dashboard</span>
          </li>

          {/* Start Working Active Item */}
          <li className="flex items-center space-x-3 py-2 px-2 bg-[#0063FF] rounded-md cursor-pointer">
            <FaRocket className="text-[16px]" />
            <span className="text-[14px] font-medium">Start Working</span>
          </li>

          {/* My Task */}
          <li className="flex items-center space-x-3 py-2 cursor-pointer hover:bg-[#1A1F3A] rounded-md transition-colors duration-200 ease-in-out">
            <FaTasks className="text-[16px]" />
            <span className="text-[14px] font-medium">My Task</span>
          </li>

          {/* Dead Locks */}
          <li className="flex items-center space-x-3 py-2 cursor-pointer hover:bg-[#1A1F3A] rounded-md transition-colors duration-200 ease-in-out">
            <FaLock className="text-[16px]" />
            <span className="text-[14px] font-medium">Dead Locks</span>
          </li>

          {/* Work Reports */}
          <li className="flex items-center space-x-3 py-2 cursor-pointer hover:bg-[#1A1F3A] rounded-md transition-colors duration-200 ease-in-out">
            <FaFileAlt className="text-[16px]" />
            <span className="text-[14px] font-medium">Work Reports</span>
          </li>

          {/* Divider */}
          <hr className="my-5 border-gray-700" />

          {/* Explore */}
          <li className="flex items-center space-x-3 py-2 cursor-pointer hover:bg-[#1A1F3A] rounded-md transition-colors duration-200 ease-in-out">
            <FaSearch className="text-[16px]" />
            <span className="text-[14px] font-medium">Explore</span>
          </li>

          {/* Model */}
          <li className="flex items-center space-x-3 py-2 cursor-pointer hover:bg-[#1A1F3A] rounded-md transition-colors duration-200 ease-in-out">
            <FaRobot className="text-[16px]" />
            <span className="text-[14px] font-medium">Model</span>
          </li>

          {/* Category/Manufacturer */}
          <li className="flex items-center space-x-3 py-2 cursor-pointer hover:bg-[#1A1F3A] rounded-md transition-colors duration-200 ease-in-out">
            <FaCogs className="text-[16px]" />
            <span className="text-[14px] font-medium">Category/Manufacturer</span>
          </li>

          {/* Add Parts */}
          <li className="flex items-center space-x-3 py-2 cursor-pointer hover:bg-[#1A1F3A] rounded-md transition-colors duration-200 ease-in-out">
            <FaPlus className="text-[16px]" />
            <span className="text-[14px] font-medium">Add Parts</span>
          </li>

          {/* Divider */}
          <hr className="my-5 border-gray-700" />

          {/* Settings */}
          <li className="flex items-center space-x-3 py-2 cursor-pointer hover:bg-[#1A1F3A] rounded-md transition-colors duration-200 ease-in-out">
            <FaCogs className="text-[16px]" />
            <span className="text-[14px] font-medium">Settings</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
