import clsx from 'clsx';

/** @param {{ formOptions: import('react-hook-form').RegisterOptions }} */
const Input = ({
  value,
  onChange,
  placeholder,
  type = 'text',
  id,
  className,
  error,
  formRegisterer,
  formOptions,
  ...rest
}) => {
  return (
    <input
      className={clsx(
        'text-night-rider w-full p-2 text-[22px] font-medium leading-7 placeholder:text-payne-gray focus:outline-none',
        className,
        {
          'animate-shake border-b-red-600 text-red-600 placeholder:text-red-600':
            error,
        }
      )}
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...(id && formRegisterer && formRegisterer(id, formOptions))}
      {...rest}
    />
  );
};

export default Input;
