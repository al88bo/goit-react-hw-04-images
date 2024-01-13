import axios from 'axios';
import { PER_PAGE } from 'utilities/constants';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '40697905-03a35d5cf8bc79d8acf92618e';

export const axiosGet = async (query, page = 1) => {
  const { data } = await axios.get(
    `?key=${API_KEY}&image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=${PER_PAGE}`
  );
  return data;
};
