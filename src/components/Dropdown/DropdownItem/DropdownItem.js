import clsx from 'clsx';
import React from 'react';

const DropdownItem = ({ children, onClick, className, active }) => {
  return (
    <div
      className={clsx('px-4 py-2 text-left hover:bg-white-smoke', className, {
        'bg-white-smoke': active,
      })}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default DropdownItem;
