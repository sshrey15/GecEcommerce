import React from 'react';

const CardSkeleton = ({ numCards }) => {
  return (
    <>
      {Array.from({ length: numCards }).map((_, index) => (
        <div key={index} className="animate-pulse">
          <div className="h-56 bg-gray-400 rounded-xl"></div>
          <div className="p-6">
            <div className="h-4 bg-gray-400 rounded w-3/4"></div>
            <div className="space-y-2 mt-2">
              <div className="h-4 bg-gray-400 rounded"></div>
              <div className="h-4 bg-gray-400 rounded w-5/6"></div>
            </div>
          </div>
          <div className="p-6 pt-0">
            <div className="h-10 bg-gray-400 rounded"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardSkeleton;