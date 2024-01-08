import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      OrderTotal,
      RetweetsValue,
      ViewsValue,
      FollowersValue,
      CommentsValue,
      LikesValue,
      CreatorName,
      ProfileUrl,
      Email,
      checkedTweets,
      API_KEY,
    } = body;
    if (!API_KEY) {
      return new NextResponse("unauthorized", { status: 401 });
    }
    // if (
    //   OrderTotal === 0 ||
    //   SaveValue === 0 ||
    //   FollowerValue === 0 ||
    //   ListenerValue === 0 ||
    //   PlayValue === 0
    // ) {
    //   return new NextResponse("All values should be non-zero", { status: 400 });
    // }

    const createOrder = await prismadb.twitterOrder.create({
      data: {
        Price: OrderTotal,
        Email,
        Tweets: checkedTweets,
        Followers: FollowersValue,
        Comments: CommentsValue,
        Views: ViewsValue,
        Retweets: RetweetsValue,
        UserName: CreatorName,
        ProfileUrl: ProfileUrl,
        Likes: LikesValue,
      },
    });

    return NextResponse.json(createOrder);
  } catch (error) {
    console.error("Error processing order:", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export async function GET(req: Request) {
  try {
    const userApikey = req.headers.get("x-api-key");
    if (!userApikey || userApikey !== API_KEY) {
      return new NextResponse("unauthorized", { status: 401 });
    }
    const Orders = await prismadb.twitterOrder.findMany();

    return NextResponse.json(Orders);
  } catch (error) {
    console.log("[ORDER GET]", error);
    return new NextResponse("Something went wrong", { status: 400 });
  }
}
