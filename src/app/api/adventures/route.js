import connectMongoDB from "@/libs/mongodb";
import Adventure from "@/models/adventures";
import { NextResponse } from "next/server";
// import c

export async function POST(request) {
  const {title, cardDiscription, cardImage, cardImageAlt, eventDiscription, writeUpPartOne, writeUpPartTwo, imageGallery} =  await request.json();

  await connectMongoDB();

  await Adventure.create({ title, cardDiscription, cardImage, cardImageAlt, eventDiscription, writeUpPartOne, writeUpPartTwo, imageGallery});

  return NextResponse.json({message: 'Adventure Created'}), {status: 201}
};


export async function GET() {
  await connectMongoDB();
  const adventures = await Adventure.find();
  return NextResponse.json({adventures});



}
