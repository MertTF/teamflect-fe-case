import { KeyboardSensor, MouseSensor } from '@/constants/dnd';
import { DndContext, useSensor, useSensors } from '@dnd-kit/core';
import { useMemo } from 'react';
import { useXarrow, Xwrapper } from 'react-xarrows';
import GoalTreeNode from '../GoalTreeNode';

const GoalTreeView = ({ goals, updateGoalParent }) => {
  const mainGoals = useMemo(
    () => goals.filter((goal) => !goal.parentId),
    [goals]
  );
  const updateXarrow = useXarrow();
  const sensors = useSensors(useSensor(MouseSensor), useSensor(KeyboardSensor));

  function handleDragEnd({ over, active }) {
    setTimeout(() => {
      updateXarrow();
    }, 10);

    if (!over) {
      return;
    }

    if (active.data.current.parentId === over.id) {
      return;
    }

    updateGoalParent({
      id: active.data.current.id,
      parentId: over.id,
    });
  }

  return (
    <div className='relative -mr-10 grid grid-flow-row overflow-auto'>
      <Xwrapper>
        <DndContext
          onDragMove={updateXarrow}
          onDragEnd={handleDragEnd}
          sensors={sensors}
        >
          {mainGoals.map((mainGoal, goalIndex) => (
            <GoalTreeNode
              key={`goal-drop-area-${goalIndex}`}
              mainGoal={mainGoal}
              subGoals={goals.filter((goal) => goal.parentId === mainGoal.id)}
            />
          ))}
        </DndContext>
      </Xwrapper>
    </div>
  );
};

export default GoalTreeView;
