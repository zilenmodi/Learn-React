import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deletePost, fetchPost } from "./postSlice";

const Post = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const post = useSelector((state) => state.post.post);
  const status = useSelector((state) => state.post.status);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch]);

  if (status === "idle" || status === "pending") {
    return <h1>Loading...</h1>;
  }

  const handleDeleteBtn = () => {
    dispatch(deletePost({ id, navigate }));
  };

  return (
    <>
      <article key={post.id} className="card p-4 w-75 w-md-25 mx-auto">
        <h3>{post.title.substring(0, 15)}</h3>
        <p>{post.body.substring(0, 40)}</p>
        <div className="d-flex gap-3">
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => navigate(`/posts/edit/${post.id}`)}
          >
            Edit
          </button>
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

export default Post;
