"use client";
import useSWR from 'swr'
import fetcher from '@/lib/twitter-fetcher';

const useUserTweets = (createrId?: string) => {
  const { data, error } = useSWR(
    createrId
      ? `https://twitter-v23.p.rapidapi.com/UserTweets/?id=${createrId}`
      : null,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );


  return {
    UserTweets: data,
    error,
  };
};

export default useUserTweets
