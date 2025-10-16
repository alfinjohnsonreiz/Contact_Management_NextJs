"use client";
import React from "react";
import { loginAction } from "../actions/auth";

function LoginForm() {
  return (
    <>
      <form className="space-x-4" action={loginAction}>
        <div className="mt-2">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 p-4"
          />
        </div>
        <div className="mt-2">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 p-4"
          />
        </div>
        <button
          type="submit"
          className="w-full mt-3 flex justify-center py-2 px-4 border border-transparent shadow-sm text-white font-medium bg-blue-600 hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </>
  );
}

export default LoginForm;
