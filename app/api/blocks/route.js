// app/api/blocks/route.js
import { NextResponse } from "next/server";
import data from "./data.json";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title");

  if (title) {
    const result = data.find(
      (item) => item.title.toLowerCase() === title.toLowerCase()
    );
    if (result) {
      return NextResponse.json(result);
    } else {
      return NextResponse.json(
        { message: "Object not found." },
        { status: 404 }
      );
    }
  } else {
    return NextResponse.json(data);
  }
}
