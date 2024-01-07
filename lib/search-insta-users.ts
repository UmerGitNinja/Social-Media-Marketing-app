import axios from "axios";

const SearchInstaUsers = async (username: string) => {
  const options = {
    method: 'GET',
    url: 'https://instagram-scraper-api2.p.rapidapi.com/v1/search_users',
    params: {
      search_query: username
    },
    headers: {
      'X-RapidAPI-Key': '84333b0da8msh5f7d39ffebc9062p1d09bajsn45bb3f847807',
      'X-RapidAPI-Host': 'instagram-scraper-api2.p.rapidapi.com'
    }
  };
  try {
    const response = await axios.request(options);
     return response.data?.data?.items || [];
  } catch (error) {
    console.error(error);
  }
};

export default SearchInstaUsers;
