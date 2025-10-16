import React from "react";
import { createContactAction } from "../actions/contact";
import { getSesssion } from "../_lib/session";

async function AddContact() {
  const user = await getSesssion();
  return (
    <form className="space-x-4" action={createContactAction}>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 p-4"
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 p-4"
        />
      </div>

      <input type="hidden" name="userId" value={user?.id} />
      <button
        type="submit"
        className="w-full mt-3 flex justify-center py-4 px-4 border border-transparent shadow-sm text-white font-medium bg-blue-600 hover:bg-blue-700"
      >
        Add
      </button>
    </form>
  );
}

export default AddContact;
