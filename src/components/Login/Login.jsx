import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase";

const Login = () => {
  const [cookies, setCookie, removeCookie] = useCookies([
    "pin",
    "access_token",
  ]);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    if (cookies.pin !== "2306") {
      navigate("/");
    }
    if (cookies.access_token) {
      navigate("/admin");
    }
  }, [cookies.pin, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        setCookie("access_token", user.accessToken);
        navigate("/admin");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="min-h-screen w-screen flex justify-center items-center bg-gray-300">
      <div className="bg-white shadow-lg max-w-2xl rounded-md">
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="outline-none h-6 w-full bg-gray-300 border-x-2 border-red-500"
            />
          </div>
          <div>
            <label htmlFor="pass" className="text-sm font-medium">
              Pass
            </label>
            <input
              type="pass"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required
              className="outline-none h-6 w-full bg-gray-300 border-x-2 border-red-500"
            />
          </div>
          <button
            className="w-full bg-green-600 text-white rounded-b-md mt-6"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
