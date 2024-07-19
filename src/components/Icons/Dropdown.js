const Dropdown = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fill='#838B95'
        fillRule='evenodd'
        d='M13.75 5.5a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Zm0 6.5a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0ZM12 20.25a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h24v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
export default Dropdown;
