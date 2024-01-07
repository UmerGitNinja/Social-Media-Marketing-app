import axios from "axios";
const createrFetcher = async (query: string) => {
  if (!query) {
    return null
  }
  try {
    const Response = await axios.get("https://tiktok-scraper7.p.rapidapi.com/user/search/",{
      params: {
        keywords: query,
        count: '50',
        cursor: '0'
      },
      headers: {
        'X-RapidAPI-Key': '0bc12f896dmsha7aa00e7fbc6f96p1bbdb4jsn078219290364',
        'X-RapidAPI-Host': 'tiktok-scraper7.p.rapidapi.com'
      }
    });

    return Response.data?.data?.user_list;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default createrFetcher;
