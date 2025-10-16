import React from "react";
import { ContactType } from "../_types/contact";
import Link from "next/link";
import { FiEdit, FiEdit2 } from "react-icons/fi";
import DeleteContact from "./DeleteContact";

function ContactList({ contacts }: { contacts: ContactType[] }) {
  return (
    <div className="space-y-4">
      {contacts?.map((cnt: ContactType) => (
        <div key={cnt.id} className="p-4 border rounded-md">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-semibold">{cnt.name}</h2>
              <p>{cnt.email}</p>
            </div>
            <div className="flex items-center  gap-2">
              <Link
                href={`/contact/edit/${cnt.id}`}
                className="flex items-center gap-2 p-4 border-2 rounded-md border-blue-100 text-blue-500 hover:bg-blue-300"
              >
                <FiEdit /> Edit
              </Link>
              <DeleteContact contactId={cnt.id!} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactList;
