import axios from "axios";

const SearchUsers = async (Query: string) => {
  const options = {
    method: "GET",
    url: "https://twitter-v23.p.rapidapi.com/AutoComplete/",
    params: { q: Query },
    headers: {
      "X-RapidAPI-Key": "0bc12f896dmsha7aa00e7fbc6f96p1bbdb4jsn078219290364",
      "X-RapidAPI-Host": "twitter-v23.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.users;
  } catch (error) {
    console.error(error);
  }
};

export default SearchUsers;
