import fetcher from "@/lib/insta-fetcher";
import useSWR from "swr";
const useUserPosts = (Id?: string, pagination_token?:string) => {
  const { data, error } = useSWR(
    `https://instagram-scraper-api2.p.rapidapi.com/v1.2/posts?username_or_id_or_url=${Id}&?pagination_token=${pagination_token}`,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshWhenOffline: false,
      refreshWhenHidden: false,
      refreshInterval: 0,
    }
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useUserPosts;
