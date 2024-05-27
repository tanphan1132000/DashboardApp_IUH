import dayjs from 'dayjs';

export * from './sizeNormalize';

export const formatTime = (time: Date) => {
  return dayjs(time).format('D/MM\nHH:mm');
};
