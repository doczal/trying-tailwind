import React, { useState, useEffect } from 'react';

function Posts() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await res.json();
      console.log(posts);
      setPosts(posts.slice(0, 11));
      setHasLoaded(true);
    }
    fetchPosts();
  }, []);
  return (
    <>
      <main className="container">
        <h1 className="title">Posts</h1>
        <div className="flex flex-wrap -mx-2">
          {hasLoaded &&
            posts.map((post, idx) => (
              <article
                key={idx}
                className="flex flex-col flex-none w-1/2 md:w-1/3 px-2 mb-4"
              >
                <div className="bg-gray-500 img-16by9"></div>
                <div className="bg-gray-100 p-2 flex flex-col flex-1">
                  <h2 className="font-bold mb-2 text-lg capitalize">
                    {post.title}
                  </h2>
                  <p>
                    {post.body.length > 80
                      ? `${post.body.slice(0, 100)}...`
                      : post.body}
                  </p>
                </div>
              </article>
            ))}
        </div>
      </main>
    </>
  );
}

export default Posts;
