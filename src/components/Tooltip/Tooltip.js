// TODO:
// use floating-ui
const Tooltip = ({ content, hidden, children }) => {
  if (hidden) {
    return children;
  }

  return (
    <div className='group relative'>
      <div className='absolute left-[50%] top-[calc(100%+0.5rem)] z-50 hidden w-auto -translate-x-[50%] group-hover:block'>
        <div className='bottom-full right-0 whitespace-nowrap rounded bg-black px-4 py-1 text-xs text-white'>
          {content}
          <svg
            className='absolute bottom-full left-0 h-2 w-full rotate-180 text-black'
            x='0px'
            y='0px'
            viewBox='0 0 255 255'
          >
            <polygon className='fill-current' points='0,0 127.5,127.5 255,0' />
          </svg>
        </div>
      </div>
      <span>{children}</span>
    </div>
  );
};

export default Tooltip;
