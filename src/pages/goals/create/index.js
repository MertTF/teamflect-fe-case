import GoalForm from '@/components/goals/GoalForm';
import { siteTitle } from '@/constants/common';
import Head from 'next/head';

const CreateGoalPage = () => {
  return (
    <>
      <Head>
        <title>{`${siteTitle} - Create Goal`}</title>
      </Head>
      <GoalForm />
    </>
  );
};

export default CreateGoalPage;
