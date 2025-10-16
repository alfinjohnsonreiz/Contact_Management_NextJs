import AddContact from "@/app/_component/AddContact";
import React from "react";

function NewContact() {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1>Add a New Contact</h1>
      <div>
        <AddContact />
      </div>
    </div>
  );
}

export default NewContact;
