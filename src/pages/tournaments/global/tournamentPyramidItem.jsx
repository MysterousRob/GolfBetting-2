import React from 'react';

const PyramidItem = ({ name, description }) => (
  <div className="bg-white rounded-[137px] w-[380px] m-1 flex flex-col justify-center items-center p-4">
  <div className="bg-[#64FF05] mt-4 rounded-full p-3">
    <h1 className="text-xl font-bold text-center text-black">
      {name}
    </h1>
  </div>
  <div className="p-4 w-full">
    <p className="text-sm text-black mb-5 text-center">
      {description}
    </p>
  </div>
</div>
  );
  export default PyramidItem;