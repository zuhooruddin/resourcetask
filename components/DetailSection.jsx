// components/DetailsSection.js
import React from 'react';

const DetailsSection = () => {
  return (
    <div className="flex flex-col items-start bg-[#F5F8FB] w-full"> 
      {/* Main section with the background color */}
      <div
  className="bg-[#dfe9f2] flex justify-between items-center 
             p-4 md:p-6 rounded-md shadow-md 
             w-[748px] h-[82px] 
       
             border border-gray-300" 
  style={{ position: 'relative' }} 
>      {/* Details List */}
        <div className="flex space-x-10 flex-grow"> 
          <DetailItem title="Tickets" value="7839" />
          <DetailItem title="Model" value="KECD867XBL00" />
          <DetailItem title="Parts" value="120" />
          <DetailItem title="Visibility" value="Private" />
          <DetailItem title="Status" value="Assigned" />
          <DetailItem title="Posted" value="07/28/2023" />
        </div>

        <div className="flex-shrink-0"> 
        </div>
      </div>
    </div>
  );
};

// Helper component for each detail item
const DetailItem = ({ title, value }) => (
  <div className="text-sm text-left"> {/* Ensured text alignment is left */}
    <p className="text-gray-500">{title}</p>
    <p className="py-1 font-semibold text-[#1D4ED8]">{value}</p>
  </div>
);

export default DetailsSection;
