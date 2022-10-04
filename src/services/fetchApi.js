import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';


export const fetchImages = async (imageName, page) => {
    const key = "29219900-e72d79efdd6d7521174d51810"
  const response = await axios.get(`/?q=${imageName}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12&`);
  return response.data;
};