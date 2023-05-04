import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setPost } from "./postsSlice";

const AddPostForm = () => {
  const disptach = useDispatch();
  const [data, setData] = useState({
    id: "",
    title: "",
    content: "",
  });
  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (data.title.length && data.content.length) {
      disptach(
        setPost({
          title: data.title,
          body: data.content,
        })
      ).unwrap();
      setData({
        id: "",
        title: "",
        content: "",
      });
    }
  };
  return (
    <>
      <section className="container text-bg-dark p-5 mb-2">
        <h3 className="mb-4">Add new Posts</h3>
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
              value={data.content}
              onChange={(e) =>
                setData((prev) => ({ ...prev, content: e.target.value }))
              }
            />
          </div>
          <button onClick={handleSubmitClick} className="btn btn-light">
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default AddPostForm;
