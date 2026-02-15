import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";

const Login = () => {
  const navigate = useNavigate();
  const [emailId, setEmailId] = useState("Anna2@gmail.com");
  const [password, setPassword] = useState("Anna@123456");
  const [error,setError] = useState("")

  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      // console.log("Sending:", {
      //   emailId,
      //   password,
      // });

      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId: emailId,
          password: password,
        },
        {
          withCredentials: true,
        },
      );

      // console.log("Response:", res.data);
      dispatch(addUser(res.data));
      navigate("/");
    } catch (error) {
      setError(error?.response?.data || "Something went wrong")
      //   console.log("Axios error:", error); // full error
      // console.log("Axios error response:", error.response); // response object
      // console.log("Error response:", error.response?.data);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 text-primary-content w-96">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email ID :{emailId}</legend>
              <input
                type="text"
                value={emailId || ""}
                onChange={(e) => setEmailId(e.target.value)}
                className="input"
                placeholder="Type here"
              />
            </fieldset>
          </div>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password : {password}</legend>
              <input
                type="password"
                value={password || ""}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                placeholder="Type here"
              />
            </fieldset>
          </div>
          <p className="text-red-500">
          {error}
          </p>
          <div className="card-actions justify-center">
            <button className="btn bg-secondary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
