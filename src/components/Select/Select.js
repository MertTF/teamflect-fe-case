import clsx from 'clsx';
import { useMemo, useState } from 'react';
import DropdownItem from '../Dropdown/DropdownItem';
import DownArrow from '../Icons/DownArrow';

const Select = ({
  selectedValue,
  items,
  labelRenderer,
  itemRenderer,
  onChange,
  placeholder,
  error,
}) => {
  const [active, setActive] = useState(false);
  const label = useMemo(() => {
    if (!selectedValue || typeof labelRenderer !== 'function') {
      return selectedValue;
    }

    return labelRenderer(selectedValue);
  }, [selectedValue, labelRenderer]);

  return (
    <div className='relative'>
      <button
        className={clsx(
          'border-spindle text-night-rider flex h-10 w-full items-center justify-between rounded border bg-white p-[10px] font-medium',
          {
            'animate-shake border-b-red-600 text-red-600 placeholder:text-red-600':
              error,
          }
        )}
        onClick={() => setActive((status) => !status)}
        type='button'
      >
        <div className='pr-10'>
          {label}
          {!label && placeholder && (
            <span className='text-spanish-gray'>{placeholder}</span>
          )}
        </div>
        <div>
          <DownArrow
            className={clsx('transition-all', {
              'rotate-180': active,
            })}
          />
        </div>
      </button>
      {active && (
        <div className='absolute left-0 z-10 w-full origin-top-right rounded bg-white shadow-lg'>
          <div className='max-h-96 overflow-auto py-1'>
            {items?.map((item, itemIndex) => {
              const itemLabel =
                typeof itemRenderer === 'function'
                  ? itemRenderer(item.value)
                  : item.label;
              return (
                <DropdownItem
                  onClick={async () => {
                    onChange(item.value);

                    setActive(false);
                  }}
                  key={`dropdown-item-${item.value}-${itemIndex}`}
                  active={item.value === selectedValue}
                >
                  {itemLabel}
                </DropdownItem>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
