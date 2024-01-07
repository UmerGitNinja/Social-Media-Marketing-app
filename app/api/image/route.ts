import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");
  try {
    const imageRes = await axios.get(url ?? "", {
      responseType: "arraybuffer",
    });
    const buffer = Buffer.from(imageRes.data, "binary");
    const headers = { "Content-Type": imageRes.headers["content-type"] };
    return new NextResponse(buffer, { headers });
  } catch (error: any) {
    console.error("Error fetching Instagram data:", url);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}