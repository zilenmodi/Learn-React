import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { fetchPosts, reactionAdded } from "./postsSlice";
import { useEffect } from "react";

const PostsList = () => {
  const posts = useSelector((state) => state.posts.posts);
  const error = useSelector((state) => state.posts.error);
  const status = useSelector((state) => state.posts.status);
  const dispatch = useDispatch();

  const onReactionClicked = (reaction, postId) => {
    dispatch(reactionAdded({ reaction, postId }));
  };

  useEffect(() => {
    setTimeout(() => dispatch(fetchPosts()), 1000);
  }, [dispatch]);

  if (status === "idle" || status === "pending") {
    return <h1>Loading</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <>
      <section className="container text-bg-dark p-5">
        <h3 className="mb-4">Posts</h3>
        <div className="d-flex gap-3 flex-wrap">
          {posts.map((post) => {
            return (
              <article key={post.id} className="card p-4">
                <h3>{post.title.substring(0, 15)}</h3>
                <p>{post.body.substring(0, 40)}</p>
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
            );
          })}
        </div>
      </section>
    </>
  );
};

export default PostsList;
