import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { fetchPosts, reactionAdded } from "./postsSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { updatePost } from "../Post/postSlice";

const PostsList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [changed, setChanged] = useState(false);
  const posts = useSelector((state) => state.posts.posts);
  const error = useSelector((state) => state.posts.error);
  const status = useSelector((state) => state.posts.status);

  const onReactionClicked = (reaction, postId) => {
    const existingPost = posts.find((post) => post.id == postId);
    dispatch(
      updatePost({
        data: {
          ...existingPost,
          reactions: {
            ...existingPost.reactions,
            [reaction]: existingPost.reactions[reaction] + 1,
          },
        },
        navigateURL: "posts",
        navigate,
      })
    );
    setChanged(true);
  };

  useEffect(() => {
    dispatch(fetchPosts());
    setChanged(false);
  }, [changed]);

  // if (status === "idle" || status === "pending") {
  //   return <h1>Loading</h1>;
  // }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <>
      <section className="container text-bg-dark p-5">
        <h3 className="mb-4">Posts</h3>
        <div className="d-flex gap-3 flex-wrap">
          <div className="row g-3">
            {posts.map((post) => {
              return (
                <div className="col-12 col-md-6 col-lg-4" key={post.id}>
                  <article key={post.id} className="card p-4 gap-3">
                    <h3>{post.title.substring(0, 15)}</h3>
                    <p>{post.body.substring(0, 40)}</p>
                    <button
                      type="button"
                      className="btn btn-dark"
                      onClick={() => navigate(`/posts/${post.id}`)}
                    >
                      View More
                    </button>
                    <div className="d-flex gap-2">
                      <span
                        className="badge rounded-pill bg-dark p-2 p-cursor"
                        onClick={() => onReactionClicked("thumbsUp", post.id)}
                      >
                        👍 {post.reactions.thumbsUp}
                      </span>
                      <span
                        className="badge rounded-pill bg-dark p-2 p-cursor"
                        onClick={() => onReactionClicked("wow", post.id)}
                      >
                        🤯 {post.reactions.wow}
                      </span>
                      <span
                        className="badge rounded-pill bg-dark p-2 p-cursor"
                        onClick={() => onReactionClicked("heart", post.id)}
                      >
                        ❤ {post.reactions.heart}
                      </span>
                      <span
                        className="badge rounded-pill bg-dark p-2 p-cursor"
                        onClick={() => onReactionClicked("rocket", post.id)}
                      >
                        🚀 {post.reactions.rocket}
                      </span>
                      <span
                        className="badge rounded-pill bg-dark p-2 p-cursor"
                        onClick={() => onReactionClicked("coffee", post.id)}
                      >
                        ☕ {post.reactions.coffee}
                      </span>
                    </div>
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

export default PostsList;
