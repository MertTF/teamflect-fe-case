import { useDroppable } from '@dnd-kit/core';
import clsx from 'clsx';

const Droppable = ({ id, children, className }) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      className={clsx(
        {
          '!bg-[#fcfcfc]': isOver,
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Droppable;
