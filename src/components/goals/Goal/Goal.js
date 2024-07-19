import Dropdown from '@/components/Dropdown';
import Building from '@/components/Icons/Building';
import CircleMinus from '@/components/Icons/CircleMinus';
import CirclePlus from '@/components/Icons/CirclePlus';
import DropdownIcon from '@/components/Icons/Dropdown';
import { formatDate } from '@/constants/common';
import { deleteGoal } from '@/pages/goals';
import { useUsers } from '@/services/users';
import clsx from 'clsx';
import Router from 'next/router';
import { forwardRef, useMemo, useRef } from 'react';
import Xarrow from 'react-xarrows';

const Goal = forwardRef(
  (
    {
      goal,
      selected,
      mainGoalRef,
      showChildren,
      setShowChildren,
      hasChildren,
      ...props
    },
    ref
  ) => {
    const { data: users } = useUsers();
    const user = useMemo(
      () => users?.find((user) => user.id === goal.owner),
      [goal, users]
    );
    const goalRef = useRef();
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
            'relative z-10 flex w-80 flex-col gap-2 rounded border-2 border-transparent bg-white p-[26px] text-left shadow-[0px_1px_6px_0px_#2330431A] transition-all',
            {
              '!border-navy-blue': selected,
            }
          )}
          {...props}
        >
          <span className='absolute left-[50%] top-0' ref={goalRef} />
          <div className='cursor-auto' data-no-dnd='true'>
            <div className='flex items-center gap-2 text-sm'>
              <div className='flex-shrink-0'>
                <Building />
              </div>
              <div className='flex-shrink-0 flex-grow text-xs text-payne-gray'>
                Goal
              </div>
              <div className='flex-shrink-0 rounded-[42px] bg-lavender-blue px-2 py-1 text-dark-sapphire'>
                {goal.progress || 0}%
              </div>
              <div className='flex-shrink-0 cursor-pointer'>
                <Dropdown items={dropdownItems}>
                  <DropdownIcon className='active:translate-y-[0.5px]' />
                </Dropdown>
              </div>
            </div>
            <div className='!text-[15px] text-sm font-medium text-midnight'>
              {goal.title}
            </div>
            <div className='flex items-center justify-between text-xs text-payne-gray'>
              <div>Ends on {formatDate(goal.endDate)}</div>
              {user && (
                <div>
                  <img
                    src={user.img}
                    height={24}
                    width={24}
                    alt=''
                    className='rounded'
                  />
                </div>
              )}
            </div>
          </div>
          <div
            className='absolute -bottom-4 left-[50%] z-20 size-6'
            ref={ref}
            data-no-dnd='true'
          >
            {typeof setShowChildren === 'function' && hasChildren && (
              <>
                {showChildren && (
                  <CircleMinus onClick={() => setShowChildren(false)} />
                )}
                {!showChildren && (
                  <CirclePlus onClick={() => setShowChildren(true)} />
                )}
              </>
            )}
          </div>
        </div>
        {mainGoalRef && goal.parentId && (
          <Xarrow
            start={mainGoalRef}
            end={goalRef}
            showHead={false}
            showTail={false}
            color='black'
            strokeWidth={1}
          />
        )}
      </>
    );
  }
);

Goal.displayName = 'Goal';

export default Goal;
