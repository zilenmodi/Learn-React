import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updatePost } from "./postSlice";

const EditPost = () => {
  const navigate = useNavigate();
  const disptach = useDispatch();
  const post = useSelector((state) => state.post.post);
  const [data, setData] = useState({
    title: post.title,
    body: post.body,
  });
  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (data.title.length && data.body.length) {
      setData({
        title: "",
        body: "",
      });
      disptach(
        updatePost({
          navigate,
          navigateURL: `posts/${post.id}`,
          data: { ...post, title: data.title, body: data.body },
        })
      );
    }
  };
  return (
    <>
      <section className="container text-bg-dark p-5 mb-2">
        <h3 className="mb-4">Edit Post</h3>
        <form className="form">
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Write Title..."
              value={data.title}
              onChange={(e) =>
                setData((prev) => ({ ...prev, title: e.target.value }))
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Content</label>
            <input
              type="text"
              className="form-control"
              id="content"
              placeholder="Write Content..."
              value={data.body}
              onChange={(e) =>
                setData((prev) => ({ ...prev, body: e.target.value }))
              }
            />
          </div>
          <button onClick={handleSubmitClick} className="btn btn-light">
            Save
          </button>
        </form>
      </section>
    </>
  );
};

export default EditPost;
