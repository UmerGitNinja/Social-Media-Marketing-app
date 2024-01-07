import axios from "axios";

const fetcher = async (url: string) => {
  const res = await axios.get(url,{
    headers: {
      'X-RapidAPI-Key': '84333b0da8msh5f7d39ffebc9062p1d09bajsn45bb3f847807',
      'X-RapidAPI-Host': 'instagram-scraper-api2.p.rapidapi.com'
    }
  });
  return res.data?.data?.items || [];
};

export default fetcher;