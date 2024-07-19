import { useState } from 'react';
import DropdownItem from './DropdownItem';

const Dropdown = ({ children, items }) => {
  const [active, setActive] = useState(false);

  return (
    <div className='relative'>
      <div onClick={() => setActive((status) => !status)}>{children}</div>
      {active && (
        <div className='absolute right-0 z-10 w-max min-w-20 max-w-60 origin-top-right rounded bg-white shadow-lg'>
          <div className='py-1'>
            {items.map(({ label, onClick }, itemIndex) => {
              return (
                <DropdownItem
                  onClick={async () => {
                    if (typeof onClick === 'function') {
                      await onClick();
                    }

                    setActive(false);
                  }}
                  key={`dropdown-item-${label}-${itemIndex}`}
                >
                  {label}
                </DropdownItem>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
