import LoginForm from "@/app/_component/LoginForm";
import Link from "next/link";
import React from "react";

function Login() {
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <LoginForm />
      <p className="mt-4 text-center">
        Don't have an account ?{" "}
        <Link href={"/register"} className="hover:text-blue-600 mr-8">
          Register
        </Link>
      </p>
    </div>
  );
}

export default Login;
