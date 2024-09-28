import React from "react";
import LeftSidebar from "@/components/LeftSidebar";
import { AiOutlineBell, AiOutlineCheck, AiOutlineClose, AiOutlineReload } from "react-icons/ai";
import { BsPlayCircle } from "react-icons/bs"; // For video icon
import RightSidebar from "@/components/RightSidebar";
import TopNavbar from "@/components/TopNavbar";
import DetailsSection from "@/components/DetailSection";
import MainSection from "@/components/MainSection";

const Home = () => {
  const ToggleButton = () => {
    return (
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" checked='true' className="sr-only peer" />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        <span className="ml-3 text-sm font-medium text-gray-500">Public</span>
      </label>
    );
  };

  return (
    <div className="flex h-screen ">
      <div className="p-8 bg-[#F5F7FA] min-h-screen w-full"> 
       
        
        {/* Details Section with Toggle */}
        <div className="flex justify-between items-center w-full "> 
          <DetailsSection />
          <div className="flex flex-col items-end"> 
            <span className="text-gray-600 mb-1 text-xs">Change Visibility</span>
            <ToggleButton />
          </div>
        </div>

        {/* Main Content Section */}
        <div className="mt-6 flex space-x-6">
          <MainSection />
          {/* Right Sidebar */}
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Home;
