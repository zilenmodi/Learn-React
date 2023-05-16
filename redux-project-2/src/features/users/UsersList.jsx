import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "./usersSlice";
// import { useGetUsersQuery } from "../apis/apisSlice";
// import { extendedApi, selectAllUsers } from "./usersSlice";

const UsersList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.entities);
  // const { isLoading, isError, error, isSuccess } = useGetUsersQuery();
  // const users = useSelector(selectAllUsers);

  if (!users) {
    return <h1>Loading...</h1>;
  }

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <section className="container text-bg-dark p-5">
        <h3 className="mb-4">Users</h3>
        <div className="d-flex gap-3 flex-wrap">
          <div className="row g-3">
            {Object.keys(users).map((userId) => {
              return (
                <div className="col-12 col-md-6 col-lg-4" key={userId}>
                  <article key={userId} className="card p-4">
                    <h3>{users[userId].name}</h3>
                    <p>{users[userId].username}</p>
                    <p>{users[userId].email}</p>
                    <button
                      type="button"
                      className="btn btn-dark"
                      onClick={() => navigate(`/users/${userId}`)}
                    >
                      View More
                    </button>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default UsersList;
