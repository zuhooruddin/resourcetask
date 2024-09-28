import React from "react";
import { AiOutlineCheck, AiOutlineClose, AiOutlineReload } from "react-icons/ai";

const RightSidebar = () => {
  return (
    
    <div className="w-1/2 space-y-6">
      {/* Main Section */}
      <div className="bg-white p-4 rounded-md shadow-md space-y-6">
        <div className="bg-gray-100 p-4 rounded-md shadow-sm">
  <div className="flex justify-between items-start mb-2">
    <h4 className="font-semibold text-sm">Document Answer</h4>
    <div className="flex items-center space-x-1">
      <div className="flex items-center space-x-1 text-green-600">
        <AiOutlineCheck />
        <span className="font-bold text-xs">88%</span>
      </div>
      <div className="flex items-center space-x-1 text-red-600">
        <AiOutlineClose />
        <span className="font-bold text-xs">12%</span>
      </div>
      <AiOutlineReload className="text-gray-400" />
    </div>
  </div>
  <p className="text-xs text-gray-700 mb-3 leading-relaxed">
    Order to help you locate the correct parts and repair information, we will need more
    information about the problem you are facing. Please submit a new question with more
    details, and we will be happy to help you. Looking forward to hearing from you!
  </p>
</div>


        {/* Archived Questions with Answer */}

        <div className="bg-gray-100 p-4 rounded-md shadow-md">
      <h4 className="font-semibold text-gray-800 text-sm flex justify-between items-center">
        Archived Questions
        <span className="font-semibold text-xs text-blue-600">88% Similar</span>
      </h4>
      
      <div className="mt-2">
        <div className="flex flex-col">
          {/* Question 1 */}
          <div className="flex items-start text-black-500 mb-2">
  <strong className="mr-1 text-xs">Q:</strong>
  <strong className="text-[11px]">Order to help you locate the correct parts and repair</strong>
</div>
<div className="flex items-start text-black-800 mb-4">
  <strong className="mr-1 text-xs">A:</strong>
  <p className="text-xs text-gray-700">We will need more information about the problem you are facing. Please submit a new question with more details.</p>
</div>

          
         
          
        </div>
      </div>
    </div>

        {/* Archived Questions Section */}
        
        <div className="space-y-2">
  {[
    "Q: Order to help you locate the correct ...",
    "Q: Order to help you locate the correct ...",
    "Q: Order to help you locate the correct ...",
    "Q: Order to help you locate the correct ...",
    "Q: Order to help you locate the correct ..."
  ].map((q, index) => (
    <div key={index} className="bg-gray-100 p-1 rounded-md shadow-sm">
      <div className="flex justify-between items-center">
        <p className="text-xs font-bold text-black-900">{q}</p>
        <button className="bg-black-200 font-bold text-blue-400 px-2 py-1 rounded-full ">+</button>
      </div>
    </div>
  ))}
</div>


        {/* Escalate Question Section */}
        <div className="bg-red-50   rounded-md shadow-md border border-gray-300">
  <div className="flex justify-between items-center p-2  rounded-md">
    <h4 className="text-red-600 text-xs">Unsolvable Question</h4>
    <button className="px-2 py-2 bg-red-500 text-white rounded-md text-xs">
      Escalate Ques
    </button>
  </div>
</div>

<div className="bg-white p-1 rounded-md shadow-md">

  <label className="block text-sm text-gray-700 mb-1">Reason for Escalation</label>
  <input
    className="w-full p-2 border border-gray-300 rounded-md mb-4"
 
  />
  <div className="flex justify-end space-x-4">
    <button className="px-4 py-2 bg-gray-200 rounded-md text-sm">Cancel</button>
    <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm">
      Submit
    </button>
  </div>
</div>

      </div>
    </div>
  );
};

export default RightSidebar;
