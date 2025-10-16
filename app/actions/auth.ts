"use server";
import { redirect } from "next/navigation";
import axios from "axios";
import { UserType } from "../_types/user";
import { deleteSession, setSesssion } from "../_lib/session";

const API_URL = "http://localhost:3001";

export const loginAction = async (formData: FormData) => {
  console.log("formdata", formData);
  const response = await axios.get(
    `${API_URL}/users?email=${formData.get("email")}&password=${formData.get(
      "password"
    )}`
  );

  const user: UserType = response.data[0];
  if (!user) throw new Error("Invalid credentials");

  // set user in cookie
  await setSesssion({ name: user.name, email: user.email, id: user.id });
  if (user) {
    console.log("user founded", user);
    redirect("/contact");
  }
};

export const logoutAction = async () => {
  await deleteSession();
  redirect("/login");
};
