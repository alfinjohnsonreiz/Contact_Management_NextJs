import { editContactAction } from "@/app/actions/contact";
import { getContactById } from "@/app/api/contact";
import React from "react";

async function EditContact({ params }: { params: { id: string } }) {
  const { id } = await params;

  const contact = await getContactById(id);

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <form action={editContactAction} className="space-x-4">
        <input type="hidden" name="id" value={contact.id} />

        <div className="mt-3">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            defaultValue={contact.name}
            className="mt-1 block w-full rounded-md  border-gray-300 shadow-sm focus:border-blue-500 p-4"
          />
        </div>
        <div className="mt-3">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            defaultValue={contact.email}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 p-4"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-3 flex justify-center py-3 px-4 border border-transparent
      shadow-sm text-white font-medium bg-green-600 hover:bg-green-700"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default EditContact;
