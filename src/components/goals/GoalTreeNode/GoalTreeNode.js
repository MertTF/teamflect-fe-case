import Draggable from '@/components/Draggable';
import Droppable from '@/components/Droppable';
import { useEffect, useRef, useState } from 'react';
import Goal from '../Goal';

const GoalTreeNode = ({ mainGoal, subGoals }) => {
  const [showChildren, setShowChildren] = useState(false);
  const mainGoalRef = useRef();

  useEffect(() => {
    if (!showChildren || !mainGoalRef.current) {
      return;
    }

    mainGoalRef.current.scrollIntoView({
      inline: 'center',
    });
  }, [showChildren, mainGoalRef]);

  return (
    <Droppable
      id={mainGoal.id}
      className='border-t-very-light-grey border-t first-of-type:border-t-0'
    >
      <div className='drop-area relative py-16'>
        <div className='parent flex w-full min-w-max flex-col items-center justify-center gap-16 pr-10'>
          <Draggable id={mainGoal.id} data={mainGoal}>
            <Goal
              ref={mainGoalRef}
              goal={mainGoal}
              showChildren={showChildren}
              setShowChildren={setShowChildren}
              hasChildren={subGoals?.length > 0}
            />
          </Draggable>
          {showChildren && (
            <div className='flex items-center justify-center gap-20'>
              {subGoals.map((goal) => (
                <Draggable
                  key={`goal-child-${goal.id}`}
                  id={goal.id}
                  data={goal}
                >
                  <Goal mainGoalRef={mainGoalRef} goal={goal} />
                </Draggable>
              ))}
            </div>
          )}
        </div>
      </div>
    </Droppable>
  );
};

export default GoalTreeNode;
