import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';

export const fetchArticlesWithTopic = async (value) => {
  const myApiKey = import.meta.env.VITE_API_KEY;

  const response = await axios.get('/search/photos', {
    params: {
      query: value,
      page: 1,
      per_page: 15,
    },
    headers: {
      Authorization: `Client-ID ${myApiKey}`,
    },
  });
  return response.data;
};
