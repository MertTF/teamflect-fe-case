const List = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={16}
    fill='none'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M6.984 4.5h7m-7 4h7m-7 4h7'
    />
    <path
      fill='currentColor'
      d='M3.984 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM3.984 9.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM3.984 13.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
    />
  </svg>
);
export default List;
