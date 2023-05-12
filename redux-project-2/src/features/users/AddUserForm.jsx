import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { setUser, usersAddOne } from "./usersSlice";

const AddUserForm = () => {
  const navigate = useNavigate();
  const disptach = useDispatch();
  // const [userData, setUserData] = useState({
  //   name: "",
  //   username: "",
  //   email: "",
  //   address: {
  //     street: "",
  //     suite: "",
  //     city: "",
  //     zipcode: "",
  //     geo: {
  //       lat: "",
  //       lng: "",
  //     },
  //   },
  //   phone: "",
  //   website: "",
  //   company: {
  //     name: "",
  //     catchPhrase: "",
  //     bs: "",
  //   },
  // });

  // const updateData = (e) => {
  //   const { id, value } = e.target;
  //   if (
  //     id === "street" ||
  //     id === "suite" ||
  //     id === "city" ||
  //     id === "zipcode"
  //   ) {
  //     setUserData({
  //       ...userData,
  //       address: { ...userData.address, [id]: value },
  //     });
  //   } else {
  //     setUserData({ ...userData, [id]: value });
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   disptach(setUser({ ...userData, id: nanoid() }, navigate));
  // };

  return (
    <>
      {/* <section className="container text-bg-dark p-5 mb-2">
        <h3 className="mb-4">Add new Users</h3>
        <form className="form">
          <div className="row">
            <div className="col-md-4 mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Write Name..."
                value={userData.name}
                onChange={(e) => updateData(e)}
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Write Username..."
                value={userData.username}
                onChange={(e) => updateData(e)}
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Write Email..."
                value={userData.email}
                onChange={(e) => updateData(e)}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-3">
              <label className="form-label">Street</label>
              <input
                type="text"
                className="form-control"
                id="street"
                placeholder="Write Street..."
                value={userData.address.street}
                onChange={(e) => updateData(e)}
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">Suite</label>
              <input
                type="text"
                className="form-control"
                id="suite"
                placeholder="Write Suite..."
                value={userData.address.suite}
                onChange={(e) => updateData(e)}
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                placeholder="Write City..."
                value={userData.address.city}
                onChange={(e) => updateData(e)}
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4 mb-3">
              <label className="form-label">Zipcode</label>
              <input
                type="number"
                className="form-control"
                id="zipcode"
                placeholder="Write Zipcode..."
                value={userData.address.zipcode}
                onChange={(e) => updateData(e)}
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">Phone no.</label>
              <input
                type="number"
                className="form-control"
                id="phone"
                placeholder="Write Phone no..."
                value={userData.phone}
                onChange={(e) => updateData(e)}
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">Website</label>
              <input
                type="text"
                className="form-control"
                id="website"
                placeholder="Write Website..."
                value={userData.website}
                onChange={(e) => updateData(e)}
                required
              />
            </div>
          </div>
          <button className="btn btn-light" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </section> */}
    </>
  );
};

export default AddUserForm;
