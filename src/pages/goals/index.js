import Button from '@/components/Button';
import GoalListView from '@/components/goals/GoalListView';
import GoalTreeView from '@/components/goals/GoalTreeView';
import NoGoals from '@/components/goals/NoGoals';
import SegmentedControl from '@/components/SegmentedControl';
import { siteTitle } from '@/constants/common';
import { listingTypes } from '@/constants/goals';
import { createUseExternalEvents } from '@/hooks/createUseExternalEvents';
import {
  deleteGoal as deleteGoalService,
  updateGoal as updateGoalService,
  useGoals,
} from '@/services/goals';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useXarrow } from 'react-xarrows';

const [useGoalEvents, createEvent] = createUseExternalEvents('teamflect-goals');

/**
 * @callback DeleteGoal
 * @param {import('@/constants/goals').Goal} goal
 * @returns {void},
 * @type {DeleteGoal} deleteGoal
 */
export const deleteGoal = createEvent('deleteGoal');

const GoalsIndex = () => {
  const updateXarrow = useXarrow();
  const [listingType, setListingType] = useState();
  const { data: goals, isLoading, mutate } = useGoals();

  useEffect(() => {
    if (!['Tree', 'List'].includes(localStorage?.getItem('listingType'))) {
      setListingType('Tree');
      return;
    }

    setListingType(localStorage.getItem('listingType'));
  }, []);

  useEffect(() => {
    if (!listingType) {
      return;
    }

    localStorage?.setItem('listingType', listingType);
  }, [listingType]);

  const onListingChange = (item) => {
    setListingType(item.value);
  };

  const updateGoal = async (goal) => {
    await updateGoalService(goal);

    await mutate();

    setTimeout(() => {
      updateXarrow();
    }, 10);
  };

  const updateGoalParent = async ({ id, parentId }) => {
    const goal = goals?.find((goalsItem) => goalsItem.id === id);

    if (!goal || id === parentId) {
      return;
    }

    const childGoals = goals?.filter((goalItem) => goalItem.parentId === id);

    if (childGoals?.length) {
      await Promise.all(
        childGoals.map((childGoal) =>
          updateGoalParent({ id: childGoal.id, parentId })
        )
      );
    }

    updateGoal({
      ...goal,
      parentId,
    });
  };

  const deleteGoal = async (goal) => {
    const childGoals = goals?.filter(
      (goalItem) => goalItem.parentId === goal.id
    );

    if (childGoals?.length) {
      // çocuk hedefleri sil
      await Promise.all(
        childGoals.map((childGoal) => deleteGoalService(childGoal))
      );

      // ya da ebeveynlerini güncelle?
      // await Promise.all(
      //   childGoals.map((childGoal) => updateGoalParent({ id: childGoal.id, parentId: null }))
      // )
    }

    await deleteGoalService(goal);

    await mutate();

    setTimeout(() => {
      updateXarrow();
    }, 10);
  };

  useGoalEvents({
    deleteGoal,
  });

  return (
    <>
      <Head>
        <title>{`${siteTitle} - Goals`}</title>
      </Head>
      {isLoading && <div>loading...</div>}
      {!goals?.length && !isLoading && <NoGoals />}
      {goals?.length && (
        <div className='flex flex-col gap-4 pl-8 pr-10'>
          <div className='flex items-center justify-between'>
            <div className='text-xl font-medium text-midnight'>Goals</div>
            <Link href='/goals/create'>
              <Button>New goal</Button>
            </Link>
          </div>
          <div className='flex rounded bg-white p-4 shadow-[0px_1px_6px_0px_#2330431A]'>
            <SegmentedControl
              selectedValue={listingType}
              setSelectedValue={onListingChange}
              data={listingTypes}
            />
          </div>
          {listingType === 'Tree' && (
            <GoalTreeView goals={goals} updateGoalParent={updateGoalParent} />
          )}
          {listingType === 'List' && <GoalListView goals={goals} />}
        </div>
      )}
    </>
  );
};

export default GoalsIndex;
