import clsx from 'clsx';

/** @param {{ formOptions: import('react-hook-form').RegisterOptions }} */
const Textearea = ({
  value,
  onChange,
  placeholder,
  id,
  className,
  error,
  formRegisterer,
  formOptions,
  ...rest
}) => {
  return (
    <textarea
      className={clsx(
        'text-night-rider w-full resize-none p-2 text-[22px] font-medium leading-7 placeholder:text-payne-gray focus:outline-none',
        className,
        {
          'animate-shake border-b-red-600 text-red-600 placeholder:text-red-600':
            error,
        }
      )}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...(id && formRegisterer && formRegisterer(id, formOptions))}
      {...rest}
    />
  );
};

export default Textearea;
