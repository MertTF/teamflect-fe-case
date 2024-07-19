import Dropdown from '@/components/Dropdown';
import Building from '@/components/Icons/Building';
import DropdownIcon from '@/components/Icons/Dropdown';
import HorizontalLines from '@/components/Icons/HorizontalLines';
import Progress from '@/components/Progress';
import { formatDate } from '@/constants/common';
import { deleteGoal } from '@/pages/goals';
import clsx from 'clsx';
import Router from 'next/router';
import { useMemo, useState } from 'react';

const GoalListItem = ({ goal, childGoals, users, className }) => {
  const [childsVisible, setChildsVisible] = useState(false);
  const user = useMemo(() => {
    return users?.find((user) => user.id === goal.ownerId);
  }, [goal, users]);
  const dropdownItems = useMemo(() => {
    return [
      {
        label: 'Edit',
        onClick: () => {
          Router.push(`/goals/edit/${goal.id}`);
        },
      },
      {
        label: 'Delete',
        onClick: () => {
          deleteGoal(goal);
        },
      },
    ];
  }, [goal]);

  return (
    <>
      <div
        className={clsx(
          'flex items-center justify-between gap-5 rounded bg-white py-7 pl-8 pr-5 text-xs text-payne-gray shadow-[0px_1px_6px_0px_#2330431A]',
          className
        )}
      >
        <div className='flex flex-shrink-0 items-center gap-5'>
          {!!childGoals?.length && (
            <div
              className={clsx('cursor-pointer transition-all', {
                'rotate-90': childsVisible,
              })}
              onClick={() => setChildsVisible((state) => !state)}
            >
              <HorizontalLines />
            </div>
          )}
          <div>
            <Building />
          </div>
        </div>
        {user && (
          <div className='flex flex-1 items-center justify-start gap-2'>
            <img
              src={user.img}
              alt={user.displayName}
              loading='lazy'
              className='size-6 rounded'
            />
            <div className='text-base font-medium text-midnight'>
              {goal.title}
            </div>
          </div>
        )}
        <div className='flex flex-shrink-0 items-center gap-5 text-right'>
          <div className='hidden lg:block'>{formatDate(goal.endDate)}</div>
          <div className='hidden lg:block'>
            <Progress progress={goal.progress || 0} />
          </div>
          <div
            className={clsx('flex-shrink-0 rounded-[42px] px-2 py-1', {
              'bg-lavender-blue text-dark-sapphire':
                (+goal.progress || 0) < 100,
              'bg-green-600 text-white': +goal.progress >= 100,
            })}
          >
            {+goal.progress >= 100 ? 'Completed' : 'On track'}
          </div>
          <div className='flex-shrink-0 cursor-pointer'>
            <Dropdown items={dropdownItems}>
              <DropdownIcon className='active:translate-y-[0.5px]' />
            </Dropdown>
          </div>
        </div>
      </div>
      {childsVisible && childGoals?.length > 0 && (
        <>
          <div className='-mt-2 flex flex-col gap-2'>
            {childGoals.map((childGoal) => (
              <GoalListItem
                key={`goal-list-item-child-${childGoal.id}`}
                goal={childGoal}
                users={users}
                className='ml-8'
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default GoalListItem;
