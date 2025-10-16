"use server";
import { revalidatePath } from "next/cache";
import { createContact, updateContact } from "../api/contact";

export const createContactAction = async (formData: FormData) => {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const userId = formData.get("userId") as string;

    if (!name || !email) {
      throw new Error("Name and email are required");
    }

    await createContact({ name, email, userId });
    // After creating, revalidate contacts page so UI updates
    revalidatePath("/contact/new");
  } catch (error) {
    console.log(error);
  }
};

export const editContactAction = async (formData: FormData) => {
  try {
    const id = formData?.get("id") as string;
    const name = formData?.get("name") as string | undefined;
    const email = formData?.get("email") as string | undefined;
    const userId = formData?.get("userId") as string | undefined;
    await updateContact(id, { name, email, userId });
    revalidatePath(`/contact/edit/${id}`);
  } catch (error) {
    console.log(error);
  }
};
