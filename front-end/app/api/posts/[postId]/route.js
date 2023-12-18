import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const postId = params.postId;
  const res = await fetch(`http://localhost:3001/post/${postId}`);

  if (!res.ok) throw new Error("Error on fetch data");

  const data = await res.json();

  return NextResponse.json({ data });
}
