import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteUser } from "../users/usersSlice";
import { fetchUser } from "./userSlice";

const User = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.entities);

  useEffect(() => {
    dispatch(fetchUser(id));
  }, [dispatch]);
  if (!user[id]) {
    return <h1>Loading...</h1>;
  }

  const handleDeleteBtn = () => {
    dispatch(deleteUser(id, navigate));
  };

  return (
    <>
      <article key={id} className="card p-4 w-75 w-md-50 mx-auto">
        <h3>Name: {user[id].name}</h3>
        <p>Username: {user[id].username}</p>
        <p>Email: {user[id].email}</p>
        <p>
          Address: {user[id].address.street}
          {", "}
          {user[id].address.suite}
          {", "}
          {user[id].address.city}
        </p>
        <p>Zipcode: {user[id].address.zipcode}</p>
        <p>Phone no: {user[id].phone.substring(0, 12)}</p>
        <p>Website: {user[id].website}</p>
        <div className="d-flex gap-3">
          <button
            type="button"
            className="btn btn-dark"
            onClick={handleDeleteBtn}
          >
            Delete
          </button>
        </div>
      </article>
    </>
  );
};

export default User;
