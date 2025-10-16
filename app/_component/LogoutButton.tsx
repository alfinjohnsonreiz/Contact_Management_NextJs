"use client";
import React from "react";
import { logoutAction } from "../actions/auth";
import { redirect } from "next/navigation";

function LogoutButton() {
  return (
    <div>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-500 transition-colors cursor-pointer"
        onClick={async () => {
          await logoutAction();
          redirect("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default LogoutButton;
