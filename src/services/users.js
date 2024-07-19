import useSWR from 'swr';
import fetcher from './fetcher';

export const useUsers = () => {
  return useSWR('users', () => fetcher('/users'), {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  });
};
