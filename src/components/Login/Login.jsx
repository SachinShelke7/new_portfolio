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
  }, [cookies.access_token, cookies.pin, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        setCookie("access_token", user.accessToken);
        navigate("/admin");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="min-h-screen w-screen flex justify-center items-center bg-gray-100">
      <div className="bg-green-400 p-[2px] rounded-md border-2">
        <div className="bg-white shadow-lg rounded-md z-10">
          <form onSubmit={handleSubmit} className="p-10 flex flex-col gap-5">
            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="outline-none w-full bg-gray-100 h-8 border-x-2 border-green-500 px-1"
                placeholder="example@gmail.com"
              />
            </div>
            <div>
              <label htmlFor="pass" className="text-sm font-medium">
                Pass
              </label>
              <input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                required
                className="outline-none h-8 w-full bg-gray-100 border-x-2 border-green-500 px-1"
                placeholder="Password"
              />
            </div>
            <div className="w-full flex justify-center">
              <button
                className="px-4 py-2 bg-green-600 text-white mt-6"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
