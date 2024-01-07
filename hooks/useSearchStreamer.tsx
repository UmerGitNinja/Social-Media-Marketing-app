"use client"

import useSWR from "swr";
import axios from "axios";
import getTwitchToken from "@/lib/getTwitchToken";

const useSearchStreamer = (query: string) => {
  const { data, error } = useSWR(
    query ? `https://api.twitch.tv/helix/search/channels?query=${query}` : null,
    async (url) => {
      if (!url) {
        return null;
      }

      try {
        const token = await getTwitchToken();
        console.log("Access Token:", token);

        const searchResponse = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Client-ID': 'z9slyk3o8ja6qfkqv75r0w8yb062hi', // Replace with your actual client ID
          },
        });

        return searchResponse.data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    },
    {
      revalidateOnFocus: false,
    }
  );

  console.log("Data:", data);
  console.log("Error:", error);

  return {
    data: data?.data,
    isLoading: !error && !data,
    error,
  };
};

export default useSearchStreamer;
