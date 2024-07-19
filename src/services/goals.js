import useSWR from 'swr';
import fetcher from './fetcher';

export const useGoals = () => {
  return useSWR('goals', () => fetcher('/goals'), {
    revalidateOnFocus: false,
    revalidateIfStale: false,
    revalidateOnMount: true,
  });
};

export const useGoal = (goalId) => {
  return useSWR(goalId && `goal-${goalId}`, () => fetcher(`/goals/${goalId}`), {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  });
};

export const createGoal = (goal) => {
  return fetcher(`/goals`, {
    method: 'POST',
    body: JSON.stringify(goal),
  });
};

export const updateGoal = (goal) => {
  return fetcher(`/goals/${goal.id}`, {
    method: 'PUT',
    body: JSON.stringify(goal),
  });
};

export const deleteGoal = (goal) => {
  return fetcher(`/goals/${goal.id}`, {
    method: 'DELETE',
  });
};
