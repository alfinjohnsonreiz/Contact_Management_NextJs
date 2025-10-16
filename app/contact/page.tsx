import React from "react";
import { getSesssion } from "../_lib/session";
import { getContacts } from "../api/contact";
import { ContactType } from "../_types/contact";
import ContactList from "../_component/ContactList";

async function Contact() {
  const user = await getSesssion();
  if (!user) {
    return (
      <div>
        Please{" "}
        <a href="/login" className="text-blue-600 hover:underline">
          login
        </a>
        to view contacts
      </div>
    );
  }

  const contacts = await getContacts(user?.id);
  if (!contacts || contacts.length == 0) {
    return (
      <div>
        Please{" "}
        <a href="/contact/new" className="text-blue-600 hover:underline">
          Add a contact
        </a>
        to your contact list
      </div>
    );
  }
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-shadow-blue-300 font-bold">Your contacts</h1>
        <a
          href="/contact/new"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
        >
          Add Contact
        </a>
      </div>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default Contact;
