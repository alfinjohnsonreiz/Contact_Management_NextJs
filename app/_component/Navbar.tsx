import Link from "next/link";
import React from "react";
import LogoutButton from "./LogoutButton";
import { getSesssion } from "../_lib/session";

async function Navbar() {
  const session = await getSesssion();
  return (
    <nav className="bg-white shadow-sm">
      <div className="container border-2  mx-auto p-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Contact Manager
        </Link>
        <div className="flex items-center space-x-4">
          {session ? (
            <>
              <Link href="/contact" className="hover:text-blue-600 mr-8">
                Contacts
              </Link>
              <LogoutButton />
            </>
          ) : (
            <>
              <Link href="/login" className="hover:text-blue-600 mr-8">
                Login
              </Link>
              <Link href="/login" className="hover:text-blue-600 mr-8">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
