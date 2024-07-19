const CirclePlus = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <rect width={22} height={22} x={1} y={1} fill='#fff' rx={11} />
    <rect
      width={22}
      height={22}
      x={1}
      y={1}
      stroke='currentColor'
      strokeWidth={2}
      rx={11}
    />
    <g clipPath='url(#circle-plus-a)'>
      <g
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        clipPath='url(#circle-plus-b)'
      >
        <path d='M8 12h8M12 8v8' />
      </g>
    </g>
    <defs>
      <clipPath id='circle-plus-a'>
        <path fill='#fff' d='M4 4h16v16H4z' />
      </clipPath>
      <clipPath id='circle-plus-b'>
        <path fill='#fff' d='M4 4h16v16H4z' />
      </clipPath>
    </defs>
  </svg>
);
export default CirclePlus;
