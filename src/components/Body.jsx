import axios from "axios";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);

  const fetchUser = async () => {
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (error) {
      if (error.status === 401) {
        navigate("/login");
      }
      // console.log("Axios error:", error); // full error
      // console.log("Axios error response:", error.response); // response object
      // console.log("Axios error data:", error.response?.data); // backend message
    }
  };

  useEffect(() => {
    if (!userData) {
      fetchUser();
    }
  }, []);

  return (
  <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
  <NavBar />

  <main className="flex-grow">
    <Outlet />
  </main>

  <Footer />
</div>

  );
};

export default Body;
