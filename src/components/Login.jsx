import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";

const Login = () => {
  const navigate = useNavigate();
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleSignup = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName, emailId, password },
        { withCredentials: true },
      );
      dispatch(addUser(res.data.data));
      return navigate("/profile");
    } catch (error) {
      setError(error?.response?.data || "Something went wrong");
    }
  };

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
      setError(error?.response?.data || "Something went wrong");
      //   console.log("Axios error:", error); // full error
      // console.log("Axios error response:", error.response); // response object
      // console.log("Error response:", error.response?.data);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 text-primary-content w-96">
        <div className="card-body">
          <h2 className="card-title justify-center">
            {isLoginForm ? "Login" : "Signup"}
          </h2>

          {!isLoginForm && (
            <>
              <div>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">FirstName</legend>
                  <input
                    type="text"
                    value={firstName || ""}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="input"
                    placeholder="Type here"
                  />
                </fieldset>
              </div>
              <div>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">LastName</legend>
                  <input
                    type="text"
                    value={lastName || ""}
                    onChange={(e) => setLastName(e.target.value)}
                    className="input"
                    placeholder="Type here"
                  />
                </fieldset>
              </div>
            </>
          )}
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
          <p className="text-red-500">{error}</p>
          <div className="card-actions justify-center">
            <button
              className="btn bg-secondary"
              onClick={isLoginForm ? handleLogin : handleSignup}
            >
              {isLoginForm ? "Login" : "signup"}
            </button>
          </div>
          <p
            className="m-auto cursor-pointer py-2"
            onClick={() => setIsLoginForm((value) => !value)}
          >
            {isLoginForm
              ? "New User? Signup Here"
              : "Existing User? Login Here"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
