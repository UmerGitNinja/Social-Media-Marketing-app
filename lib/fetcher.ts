import axios from "axios";
import getSpotifyToken from "./getSpotifyToken";
const fetcher = async (url: string) => {
  if (!url) {
    return null;
  }

  try {
    const token = await getSpotifyToken();

    const Response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return Response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default fetcher;
