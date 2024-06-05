import {API_KEY} from '@constants';
import {commonGet} from './axiosConfig';
import {Feed} from '@types';

export const getFeed = async () => {
  const url = `/feeds.json?api_key=${API_KEY}&results=1`;
  return await commonGet<Feed>(url);
};

export const getField = async (field: number) => {
  const url = `/fields/${field}.json?api_key=${API_KEY}&results=2`;
  return await commonGet(url);
};

export const getStatusUpdate = async () => {
  const url = `/status.json?api_key=${API_KEY}`;
  return await commonGet(url);
};

export const updatePumpStatus = async (status: number) => {
  const url = `https://api.thingspeak.com/update?api_key=DGSECGLF7VUBS3GN&field4=${status}`;
  return await commonGet(url);
};
