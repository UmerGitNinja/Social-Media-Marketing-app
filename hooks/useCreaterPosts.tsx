import useSWR from "swr";
import axios from "axios";

const useCreaterPosts = (createrId?: string) => {
  const { data, error } = useSWR(
    createrId
      ? `https://tiktok-scraper7.p.rapidapi.com/user/posts?user_id=${createrId}`
      : null,
    async (url: string) => {
      const res = await axios.get(url, {
        params: {
          count: "500",
          cursor: "0",
        },
        headers: {
          "X-RapidAPI-Key":
            "0bc12f896dmsha7aa00e7fbc6f96p1bbdb4jsn078219290364",
          "X-RapidAPI-Host": "tiktok-scraper7.p.rapidapi.com",
        },
      });
      return res.data?.data;
    }
  );

  return {
    CreaterData: data,
    error,
  };
};

export default useCreaterPosts;
