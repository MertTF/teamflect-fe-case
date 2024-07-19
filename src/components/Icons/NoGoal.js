const NoGoal = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={48}
    height={48}
    fill='none'
    {...props}
  >
    <rect width={48} height={48} x={0.5} y={0.5} fill='#B2DDF2' rx={8} />
    <path
      stroke='#fff'
      strokeLinecap='round'
      strokeWidth={1.5}
      d='M24.352 8.5C15.597 8.5 8.5 15.52 8.5 24.18c0 8.659 7.097 15.679 15.852 15.679 8.754 0 15.851-7.02 15.851-15.68 0-3.283-1.02-6.331-2.764-8.85'
    />
    <path
      stroke='#fff'
      strokeLinecap='round'
      strokeWidth={1.5}
      d='M31.598 24.174c0 3.901-3.24 7.064-7.236 7.064-3.997 0-7.237-3.163-7.237-7.064 0-3.902 3.24-7.065 7.237-7.065M24.344 8.5v15.852'
    />
  </svg>
);
export default NoGoal;
