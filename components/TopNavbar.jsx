// components/TopNavbar.js
import { FaSyncAlt, FaCog } from 'react-icons/fa'; 

const TopNavbar = () => {
  return (
    <div className="flex justify-between items-center bg-white px-6 py-4 shadow-sm w-full">
  
  {/* Left Side: Dropdown Menu */}
  <div className="bg-[#dfe9f2] flex items-center rounded p-3">
    <select className="border bg-[#dfe9f2] text-black text-sm outline-none">
      <option className='bg-[#dfe9f2]'>Customer Support</option>
    </select>
  </div>

  <div className="flex items-center space-x-4">
    <button className="rounded-full p-2 bg-gray-100 hover:bg-gray-200 transition">
      <FaSyncAlt className="text-gray-500" size={20} />
    </button>
    <button className="rounded-full p-2 bg-gray-100 hover:bg-gray-200 transition">
      <FaCog className="text-gray-500" size={20} />
    </button>
    
 
    
    <img 
            src="/assets/profile.png" 
            alt="Profile" 
            className="rounded-full  w-[60px] h-[60px]" 
          />
    
        
        {/* </div> */}
  </div>
</div>

  );
};

export default TopNavbar;
