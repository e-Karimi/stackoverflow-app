"use server";

import UserModel from "@/models/User";
import connectToDb from "@/db/db";

export async function getUserByID(params: any) {
  try {
    connectToDb();

    const { userId } = params;

    const user = await UserModel.findOne({ clerkId: userId });

    return user;
  } catch (error) {
    console.log("getUserByID ~ error:", error);
  }
}
