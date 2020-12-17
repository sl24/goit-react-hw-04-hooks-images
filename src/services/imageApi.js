import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const fetchImgWithQuery = async (search = '', page = 1) => {
  const { data } = await axios.get(
    `/?q=${search}&page=${page}&key=19056079-10451acfece32978cd1e0eb32&image_type=photo&orientation=horizontal&per_page=12`,
  );
  return data.hits;
};

export default fetchImgWithQuery;
