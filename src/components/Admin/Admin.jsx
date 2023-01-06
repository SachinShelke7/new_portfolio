import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";

const Admin = () => {
  const [cookies, setCookie, removeCookie] = useCookies([
    "access_token",
    "pin",
  ]);
  const [messages, setMessages] = useState([]);

  const navigate = useNavigate();

  if (!cookies.access_token) {
    navigate("/");
  }
  const getData = async () => {
    let msgs = [];
    const fetchDD = await getDocs(collection(db, "messages"));
    fetchDD.forEach((doc) => {
      msgs.push(doc.data());
    });
    setMessages(msgs);
  };
  useEffect(() => {
    getData();
  }, []);

  const signOut = () => {
    removeCookie("access_token");
    removeCookie("pin");
  };

  return (
    <div className="bg-gray-200 min-h-screen font-saira flex flex-col">
      <button
        className="bg-green-500 text-white rounded-md absolute top-5 left-5 py-1 px-2"
        onClick={() => navigate("/")}
      >
        Go To Portfolio
      </button>
      <button
        className="bg-red-500 text-white rounded-md absolute top-5 right-5 py-1 px-2"
        onClick={signOut}
      >
        SignOut
      </button>
      <h1 className="text-center text-2xl font-medium w-full border-b border-black py-5">
        Admin Dashboard
      </h1>
      <div className="grid md:grid-cols-2">
        {messages.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col p-5 bg-zinc-700 text-white m-5 rounded-md border border-orange-600 h-fit"
            >
              <h3>Name: {item.name}</h3>
              <h3>Email: {item.lastName}</h3>
              <p className="p-1 rounded-md text-sm font-medium border border-white">
                Message: {item.message}
              </p>
            </div>
          );
        })}
      </div>
      <h1 className="text-center text-xl font-medium w-full border-t border-black absolute bottom-0">
        Sachin Shelke
      </h1>
    </div>
  );
};

export default Admin;
