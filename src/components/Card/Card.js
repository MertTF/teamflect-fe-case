import clsx from 'clsx';
import React from 'react';

const Card = ({ className, children }) => {
  return (
    <div
      className={clsx(
        'rounded bg-white p-8 shadow-[0px_1px_6px_0px_#2330431A]',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
