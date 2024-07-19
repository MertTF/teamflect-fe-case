const CircleMinus = (props) => (
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
    <g clipPath='url(#circle-minus-a)'>
      <g clipPath='url(#circle-minus-b)'>
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M8 12h8'
        />
      </g>
    </g>
    <defs>
      <clipPath id='circle-minus-a'>
        <path fill='#fff' d='M4 4h16v16H4z' />
      </clipPath>
      <clipPath id='circle-minus-b'>
        <path fill='#fff' d='M4 4h16v16H4z' />
      </clipPath>
    </defs>
  </svg>
);
export default CircleMinus;
