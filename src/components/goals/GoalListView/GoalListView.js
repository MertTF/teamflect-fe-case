import { useUsers } from '@/services/users';
import GoalListItem from './GoalListItem';

const GoalListView = ({ goals }) => {
  const { data: users, isLoading } = useUsers();

  if (isLoading) {
    return 'loading...';
  }

  return (
    <div className='flex flex-col gap-4'>
      {goals
        .filter((goal) => !goal.parentId)
        .map((goal) => {
          const childGoals = goals.filter(
            (childGoal) => childGoal.parentId === goal.id
          );

          return (
            <GoalListItem
              key={`goal-list-item-${goal.id}`}
              goal={goal}
              childGoals={childGoals}
              users={users}
            />
          );
        })}
    </div>
  );
};

export default GoalListView;
