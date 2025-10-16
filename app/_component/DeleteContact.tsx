"use client";
import React from "react";
import { FiTrash } from "react-icons/fi";
import { deleteContact } from "../api/contact";

function DeleteContact({ contactId }: { contactId: string }) {
  const handleDelete = async (e: any) => {
    if (confirm("Are you sure you want to delete this contact ? ")) {
      e.preventDefault();
      deleteContact(contactId);
    }
  };
  return (
    <div>
      <button
        className="flex items-center gap-2 px-3 py-3 border border-red-300 rounded-md"
        onClick={(e) => handleDelete(e)}
      >
        <FiTrash />
        Delete
      </button>
    </div>
  );
}

export default DeleteContact;
