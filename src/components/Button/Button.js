import clsx from 'clsx';
import React from 'react';

const Button = ({
  primary = true,
  disabled,
  onClick,
  type = 'button',
  children,
}) => {
  return (
    <button
      className={clsx(
        'cursor-pointer select-none rounded px-4 py-2 text-center text-base font-medium hover:opacity-95 active:translate-y-[0.5px] disabled:pointer-events-none disabled:opacity-50',
        {
          'bg-navy-blue text-white': !!primary,
        }
      )}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
