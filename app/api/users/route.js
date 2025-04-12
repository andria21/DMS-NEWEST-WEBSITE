import { NextResponse } from "next/server";
import connect from "../../../utils/db";
import User from "../../../models/User";

export const GET = async (request) => {
  try {
    await connect();

    const users = await User.find();

    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
  try {
    const body = await request.json();

    const newPost = new User(body);

    await connect();
    await newPost.save();

    return new Response(JSON.stringify({ message: "User has been created" }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ message: "Database Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
