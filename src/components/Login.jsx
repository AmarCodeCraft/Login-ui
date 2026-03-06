import React, { useState } from "react";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleClick = () => {
    console.log(email, password);
    setemail("");
    setpassword("");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-linear-to-r from-blue-400 to-purple-500">
      <div className="bg-white w-87.5 p-10 rounded-xl shadow-lg">
        <h1 className="text-center text-3xl font-bold mb-10">Login</h1>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-6"
        >
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="border-b-2 outline-none py-2"
            type="email"
            placeholder="Email"
          />

          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="border-b-2 outline-none py-2"
            type="password"
            placeholder="Password"
          />

          <button
            onClick={handleClick}
            className="bg-linear-to-r from-blue-400 to-purple-500 text-white py-2 rounded-md"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-6 text-sm">
          Forgot <span className="text-blue-600 cursor-pointer">Password?</span>
        </p>

        <p className="text-center text-sm mt-2">
          Don't have an account?{" "}
          <span className="text-blue-600 cursor-pointer">Sign up</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
