import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(user.firstName || "");
  const [lastName, setLastName] = useState(user.lastName || "");
  const [age, setAge] = useState(user.age || "");
  const [gender, setGender] = useState(user.gender || "");
  const [about, setAbout] = useState(user.about || "");
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl || "");
  const [showToast, setShowToast] = useState(false);

  const [error, setError] = useState("");

  const saveProfile = async () => {
    setError("");
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          age,
          gender,
          about,
          photoUrl,
        },
        { withCredentials: true },
      );
      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      const i = setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (error) {
      setError(error.response.data);
      setShowToast(false);
    }
  };

  return (
    <>
      <div className="flex justify-center my-10">
        <div className="flex justify-center my-10 mx-10">
          <div className="card bg-base-300 text-primary-content w-96">
            <div className="card-body">
              <h2 className="card-title justify-center">Edit Profile</h2>
              <div>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">First Name :</legend>
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
                  <legend className="fieldset-legend">LastName :</legend>
                  <input
                    type="text"
                    value={lastName || ""}
                    onChange={(e) => setLastName(e.target.value)}
                    className="input"
                    placeholder="Type here"
                  />
                </fieldset>
              </div>
              <div>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Photo Url :</legend>
                  <input
                    type="text"
                    value={photoUrl || ""}
                    onChange={(e) => setPhotoUrl(e.target.value)}
                    className="input"
                    placeholder="Type here"
                  />
                </fieldset>
              </div>
              <div>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Age :</legend>
                  <input
                    type="number"
                    value={age || ""}
                    onChange={(e) => setAge(e.target.value)}
                    className="input"
                    placeholder="Type here"
                  />
                </fieldset>
              </div>
              <div>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Gender :</legend>
                  <input
                    type="text"
                    value={gender || ""}
                    onChange={(e) => setGender(e.target.value)}
                    className="input"
                    placeholder="Type here"
                  />
                </fieldset>
              </div>
              <div>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">About :</legend>
                  <input
                    type="text"
                    value={about || ""}
                    onChange={(e) => setAbout(e.target.value)}
                    className="input"
                    placeholder="Type here"
                  />
                </fieldset>
              </div>

              <p className="text-red-500">{error}</p>
              <div className="card-actions justify-center">
                <button className="btn bg-secondary" onClick={saveProfile}>
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
        <UserCard
          user={{ firstName, lastName, age, gender, about, photoUrl }}
        />
      </div>
      <div className="toast toast-top toast-center">
        {showToast && (
          <div className="alert alert-success">
            <span>Profile was saved successfully.</span>
          </div>
        )}
      </div>
    </>
  );
};

export default EditProfile;
