import dayjs from 'dayjs';

export const siteTitle = 'Goal CRUD Application';

export const formatDate = (date) => {
  if (!date) {
    return;
  }

  return dayjs(date).format('MMMM DD, YYYY');
};
