"use server";

import UserModel from "@/models/User";
import QuestionModel from "@/models/Question";
import connectToDb from "@/db/db";
import { GetUserByIdParams, CreateUserParams, UpdateUserParams, DeleteUserParams } from "./shared.types";
import { revalidatePath } from "next/cache";

export async function getUserByID(params: GetUserByIdParams) {
  try {
    connectToDb();

    const { userId } = params;

    const user = await UserModel.findOne({ clerkId: userId });

    return user;
  } catch (error) {
    console.log("getUserByID ~ error:", error);
  }
}

export async function createUSer(userData: CreateUserParams) {
  console.log("🅾createUSer ~ userData:", userData);

  // const { clerkId, name, username, email, picture } = userData;

  try {
    connectToDb();
    const newUser = await UserModel.create({ ...userData });
    return newUser;
  } catch (error) {
    console.log("createUSer ~ error:", error);
  }
}

export async function updateUSer(userData: UpdateUserParams) {
  const { clerkId, updateData, path } = userData;

  try {
    connectToDb();
    await UserModel.findOneAndUpdate({ clerkId }, updateData, {
      new: true,
    });

    revalidatePath(path);
  } catch (error) {
    console.log("updateUSer ~ error:", error);
  }
}

export async function deleteUser(param: DeleteUserParams) {
  const { clerkId } = param;

  try {
    connectToDb();

    // Delete user and everything related to user (comments,tags,questions)

    const user = await UserModel.findOneAndDelete({ clerkId });

    if (!user) {
      throw new Error("user not found");
    }

    // delete user questions
    await QuestionModel.deleteMany({ author: user._id });

    // TODO: delete user answers, comments, etc
    // Get user questionIds and delete all questions
    // const questionIds = await QuestionModel.find({ author: user._id }).distinct("_id");

    // delete user
    const deletedUser = await UserModel.findByIdAndDelete(user._id);

    return deletedUser;
  } catch (error) {
    console.log("deleteUser ~ error:", error);
  }
}
