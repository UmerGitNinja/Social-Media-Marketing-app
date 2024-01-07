import axios from "axios";

const fetcher = async (url: string) => {
  const res = await axios.get(url, {
    params: {
      count: "100",
    },
    headers: {
      "X-RapidAPI-Key": "0bc12f896dmsha7aa00e7fbc6f96p1bbdb4jsn078219290364",
      "X-RapidAPI-Host": "twitter-v23.p.rapidapi.com",
    },
  });
  return res.data?.data?.user?.result?.timeline?.timeline?.instructions?.[2]
    ?.entries;
};

export default fetcher;
