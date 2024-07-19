import React from 'react';

const Progress = ({ progress }) => {
  return (
    <div className='flex items-center gap-2'>
      <div>{progress}%</div>
      <div className='bg-solitude relative h-1 min-w-12 rounded-sm'>
        <div
          className='absolute inset-0 z-10 rounded-sm bg-navy-blue'
          style={{
            width: `${+progress}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Progress;
