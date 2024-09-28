import React from 'react';
import { AiOutlineVideoCamera } from 'react-icons/ai';
import { BsPlayBtn } from 'react-icons/bs';
import { IoCloseSharp } from 'react-icons/io5'; 

const MainSection = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
        
        
    
   
      <div className="border-b pb-4 mb-4"> 
        <div className="flex items-center">

          <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-200 text-lg font-semibold text-gray-700">
            MN
          </div>
          {/* User Info */}
          <div className="ml-4"> 
            <p className="text-sm font-semibold text-gray-800">Mudassir Nisar</p>
            <p className="text-xs text-gray-500">07/28/2023</p>
          </div>
        </div>
        {/* Ticket Link */}
        <a href="#" className="text-blue-600 font-semibold text-sm mt-2 inline-block">This is a new Ticket</a>
      </div>

      {/* Ticket Information */}
      <div className="bg-[#f5f7f9] p-4 rounded-md mb-4 border border-gray-300"> 
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          Agent at Mar 28, 2024 <br />
          Hello Mudassir,
          <br /><br />
          Thank you for reaching out. <br />
          In order to help you locate the correct parts and repair information, we will need more information about the problem you are facing. 
          Please submit a new question with more details, and we will be happy to help you! Looking forward to hearing from you!
        </p>
        {/* Links */}
        <div className="flex space-x-4 mb-2 text-sm">
          <a href="#" className="text-blue-600 flex items-center">
            <BsPlayBtn className="mr-1" />
            Watch video
          </a>
          <a href="#" className="text-blue-600 flex items-center">
            <BsPlayBtn className="mr-1" />
            Watch video
          </a>
        </div>
        {/* Related Parts */}
        <p className="text-sm text-gray-600 mt-2">Related Parts: 123 35</p>
      </div>

      {/* Compose Your Reply */}
      <div className="mt-6">
        <p className="font-semibold text-gray-800 mb-3">Compose your reply</p>
        <div className="flex space-x-4 mb-4">
          {/* URL Input */}
          <div className="w-1/2">
            <label htmlFor="" className='text-xs text-gray-500'>URL</label>
            <input 
              type="text" 
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none text-sm"
            />
            <div className="flex space-x-2 mt-2 flex-wrap"> {/* Wrapped tags */}
              <Tag label="Link 1" />
              <Tag label="Link 2" />
              <Tag label="Link 3" />
            </div>
          </div>
          {/* Related Parts Input */}
          <div className="w-1/2">
            <label htmlFor="" className='text-xs text-gray-500'>Related Parts</label>
            <input 
              type="text" 
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none text-sm"
            />
            <div className="flex space-x-2 mt-2 flex-wrap"> 
              <Tag label="2345" />
              <Tag label="1235" />
              <Tag label="6789" />
            </div>
          </div>
        </div>
        {/* Textarea */}
        <div className='mt-6'> 
          <label htmlFor="" className='text-sm text-gray-500'>Your answer goes here</label>
          <textarea 
            className="w-full border border-gray-300 rounded-md p-2 h-24 mb-4 focus:outline-none text-sm"
          ></textarea>
        </div>
      
        {/* Buttons */}
        <div className="flex space-x-4 justify-between"> 
          <div className="flex space-x-2"> 
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm">Temp 1</button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm">Temp 2</button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm">Temp 3</button>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">Post Comment</button> 
        </div>
      </div>
    </div>
  );
};

// Tag Component
const Tag = ({ label }) => (
  <div className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md flex items-center space-x-1 text-sm">
    <span>{label}</span>
    <IoCloseSharp className="cursor-pointer hover:text-red-600" /> 
  </div>
);

export default MainSection;
