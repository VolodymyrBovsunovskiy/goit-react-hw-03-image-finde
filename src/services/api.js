import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const MY_KEY = '39462215-49277aab0c5d0b28d6f95db9a';

export const fetchImagesByCategories = async (name, page) => {
  axios.defaults.params = {
    key: MY_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
    page,
  };
  const { data } = await axios.get(`${BASE_URL}?q=${name}`);
  return data;
};