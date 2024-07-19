import GoalForm from '@/components/goals/GoalForm';
import { siteTitle } from '@/constants/common';
import { useGoal } from '@/services/goals';
import Head from 'next/head';
import { useRouter } from 'next/router';

const EditGoalPage = () => {
  const router = useRouter();
  const goalId = router.query.id;
  const { data: goal, isLoading, mutate } = useGoal(goalId);

  if (!goalId || isLoading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{`${siteTitle} - Edit Goal`}</title>
      </Head>
      <GoalForm goal={goal} mutateGoal={mutate} />
    </>
  );
};

export default EditGoalPage;
