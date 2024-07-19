import clsx from 'clsx';

/** @param {{ selectedValue: string, setSelectedValue: (item: { value: string, label: import('react').ReactNode }) => void, data: { label: import('react').ReactNode, value: string }[] }} */
const SegmentedControl = ({ data, selectedValue, setSelectedValue }) => {
  return (
    <div className='flex items-center'>
      {data.map((item, index) => (
        <div
          key={`segmented-control-${item.value}`}
          className={clsx(
            'border-hawkes-blue flex cursor-pointer select-none items-center gap-[3px] border px-4 py-2 text-sm',
            {
              '!border-navy-blue !text-navy-blue': selectedValue === item.value,
              'rounded-s': index === 0,
              'rounded-e': index === data.length - 1,
            }
          )}
          onClick={() =>
            typeof setSelectedValue === 'function' && setSelectedValue(item)
          }
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default SegmentedControl;
